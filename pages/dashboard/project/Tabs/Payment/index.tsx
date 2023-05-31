import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { TableRow, TableCell, Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Details from './Details';
export const rows = [
  {
    config: documentsConfig.project_payment
  }
];
const DocumentRow = ({
  data,
  documents = [],
  user,
  rowNo,
  projectTitle,
  hideAdditionalDocuments
}) => {
  const [images, setImages] = useState([]);
  const [imagesChanged, setImagesChange] = useState([]);
  const [moreRow, setMoreRow] = useState(rowNo);
  const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setMoreRow(rowNo);
  }, [rowNo]);
  useEffect(() => {
    const _imgs = [];
    for (let _document of documents) {
      _imgs.push(_document.url);
    }
    setImages(_imgs);
  }, [documents, user]);
  console.log(imagesChanged);
  const handleCreateDocument = async (title: string, url: string) => {
    return await createDocument({
      variables: {
        title,
        url
      }
    });
  };

  const handleUpdateDocument = async (
    id: string,
    title: string,
    url: string
  ) => {
    return await updateDocument({
      variables: {
        id,
        title,
        url
      }
    });
  };

  /*   const isValidToClick = () => {
    const hasSomethingChanged = imagesChanged.find((img) => {
      if (img) {
        return true;
      }
    });
    if (rowNo == data.config.items.length && hasSomethingChanged) {
      return true;
    }
  }; */
  const updateUser = (id, title, imgUrl) => {
    let newUser = user;
    let newDocs = [];
    user.documents.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, title: 'avatar' });
      } else if (item.title !== title) {
        newDocs.push(item);
      }
    });
    console.log(imgUrl, { ...newUser, documents: newDocs });
    return { ...newUser, documents: newDocs };
  };

  const handleDocumentUpload = async () => {
    setLoading(true);

    // console.log({ imagesChanged, images });
    //handle upload
    try {
      for (let i = 0; i < moreRow; i++) {
        console.log('data.config.items[i].id', data.config.items[i].id);
        if (imagesChanged[i]) {
          const documentTitle = projectTitle + '_' + data.config.items[i].id;
          const imgUrl = await handleImageUpload(images[i]);
          const _document = documents.find((document) => {
            if (document.title.toLowerCase() === documentTitle.toLowerCase()) {
              return true;
            }
          });
          let userAllDocuments = user.documents;
          if (!userAllDocuments) {
            userAllDocuments = [];
          }
          if (_document) {
            const resp = await handleUpdateDocument(
              _document.id,
              documentTitle,
              imgUrl
            );
            await dispatch(
              setOrUpdateUser(updateUser(_document.id, documentTitle, imgUrl))
            );
            toast.success(`${documentTitle} Uploaded`);
            // location.reload();

            const listAfterRemovingExistingDocument = userAllDocuments.filter(
              (doc: any) => {
                return doc.id !== document.id;
              }
            );
            listAfterRemovingExistingDocument.push(resp.data.updateDocument);
            userAllDocuments = listAfterRemovingExistingDocument;
          } else {
            //create document
            const resp = await handleCreateDocument(documentTitle, imgUrl);
            toast.success(`${documentTitle} Uploaded`);
            userAllDocuments = [...userAllDocuments, resp.data.createDocument];
          }
          const _user = { ...user };
          _user.documents = userAllDocuments;
          dispatch(setOrUpdateUser(_user));
        }
      }
    } catch (err) {
      console.log('error', err);
    }
    setLoading(false);
  };
  const getActionCell = () => {
    const views = [];
    const items = data.config.items;
    for (let i = 0; i < moreRow; i++) {
      views.push(
        <Button
          style={{
            cursor: documents[0]
              ? documents[0].status === 'APPROVED'
                ? 'not-allowed'
                : 'pointer'
              : 'pointer',
            marginTop: '10px'
          }}
          component="label"
          color={
            documents[0]
              ? documents[0].status === 'APPROVED'
                ? 'secondary'
                : 'primary'
              : 'primary'
          }
        >
          Choose {items[i]?.name}
          <input
            type="file"
            accept="image/*"
            hidden
            disabled={
              documents[0]
                ? documents[0].status === 'APPROVED'
                  ? true
                  : false
                : false
            }
            onChange={(f) => {
              console.log(i);
              if (f.target.files.length > 0) {
                const _images = [...images];
                _images[i] = f.target.files[0];
                setImages(_images);
                console.log('imageChanged', _images[i]);
                const _imagesChanged = [...imagesChanged];
                _imagesChanged[i] = true;
                setImagesChange(_imagesChanged);
              }
            }}
          />
        </Button>
      );
    }
    return views;
  };

  const getPreview = () => {
    const views: any = [];
    const items = data.config.items;
    for (let i = 0; i < moreRow; i++) {
      const _img = images[i];
      if (_img) {
        views.push(
          <img
            src={typeof _img == 'object' ? URL.createObjectURL(_img) : _img}
            height={100}
            style={{ marginLeft: '5px' }}
          />
        );
      }
    }
    if (views.length == 0) {
      return <Typography variant="subtitle1">No Document</Typography>;
    }
    return views;
  };
  return (
    <>
      <TableRow
        key={data.config.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {data.config.name} {data.isOptional ? '(Optional)' : ''}
        </TableCell>

        <TableCell>{getPreview()}</TableCell>

        <TableCell style={{}}>{getActionCell()}</TableCell>
        <TableCell>
          <LoadingButton
            loading={isLoading}
            // disabled={!isValidToClick()}
            variant="contained"
            onClick={() => {
              handleDocumentUpload();
            }}
          >
            Upload
          </LoadingButton>
        </TableCell>

        <TableCell>
          <span
            style={{
              color: documents[0]
                ? (documents[0].status === 'APPROVED' && 'green') ||
                  (documents[0].status === 'REJECTED' && 'red')
                : ''
            }}
          >
            {documents[0] && documents[0].status}
          </span>
        </TableCell>
      </TableRow>
      {moreRow <= 3 && (
        <>
          <LoadingButton
            variant="contained"
            onClick={() => {
              setMoreRow(moreRow + 1);
            }}
          >
            Add More
          </LoadingButton>
          <LoadingButton
            sx={{ marginLeft: 2 }}
            variant="contained"
            onClick={hideAdditionalDocuments}
          >
            Go Back
          </LoadingButton>
        </>
      )}
    </>
  );
};
const InfoTab = ({ title }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);
  const [additionalDocuments, setAdditionalDocuments] = useState(false);
  const [rowNo, setRowNo] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [proofImage, setProofImage] = useState<any | null>(null);
  const [paymentDocument, setPaymentDocument] = useState<DocumentType | null>();
  const [isImageChanged, setImageChanged] = useState(false);
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] = useState(false);
  const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const validateSubmit = (imgUrl) => {
    if (!imgUrl) {
      alert('Invalid Image');
      return false;
    }

    return true;
  };
  const getDocNum = () => {
    let count = 0;
    user.documents.map((doc) => {
      if (
        doc.title.slice(0, 17 + title.length).toLowerCase() ===
        title.toLowerCase() + '_' + documentsConfig.project_payment.id + '_'
      ) {
        count += 1;
      }
      setRowNo(count);
    });
  };
  const getDocumentsByConfig = (configs) => {
    const documents = [];
    if (user && user.documents) {
      for (let config of configs) {
        const document = user.documents.find((doc: DocumentType) => {
          if (
            doc.title.toLowerCase() ===
            title.toLowerCase() + '_' + config.id.toLowerCase()
          ) {
            return true;
          }
        });
        if (document) {
          documents.push(document);
        }
      }
    }
    return documents;
  };

  const updateUser = (id, imgUrl) => {
    let newUser = user;
    let newDocs = [];
    user.documents.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, url: imgUrl });
        // newDocs.push(...item, url:imgUrl);
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
  };
  const handlePaymentSubmit = async () => {
    const isValid = validateSubmit(proofImage);
    if (!isValid) {
      return;
    }
    setLoading(true);

    try {
      let imgUrl = '';
      if (isImageChanged) {
        imgUrl = await handleImageUpload(proofImage);
      } else {
        imgUrl = proofImage;
      }

      toast.success('Payment Slip Updated ');
      if (paymentDocument) {
        await updateDocument({
          variables: {
            title:
              title.toLowerCase() + '_' + documentsConfig.project_payment.id,
            url: imgUrl,
            id: paymentDocument.id
          }
        });

        dispatch(setOrUpdateUser(updateUser(paymentDocument.id, imgUrl)));
      } else {
        await createDocument({
          variables: {
            title:
              title.toLowerCase() + '_' + documentsConfig.project_payment.id,
            url: imgUrl
          }
        });
      }
    } catch (err) {}
    setLoading(false);
  };
  useEffect(() => {
    setPaymentDocument(null);
    setProofImage(null);
    if (user && user.documents && user.documents.length > 0) {
      user.documents.find((document: DocumentType) => {
        if (
          document.title.toLowerCase() ===
          title.toLowerCase() + '_' + documentsConfig.project_payment.id
        ) {
          setPaymentDocument(document);
          setProofImage(document.url);
        }
      });
    }
  }, [user, title]);
  useEffect(() => {
    getDocNum();
  }, [title]);

  const hideAdditionalDocuments = () => {
    setAdditionalDocuments(false);
  };

  return (
    <>
      {!additionalDocuments ? (
        <>
          <Details title={title} />
          <Typography variant="h4" sx={{ my: 2 }}>
            Enroll Payment Receipt
          </Typography>
          {proofImage ? (
            <img
              src={
                typeof proofImage == 'object'
                  ? URL.createObjectURL(proofImage)
                  : proofImage
              }
              style={{ marginTop: '10px', maxWidth: '100%' }}
              height={200}
            />
          ) : null}
          {paymentDocument && paymentDocument.status && (
            <Typography variant="h4" sx={{ my: 2 }}>
              Status :{' '}
              <span
                style={{
                  color: paymentDocument
                    ? (paymentDocument.status === 'APPROVED' && 'green') ||
                      (paymentDocument.status === 'REJECTED' && 'red')
                    : ''
                }}
              >
                {paymentDocument && paymentDocument.status}
              </span>
            </Typography>
          )}
          {user.kyc === 'APPROVED' ? null : (
            <Grid container py={2} spacing={2}>
              <Grid item xs={12} sm={5} md={3} lg={3}>
                <Button
                  variant="contained"
                  component="label"
                  style={{
                    cursor: paymentDocument
                      ? paymentDocument.status === 'APPROVED'
                        ? 'not-allowed'
                        : 'pointer'
                      : 'pointer'
                  }}
                  color={
                    paymentDocument
                      ? paymentDocument.status === 'APPROVED'
                        ? 'secondary'
                        : 'primary'
                      : 'primary'
                  }
                >
                  Select Payment Slip
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    disabled={
                      paymentDocument
                        ? paymentDocument.status === 'APPROVED'
                          ? true
                          : false
                        : false
                    }
                    onChange={(f) => {
                      if (f.target.files.length > 0) {
                        setSubmitButtonEnabled(true);
                        setProofImage(f.target.files[0]);
                        setImageChanged(true);
                      }
                    }}
                  />
                </Button>
              </Grid>
              <Grid item xs={2}>
                <LoadingButton
                  loading={isLoading}
                  fullWidth
                  variant="contained"
                  disabled={!isSubmitButtonEnalbed}
                  onClick={() => {
                    handlePaymentSubmit();
                  }}
                >
                  Submit
                </LoadingButton>
              </Grid>
              <Toaster position="bottom-center" reverseOrder={false} />
            </Grid>
          )}
          {proofImage && (
            <LoadingButton
              variant="contained"
              onClick={() => {
                setAdditionalDocuments(true);
              }}
            >
              Add/See Additional Documents
            </LoadingButton>
          )}
        </>
      ) : (
        <>
          {rows.map((row, index) => (
            <DocumentRow
              hideAdditionalDocuments={hideAdditionalDocuments}
              data={row}
              rowNo={rowNo}
              key={index}
              projectTitle={title}
              user={user}
              documents={getDocumentsByConfig(row.config.items)}
            />
          ))}
        </>
      )}
    </>
  );
};
export default InfoTab;
import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Button, Grid, TableCell, TableRow, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PaymentInfo from './paymentDetails';

export const rows = [
  {
    config: documentsConfig.additional_documents
  }
];
const DocumentRow = ({
  data,
  documents = [],
  user,
  rowNo,
  hideAdditionalDocuments
}) => {
  const [images, setImages] = useState([]);
  const [imagesChanged, setImagesChange] = useState([]);
  const [moreRow, setMoreRow] = useState(rowNo);
  const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [isLoading, setLoading] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState([]);

  const dispatch = useAppDispatch();
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
  const statusCheck = (docId) => {
    let updatedStatus = false;
    statusUpdate?.map((stat) => {
      if (docId === stat.id) {
        updatedStatus = stat.status;
      }
    });
    // console.log(updatedStatus);
    return updatedStatus;
  };
  const isValidToClick = () => {
    const hasSomethingChanged = imagesChanged.find((img) => {
      if (img) {
        return true;
      }
    });
    if (rowNo == data.config.items.length && hasSomethingChanged) {
      return true;
    }
  };
  const updateUser = (id, title, imgUrl) => {
    let newUser = user;
    let newDocs = [];
    user?.documents?.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, title: 'avatar' });
      } else if (item.title !== title) {
        newDocs.push(item);
      }
    });
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
          const documentTitle = data.config.items[i].id;
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
            toast.success('Document Uploaded');
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
        <div style={{ height: 160, marginTop: 10 }}>
          <div style={{ marginBottom: 10 }}>
            Status:{' '}
            <span
              style={{
                color:
                  statusCheck(documents[i]?.id) === 'APPROVED'
                    ? 'green'
                    : statusCheck(documents[i]?.id) === 'REJECTED'
                    ? 'red'
                    : documents[i]
                    ? (documents[i].status === 'APPROVED' && 'green') ||
                      (documents[i].status === 'REJECTED' && 'red')
                    : ''
              }}
            >
              {statusCheck(documents[i]?.id) ||
                documents[i]?.status ||
                'NOT STARTED'}
            </span>
          </div>
          <Button
            style={{
              cursor: documents[0]
                ? documents[0].status === 'APPROVED'
                  ? 'not-allowed'
                  : 'pointer'
                : 'pointer',
              marginTop: '10px'
            }}
            disabled={
              statusCheck(documents[i]?.id) === 'APPROVED' ||
              documents[i]?.status == 'APPROVED'
            }
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
        </div>
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
          <div style={{ marginTop: 15 }}>
            <img
              src={typeof _img == 'object' ? URL.createObjectURL(_img) : _img}
              height={150}
              style={{ marginLeft: '5px' }}
            />
          </div>
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
      <TableRow key={data.config.name} sx={{}}>
        <TableCell component="th" scope="row" style={{ border: 'none' }}>
          {data.config.name} {data.isOptional ? '(Optional)' : ''}
        </TableCell>

        <TableCell
          style={{ display: 'flex', flexDirection: 'column', border: 'none' }}
          width={300}
        >
          {getPreview()}
        </TableCell>

        <TableCell style={{ border: 'none' }}>{getActionCell()}</TableCell>
        <TableCell style={{ border: 'none' }}>
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
      </TableRow>
      {moreRow <= 3 && (
        <LoadingButton
          variant="contained"
          disabled={images.length !== moreRow}
          onClick={() => {
            setMoreRow(moreRow + 1);
          }}
        >
          Add More
        </LoadingButton>
      )}
      <LoadingButton
        sx={{ marginLeft: 2 }}
        variant="contained"
        onClick={hideAdditionalDocuments}
      >
        Go Back
      </LoadingButton>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};
const InfoTab = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);
  const [additionalDocuments, setAdditionalDocuments] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [proofImage, setProofImage] = useState<any | null>(null);
  const [rowNo, setRowNo] = useState(0);
  const [paymentDocument, setPaymentDocument] = useState<DocumentType>();
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
    user?.documents?.map((doc) => {
      if (doc.title.slice(0, 22) === 'additional_payment_doc') {
        count += 1;
      }
      setRowNo(count);
    });
  };
  const getDocumentsByConfig = (configs) => {
    const documents = [];
    if (user && user.documents) {
      for (let config of configs) {
        const document = user?.documents?.find((doc: DocumentType) => {
          if (doc.title.toLowerCase() === config.id.toLowerCase()) {
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
    user?.documents?.map((item) => {
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
            title: documentsConfig.payment_proof.items[0].id,
            url: imgUrl,
            id: paymentDocument.id
          }
        });

        dispatch(setOrUpdateUser(updateUser(paymentDocument.id, imgUrl)));
      } else {
        await createDocument({
          variables: {
            title: documentsConfig.payment_proof.items[0].id,
            url: imgUrl
          }
        });
      }
    } catch (err) {}
    setLoading(false);
  };
  useEffect(() => {
    getDocNum();
  }, []);

  useEffect(() => {
    if (user && user.documents && user?.documents?.length > 0) {
      user?.documents?.find((document: DocumentType) => {
        if (
          document.title.toLowerCase() ===
          documentsConfig.payment_proof.items[0].id
        ) {
          setPaymentDocument(document);
          setProofImage(document.url);
        }
      });
    }
  }, [user]);
  const hideAdditionalDocuments = () => {
    setAdditionalDocuments(false);
  };
  return (
    <>
      {!additionalDocuments ? (
        <>
          <PaymentInfo />

          {proofImage ? (
            <img
              src={
                typeof proofImage == 'object'
                  ? URL.createObjectURL(proofImage)
                  : proofImage
              }
              style={{ marginTop: '10px' }}
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
          {user?.kyc === 'APPROVED' ? null : (
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

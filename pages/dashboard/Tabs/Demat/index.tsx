import {
  CREATEDOCUMENT,
  UPDATEDOCUMENT,
  UPDATEUSERDETAILS
} from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Grid,
  TableCell,
  TableRow,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
export const rows = [
  {
    config: documentsConfig.additional_demat_documents
  }
];
const DocumentRow = ({
  data,
  documents = [],
  user,
  rowNo,
  hideAdditionalDocuments
}) => {
  const theme = useTheme();

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
  // console.log(imagesChanged);
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
        // console.log('data.config.items[i].id', data.config.items[i].id);
        if (imagesChanged[i]) {
          const documentTitle = data.config.items[i].id;
          const imgUrl = await handleImageUpload(images[i]);
          const _document = documents.find((document) => {
            if (document.title.toLowerCase() === documentTitle.toLowerCase()) {
              return true;
            }
          });
          let userAllDocuments = user?.documents;
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
        <Box
          sx={{
            // width: 200,
            height: 160,
            marginTop: 1,
            marginLeft: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            [theme.breakpoints.down('sm')]: {
              marginLeft: 0,
              marginTop: 2
            }
          }}
        >
          <Box
            sx={{
              marginBottom: '10px',
              marginLeft: '15px',
              [theme.breakpoints.down('sm')]: {
                marginBottom: '0px'
              }
            }}
          >
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
          </Box>
          <Button
            style={{
              cursor: documents[i]
                ? documents[i].status === 'APPROVED'
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
              documents[i]
                ? documents[i].status === 'APPROVED'
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
                documents[i]
                  ? documents[i].status === 'APPROVED'
                    ? true
                    : false
                  : false
              }
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  const _images = [...images];
                  _images[i] = f.target.files[0];
                  setImages(_images);
                  // console.log('imageChanged', _images[i]);
                  const _imagesChanged = [...imagesChanged];
                  _imagesChanged[i] = true;
                  setImagesChange(_imagesChanged);
                }
              }}
            />
          </Button>
        </Box>
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
      <Box
        sx={{
          border: 'none',
          fontWeight: 800,
          [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
          }
        }}
      >
        {data.config.name} {data.isOptional ? '(Optional)' : ''}
      </Box>
      <TableRow
        key={data.config.name}
        sx={{
          '&:last-child td, &:last-child th': { border: 0 }
        }}
      >
        <TableCell
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            [theme.breakpoints.down('sm')]: {
              paddingRight: 0
            }
          }}
          // width={300}
        >
          {getPreview()}
        </TableCell>

        <TableCell style={{ border: 'none' }}>{getActionCell()}</TableCell>
        {/* <TableCell></TableCell> */}
        {/* <TableCell style={{ border: 'none' }}>
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
        </TableCell> */}
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
        sx={{ marginLeft: 1 }}
        variant="contained"
        onClick={hideAdditionalDocuments}
      >
        Go Back
      </LoadingButton>

      <LoadingButton
        sx={{ marginLeft: 1 }}
        loading={isLoading}
        // disabled={!isValidToClick()}
        variant="contained"
        onClick={() => {
          handleDocumentUpload();
        }}
      >
        Upload
      </LoadingButton>

      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

const DematTab = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user?.data);
  const [dematAccount, setDematAccount] = useState<any | null>(null);
  const [dematDocumentImage, setDematDocumentImage] = useState<any | null>(
    null
  );
  const [rowNo, setRowNo] = useState(0);
  const [isDematImage, setDematImage] = useState(false);
  const [dematDocument, setDematDocument] = useState<DocumentType>();
  const [isImageChanged, setImageChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] = useState(false);
  const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [updatedetails] = useMutation(UPDATEUSERDETAILS);
  const [additionalDocuments, setAdditionalDocuments] = useState(false);

  const validateSubmit = (imgUrl) => {
    if (!imgUrl) {
      alert('Invalid Image');
      return false;
    }

    return true;
  };

  const getDocumentsByConfig = (configs) => {
    const documents = [];
    if (user && user?.documents) {
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

  const getDocNum = () => {
    let count = 0;
    user?.documents?.map((doc) => {
      if (doc.title.includes('demat_document_')) {
        count += 1;
      }
      setRowNo(count);
    });
  };

  const updateUser = (dematId, imgUrl, dematAccount) => {
    let newUser = user;
    let newDocs = [];
    user?.documents?.map((item) => {
      if (item.id === dematId) {
        newDocs.push({ ...item, url: imgUrl });
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs, demat_account: dematAccount };
  };

  const handleSubmit = async () => {
    const isValid = validateSubmit(dematDocumentImage);
    if (!isValid) {
      return;
    }
    setLoading(true);

    try {
      if (dematAccount) {
        await updatedetails({
          variables: {
            demat_account: dematAccount
          }
        });
        await dispatch(
          setOrUpdateUser({ ...user, demat_account: dematAccount })
        );
      }
      let imgUrl = '';
      if (isImageChanged) {
        imgUrl = await handleImageUpload(dematDocumentImage);
      } else {
        imgUrl = dematDocumentImage;
      }

      if (user) {
        setDematAccount(user?.demat_account);
      }
      if (user && user?.documents && user?.documents?.length > 0) {
        user?.documents?.find((document: DocumentType) => {
          if (
            document.title.toLowerCase() ===
            documentsConfig.demat_document.items[0].id
          ) {
            setDematDocument(document);
            setDematDocumentImage(document.url);
          }
        });
      }

      if (dematDocument) {
        await updateDocument({
          variables: {
            title: documentsConfig.demat_document.items[0].id,
            url: imgUrl,
            id: dematDocument.id
          }
        });
        toast.success('Demat Details Updated ');
        setSubmitButtonEnabled(false);
        dispatch(
          setOrUpdateUser(updateUser(dematDocument.id, imgUrl, dematAccount))
        );
      } else {
        await createDocument({
          variables: {
            title: documentsConfig.demat_document.items[0].id,
            url: imgUrl
          }
        });
        toast.success('Demat Details Updated ');
        setSubmitButtonEnabled(false);
        setDematImage(true);
        // dispatch(
        //   setOrUpdateUser(updateUser(dematDocument.id, imgUrl, dematAccount))
        // );
      }
    } catch (err) {}
    setLoading(false);
  };
  useEffect(() => {
    if (user) {
      setDematAccount(user?.demat_account);
    }
    if (user && user?.documents && user?.documents?.length > 0) {
      user?.documents?.find((document: DocumentType) => {
        if (
          document.title.toLowerCase() ===
          documentsConfig.demat_document.items[0].id
        ) {
          setDematDocument(document);
          setDematDocumentImage(document.url);
        }
      });
    }
  }, [user]);

  useEffect(() => {
    getDocNum();
  }, []);

  const hideAdditionalDocuments = () => {
    setAdditionalDocuments(false);
  };
  return (
    <>
      {!additionalDocuments ? (
        <>
          <Typography variant="h4" sx={{ my: 2 }}>
            Kindly Fill the form add demat details
          </Typography>
          {/* <Grid container p={2} spacing={2}> */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id="outlined"
              label="Demat Account No."
              fullWidth
              value={dematAccount}
              variant="outlined"
              onChange={(e) => {
                setDematAccount(e.target.value);
                setSubmitButtonEnabled(true);
              }}
            />
          </Grid>
          {dematDocumentImage ? (
            <img
              src={
                typeof dematDocumentImage == 'object'
                  ? URL.createObjectURL(dematDocumentImage)
                  : dematDocumentImage
              }
              style={{ marginTop: '10px' }}
              height={200}
            />
          ) : null}
          {dematDocument && dematDocument.status && (
            <Typography variant="h4" sx={{ mt: 2 }}>
              Status :{' '}
              <span
                style={{
                  color: dematDocument
                    ? (dematDocument.status === 'APPROVED' && 'green') ||
                      (dematDocument.status === 'REJECTED' && 'red')
                    : ''
                }}
              >
                {' '}
                {dematDocument && dematDocument.status}
              </span>
            </Typography>
          )}
          <Grid container pt={3} pb={2} pr={2} spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3.5}>
              <Button
                variant="contained"
                style={{
                  cursor: dematDocument
                    ? dematDocument.status === 'APPROVED'
                      ? 'not-allowed'
                      : 'pointer'
                    : 'pointer'
                }}
                component="label"
                color={
                  dematDocument
                    ? dematDocument.status === 'APPROVED'
                      ? 'secondary'
                      : 'primary'
                    : 'primary'
                }
              >
                Upload Demat Account Details
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  disabled={
                    dematDocument
                      ? dematDocument.status === 'APPROVED'
                        ? true
                        : false
                      : false
                  }
                  onChange={(f) => {
                    if (f.target.files.length > 0) {
                      setDematDocumentImage(f.target.files[0]);
                      setImageChanged(true);
                      setSubmitButtonEnabled(true);
                    }
                  }}
                />
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3.5}>
              <Box component="form">
                <LoadingButton
                  loading={isLoading}
                  fullWidth
                  disabled={!isSubmitButtonEnalbed}
                  variant="contained"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Submit
                </LoadingButton>
              </Box>
            </Grid>
            <Toaster position="bottom-right" reverseOrder={false} />
          </Grid>

          <Grid item xs={4} />
          {/* </Grid> */}

          {isDematImage ||
            (dematDocument && (
              <LoadingButton
                variant="contained"
                onClick={() => {
                  setAdditionalDocuments(true);
                }}
              >
                Additional Documents
              </LoadingButton>
            ))}
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

export default DematTab;

import {
  Grid,
  Button,
  Box,
  Divider,
  Typography,
  TableRow,
  TableCell,
  TextField
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
//import { CREATEDOCUMENT } from '@/apollo/queries/auth';
// import { useAppSelector } from '@/hooks';
import documentsConfig from '@/config/documentsConfig';
import DocumentType from '@/state/types/document';
import toast, { Toaster } from 'react-hot-toast';
import {
  UPDATE_BY_ADMIN,
  UPDATE_STATUS_BY_ADMIN
} from '@/apollo/queries/updateUser';
import handleImageUpload from '@/utils/upload';
import { useSelector, useDispatch } from 'react-redux';
import { setFoundUser } from '@/state/slice/foundUserSlice';
import { setAllTheUsers } from '@/state/slice/allUsersSlice';
import allUsersUpdater from '@/utils/updateUserList';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { LoadingButton } from '@mui/lab';

export const rows = [
  {
    config: documentsConfig.additional_documents
  }
];
// let statusUpdate = [];

const DocumentRow = ({ data, documents = [], user, rowNo }) => {
  const [images, setImages] = useState([]);
  const [imagesChanged, setImagesChange] = useState([]);
  const [moreRow, setMoreRow] = useState(0);
  const [statusUpdate, setStatusUpdate] = useState([]);
  const [additionalAmounts, setAdditionalAmounts] = useState([
    null,
    null,
    null,
    null
  ]);
  useEffect(() => {
    setMoreRow(rowNo);
  }, [rowNo]);
  // const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDataByAdmin] = useMutation(UPDATE_BY_ADMIN);
  const [updateDocumentStatusByAdmin] = useMutation(UPDATE_STATUS_BY_ADMIN);
  const [isLoading, setLoading] = useState(false);

  // const dispatch = useAppDispatch();
  useEffect(() => {
    const _imgs = [];
    for (let _document of documents) {
      _imgs.push(_document.url);
    }
    setImages(_imgs);
    let newArr = [null, null, null, null];
    data.config.items.map((docTitle) => {
      user?.documents?.map((doc) => {
        if (doc.title === docTitle.id) {
          newArr[parseInt(docTitle.id.slice(22, 24)) - 2] = doc.amount;
        }
      });
    });
    setAdditionalAmounts(newArr);
  }, [documents, user]);
  const handleCreateDocument = async (title: string, url: string) => {
    /* return await createDocument({
      variables: {
        title,
        url
      }
    }); */
  };

  const handleUpdateDocument = async (id: string, url: string) => {
    return await updateDataByAdmin({
      variables: {
        id: user?.id,
        documentId: id,
        url: url
      }
    });
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

  const findDocId = (title) => {
    let id;
    user?.documents?.map((doc) => {
      if (doc.title === title) {
        id = doc.id;
      }
    });
    return id;
  };
  const handleAmountChange = async () => {
    for (let i = 0; i < moreRow; i++) {
      const documentTitle = data.config.items[i].id;
      if (additionalAmounts[i]) {
        const resp = await updateDataByAdmin({
          variables: {
            id: user?.id,
            documentId: findDocId(documentTitle),
            amount: additionalAmounts[i]
          }
        });
        toast.success(`Amount Updated`);
      }
    }
  };

  const changeDocumentStatus = async (docId, docStatus) => {
    try {
      const statusResponse = await updateDocumentStatusByAdmin({
        variables: {
          id: docId,
          status: docStatus
        }
      });
      if (statusResponse) {
        if (docStatus === 'APPROVED') {
          toast.success(`Document Status ${docStatus}`);
        } else {
          toast.error(`Document Status ${docStatus}`);
        }
        //  statusUpdate.push({ id: docId, status: docStatus });
        setStatusUpdate((oldStatus) => [
          ...oldStatus,
          { id: docId, status: docStatus }
        ]);
      }
    } catch (err) {
      toast.error(err.message);
      // statusResponse.data.updateDocumentStatusByAdmin
    }
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
  const handleDocumentUpload = async () => {
    setLoading(true);

    // console.log({ imagesChanged, images });
    //handle upload
    try {
      for (let i = 0; i < moreRow; i++) {
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

              imgUrl
            );
            /*  await dispatch(
              setOrUpdateUser(updateUser(_document.id, documentTitle, imgUrl))
            ); */
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
          // dispatch(setOrUpdateUser(_user));
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
      let newArr = [...additionalAmounts];
      views.push(
        <div style={{ height: 160, marginTop: 10 }}>
          <div style={{ marginBottom: 10 }}>
            Status:{' '}
            <span
              style={{
                color:
                  statusCheck(documents[i].id) === 'APPROVED'
                    ? 'green'
                    : statusCheck(documents[i].id) === 'REJECTED'
                    ? 'red'
                    : documents[i]
                    ? (documents[i].status === 'APPROVED' && 'green') ||
                      (documents[i].status === 'REJECTED' && 'red')
                    : ''
              }}
            >
              {statusCheck(documents[i].id) || documents[i]?.status}
            </span>
          </div>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '10px'
            }}
          >
            <Grid>
              <TextField
                id="outlined"
                label="Amount*"
                value={additionalAmounts[i]}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  e.target.value
                    ? (newArr[i] = parseInt(e.target.value))
                    : (newArr[i] = null);
                  setAdditionalAmounts(newArr);
                }}
              />
              <Button
                onClick={() => {
                  changeDocumentStatus(documents[i].id, 'APPROVED');
                }}
                variant="outlined"
                color="success"
                sx={{ ml: 2 }}
              >
                Approve
              </Button>
              <Button
                onClick={() =>
                  changeDocumentStatus(documents[i].id, 'REJECTED')
                }
                variant="outlined"
                color="error"
                sx={{ ml: 2 }}
              >
                Reject
              </Button>
            </Grid>
          </Box>
          <Button
            fullWidth
            style={{
              marginTop: '10px'
            }}
            component="label"
          >
            Choose {items[i].name}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                // console.log(i);
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
        </div>
      );
    }
    return views;
  };

  const getPreview = () => {
    const views: any = [];
    for (let i = 0; i < moreRow; i++) {
      const _img = images[i];
      if (_img) {
        views.push(
          <div style={{ marginTop: 15 }}>
            <PhotoProvider>
              <PhotoView
                src={typeof _img == 'object' ? URL.createObjectURL(_img) : _img}
              >
                <img
                  src={
                    typeof _img == 'object' ? URL.createObjectURL(_img) : _img
                  }
                  height={150}
                  style={{ marginLeft: '5px' }}
                />
              </PhotoView>
            </PhotoProvider>
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
      {documents[0] && (
        <Typography sx={{ fontWeight: 'bold', marginTop: 5 }}>
          {data.config.name} {data.isOptional ? '(Optional)' : ''}
        </Typography>
      )}
      {documents[0] && (
        <TableRow
          key={data.config.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell width={300}>{getPreview()}</TableCell>

          <TableCell style={{}}>{getActionCell()}</TableCell>
          <TableCell>
            <LoadingButton
              loading={isLoading}
              // disabled={!isValidToClick()}
              variant="contained"
              onClick={() => {
                handleDocumentUpload();
                handleAmountChange();
              }}
            >
              Update
            </LoadingButton>
          </TableCell>

          {/*  <TableCell>
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
        </TableCell> */}
        </TableRow>
      )}
    </>
  );
};
const getDocumentsByConfig = (configs) => {
  const user = useSelector((state: any) => state.foundUser.foundUser);

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
const InfoTab = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.foundUser.foundUser);
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);
  const [rowNo, setRowNo] = useState(0);
  // const theme = useTheme();
  const [isLoading, setLoading] = useState(false);
  const [isBasicMember, setBasicMember] = useState(false);
  const [proofImage, setProofImage] = useState<any>('');
  const [isAmountSubmitted, setAmountSubmitted] = useState<boolean>(false);
  const [amount, setAmount] = useState<Number | any>();
  const [paymentDocument, setPaymentDocument] = useState<DocumentType>();
  const [isImageChanged, setImageChanged] = useState(false);
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] = useState(false);
  //const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDataByAdmin] = useMutation(UPDATE_BY_ADMIN);
  const [updateDocumentStatusByAdmin] = useMutation(UPDATE_STATUS_BY_ADMIN);
  // console.log(user);
  /* const handleImageUpload = async () => {
    return 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Einstein-with-habicht-and-solovine.jpg';
  }; */
  const getDocNum = async () => {
    let count = 0;
    user?.documents?.map((doc) => {
      if (doc.title.slice(0, 22) === 'additional_payment_doc') {
        count += 1;
      }
    });
    setRowNo(count);
  };
  useEffect(() => {
    getDocNum();
  }, []);

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
  const updateUserAmount = (id, amount) => {
    let newUser = user;
    let newDocs = [];
    user?.documents?.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, amount: amount });
        // newDocs.push(...item, url:imgUrl);
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
  };
  const updateUserStatus = (id, status) => {
    let newUser = user;
    let newDocs = [];
    user?.documents?.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, status: status });
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
  };

  const changeDocumentStatus = async (docId, docStatus) => {
    const response = await updateDocumentStatusByAdmin({
      variables: {
        id: docId,
        status: docStatus
      }
    });
    dispatch(setFoundUser(updateUserStatus(paymentDocument.id, docStatus)));
    dispatch(
      setAllTheUsers(
        allUsersUpdater(
          usersList,
          updateUserStatus(paymentDocument.id, docStatus)
        )
      )
    );
  };

  const validateSubmit = (imgUrl) => {
    if (!imgUrl) {
      alert('Invalid Image');
      return false;
    }

    return true;
  };

  const handleAmountSubmit = async () => {
    try {
      const resp = await updateDataByAdmin({
        variables: {
          id: user?.id,
          documentId: paymentDocument.id,
          amount: parseInt(amount)
        }
      });
      dispatch(
        setFoundUser(updateUserAmount(paymentDocument.id, parseInt(amount)))
      );
      dispatch(
        setAllTheUsers(
          allUsersUpdater(
            usersList,
            updateUserAmount(paymentDocument.id, parseInt(amount))
          )
        )
      );

      toast.success('Amount Updated');
    } catch (err) {
      toast.error(err);
    }
    setLoading(false);
  };
  const handlePaymentSubmit = async () => {
    setLoading(true);

    try {
      let imgUrl = '';
      if (isImageChanged) {
        try {
          imgUrl = await handleImageUpload(proofImage);
        } catch (err) {
          // imgUrl = 'lorem';
          toast.error('Error, Try Again!');
        }
      } else {
        imgUrl = proofImage;
      }
      // const isValid = validateSubmit(imgUrl);
      if (paymentDocument) {
        await updateDataByAdmin({
          variables: {
            id: user?.id,
            documentId: paymentDocument.id,
            url: imgUrl
          }
        });
        dispatch(setFoundUser(updateUser(paymentDocument.id, imgUrl)));
        dispatch(
          setAllTheUsers(
            allUsersUpdater(usersList, updateUser(paymentDocument.id, imgUrl))
          )
        );
      } else {
        console.log('we need access token of user to create any doc');
        /* const respDocument = await createDocument({
          variables: {
            id: foundUser.id,
            documentId: paymentDocument.id,
            url: imgUrl
          }
        }); */
      }
      toast.success('Payment Slip Updated ');
    } catch (err) {
      toast.error(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (user && user?.documents && user?.documents?.length > 0) {
      user?.documents?.find((document: DocumentType) => {
        if (
          document.title.toLowerCase() ===
          documentsConfig.payment_proof.items[0].id
        ) {
          setPaymentDocument(document);
          setProofImage(document.url);
          setAmount(document.amount);
        }
      });
    }
  }, [user]);
  return (
    <>
      {/*  <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer> */}
      {proofImage ? (
        <PhotoProvider>
          <PhotoView
            src={
              typeof proofImage == 'object'
                ? URL.createObjectURL(proofImage)
                : proofImage
            }
          >
            <img
              style={{ marginTop: '10px', cursor: 'pointer' }}
              src={
                typeof proofImage == 'object'
                  ? URL.createObjectURL(proofImage)
                  : proofImage
              }
              width={200}
            />
          </PhotoView>
        </PhotoProvider>
      ) : null}

      {paymentDocument && (
        <>
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
          <Box>
            <Grid>
              <Button
                // disabled={!isAmountSubmitted}
                onClick={() =>
                  changeDocumentStatus(paymentDocument.id, 'APPROVED')
                }
                variant="outlined"
                color="success"
              >
                Approve
              </Button>
              <Button
                // disabled={!isAmountSubmitted}
                onClick={() =>
                  changeDocumentStatus(paymentDocument.id, 'REJECTED')
                }
                variant="outlined"
                color="error"
                sx={{ ml: 2 }}
              >
                Reject
              </Button>
            </Grid>
          </Box>
        </>
      )}
      {proofImage && (
        <Grid container p={2} mt={2} pl={0} spacing={2}>
          <TextField
            id="outlined"
            label="Amount*"
            value={amount}
            variant="outlined"
            type="number"
            onChange={(e) => {
              // setAmountSubmitted(true);
              setAmount(e.target.value);
            }}
          />
          <Grid item>
            <Button
              fullWidth
              variant="contained"
              component="label"
              onClick={() => {
                handleAmountSubmit();
              }}
            >
              Submit Amount
            </Button>
          </Grid>
        </Grid>
      )}
      <Grid container p={2} pl={0} spacing={2}>
        {paymentDocument && (
          <Grid item xs={12} sm={4}>
            <Button variant="contained" component="label">
              Select Payment Slip
              <input
                type="file"
                accept="image/*"
                hidden
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
        )}
        {proofImage && (
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              variant="contained"
              disabled={!isSubmitButtonEnalbed}
              onClick={() => {
                handlePaymentSubmit();
              }}
            >
              Submit
            </Button>
          </Grid>
        )}
        <Toaster position="bottom-center" reverseOrder={false} />
      </Grid>
      <>
        {rows.map((row, index) => (
          <DocumentRow
            data={row}
            rowNo={rowNo}
            key={index}
            user={user}
            documents={getDocumentsByConfig(row.config.items)}
          />
        ))}
      </>
    </>
  );
};
export default InfoTab;

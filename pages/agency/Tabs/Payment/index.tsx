import { useMutation } from '@apollo/client';
import {
  Box,
  Button,
  Grid,
  TableCell,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
//import { CREATEDOCUMENT } from '@/apollo/queries/auth';
// import { useAppSelector } from '@/hooks';
import {
  UPDATE_BY_ADMIN,
  UPDATE_STATUS_BY_ADMIN
} from '@/apollo/queries/updateUser';
import documentsConfig from '@/config/documentsConfig';
import { setAllTheUsers } from '@/state/slice/allUsersSlice';
import { setFoundUser } from '@/state/slice/foundUserSlice';
import DocumentType from '@/state/types/document';
import allUsersUpdater from '@/utils/updateUserList';
import handleImageUpload from '@/utils/upload';
import { LoadingButton } from '@mui/lab';
import toast, { Toaster } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useDispatch, useSelector } from 'react-redux';

export const rows = [
  {
    config: documentsConfig.additional_payment_documents
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
  const [additionalUtr, setAdditionalUtr] = useState(['', '', '', '']);
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
    let newArrUtr = ['', '', '', ''];
    setAdditionalUtr(newArrUtr);
    setAdditionalAmounts(newArr);
    data.config.items.map((docTitle) => {
      user.documents.map((doc) => {
        if (doc.title === docTitle.id) {
          newArr[parseInt(docTitle.id.slice(22, 24)) - 2] = doc.amount || '';
          newArrUtr[parseInt(docTitle.id.slice(22, 24)) - 2] = doc.utrNo || '';
        }
      });
    });
    setAdditionalUtr(newArrUtr);
    setAdditionalAmounts(newArr);
  }, [documents, user]);
  const handleCreateDocument = async () => {};

  const handleUpdateDocument = async (id: string, url: string) => {
    return await updateDataByAdmin({
      variables: {
        id: user.id,
        documentId: id,
        url: url
      }
    });
  };

  const findDocId = (title) => {
    let id;
    user.documents.map((doc) => {
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
        await updateDataByAdmin({
          variables: {
            id: user.id,
            documentId: findDocId(documentTitle),
            amount: additionalAmounts[i],
            utrNo: additionalUtr[i]
          }
        });
        toast.success(`Details Updated`);
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
    let updatedStatus = null;
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
          let userAllDocuments = user.documents;
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
              (doc) => {
                return doc.id;
                // return doc.id !== document.id;
                //type removed
              }
            );
            listAfterRemovingExistingDocument.push(resp.data.updateDocument);
            userAllDocuments = listAfterRemovingExistingDocument;
          } else {
            //create document
            const resp: any = await handleCreateDocument();
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
      let newArrUtr = [...additionalUtr];
      views.push(
        <div style={{ height: 160, marginTop: 10 }}>
          <div style={{ marginBottom: 10 }}>
            Status:{' '}
            <span
              style={{
                color:
                  statusCheck(documents[i]?.id) === 'APPROVED'
                    ? 'limegreen'
                    : statusCheck(documents[i]?.id) === 'REJECTED'
                    ? 'red'
                    : documents[i]
                    ? (documents[i].status === 'APPROVED' && 'limegreen') ||
                      (documents[i].status === 'REJECTED' && 'red')
                    : ''
              }}
            >
              {statusCheck(documents[i]?.id) || documents[i]?.status}
            </span>
          </div>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '10px',
              width: 500
            }}
          >
            <Grid>
              <Button
                onClick={() => {
                  changeDocumentStatus(documents[i].id, 'APPROVED');
                }}
                variant="outlined"
                color="success"
                sx={{ paddingY: '12px' }}
              >
                Approve
              </Button>
              <Button
                onClick={() =>
                  changeDocumentStatus(documents[i].id, 'REJECTED')
                }
                variant="outlined"
                color="error"
                sx={{ mx: 2, paddingY: '12px' }}
              >
                Reject
              </Button>

              <TextField
                sx={{ width: 120 }}
                id="outlined"
                label="UTR No.*"
                value={additionalUtr[i]}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  e.target.value
                    ? (newArrUtr[i] = e.target.value)
                    : (newArrUtr[i] = null);
                  setAdditionalUtr(newArrUtr);
                }}
              />
              <TextField
                sx={{ width: 120, ml: 2 }}
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
              sx={{ paddingX: 8 }}
            >
              Update
            </LoadingButton>
          </TableCell>

          {/*  <TableCell>
          <span
            style={{
              color: documents[0]
                ? (documents[0].status === 'APPROVED' && 'limegreen') ||
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
  if (user && user.documents) {
    for (let config of configs) {
      const document = user.documents.find((doc: DocumentType) => {
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
  // const [isLoading, setLoading] = useState(false);
  const [proofImage, setProofImage] = useState<any>('');
  const [amount, setAmount] = useState<Number | any>();
  const [utrNumber, setUtrNumber] = useState<String>();
  const [paymentDocument, setPaymentDocument] = useState<DocumentType>();
  const [isImageChanged, setImageChanged] = useState(false);
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] = useState(false);
  //const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDataByAdmin] = useMutation(UPDATE_BY_ADMIN);
  const [updateDocumentStatusByAdmin] = useMutation(UPDATE_STATUS_BY_ADMIN);
  const getDocNum = async () => {
    let count = 0;
    user.documents.map((doc) => {
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
  const updateUserAmount = (id, amount, utrNumber) => {
    let newUser = user;
    let newDocs = [];
    user.documents.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, amount: amount, utrNo: utrNumber });
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
    user.documents.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, status: status });
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
  };

  const changeDocumentStatus = async (docId, docStatus) => {
    await updateDocumentStatusByAdmin({
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

  const handleAmountSubmit = async () => {
    try {
      await updateDataByAdmin({
        variables: {
          id: user.id,
          documentId: paymentDocument.id,
          amount: parseInt(amount),
          utrNo: utrNumber
        }
      });
      dispatch(
        setFoundUser(
          updateUserAmount(paymentDocument.id, parseInt(amount), utrNumber)
        )
      );
      dispatch(
        setAllTheUsers(
          allUsersUpdater(
            usersList,
            updateUserAmount(paymentDocument.id, parseInt(amount), utrNumber)
          )
        )
      );

      toast.success('Details Updated');
    } catch (err) {
      toast.error(err);
    }
    // setLoading(false);
  };
  const handlePaymentSubmit = async () => {
    // setLoading(true);

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
            id: user.id,
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
        // console.log('we need access token of user to create any doc');
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
    // setLoading(false);
  };

  useEffect(() => {
    if (user && user.documents && user.documents.length > 0) {
      user.documents.find((document: DocumentType) => {
        if (
          document.title.toLowerCase() ===
          documentsConfig.payment_proof.items[0].id
        ) {
          setPaymentDocument(document);
          setProofImage(document.url);
          setAmount(document.amount);
          setUtrNumber(document.utrNo);
        }
      });
    }
  }, [user]);
  return (
    <>
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
                  ? (paymentDocument.status === 'APPROVED' && 'limegreen') ||
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
        <Grid container p={2} mt={2} ml={0} pl={0} gap={2} spacing={2}>
          <TextField
            id="outlined"
            label="UTR No.*"
            value={utrNumber}
            variant="outlined"
            type="number"
            onChange={(e) => {
              setUtrNumber(e.target.value);
            }}
          />
          <TextField
            id="outlined"
            label="Amount*"
            value={amount}
            variant="outlined"
            type="number"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <Grid>
            <Button
              fullWidth
              disabled={!amount || !utrNumber}
              variant="contained"
              component="label"
              onClick={() => {
                handleAmountSubmit();
              }}
              sx={{ padding: '14px' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      )}
      <Grid container p={2} pl={0} spacing={2}>
        {paymentDocument && (
          <Grid item xs={0}>
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
          <Grid item xs={2}>
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

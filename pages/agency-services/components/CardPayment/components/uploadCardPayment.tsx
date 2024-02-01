import {
  CREATE_PAYMENT_DOCUMENT,
  GET_CARD_USER,
  UPDATEDOCUMENT,
  UPDATEUSERDETAILS
} from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import DocumentType from '@/state/types/document';
import handleCardPaymentProofUpload from '@/utils/uploadCardDocuments';
import { useMutation, useQuery } from '@apollo/client';
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
import router from 'next/router';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
export const rows = [
  {
    config: documentsConfig.additional_card_payment_proof
  }
];
const DocumentRow = ({
  data,
  cardId,
  documents = [],
  user,
  rowNo,
  hideAdditionalDocuments
}) => {
  const theme = useTheme();

  const [images, setImages] = useState([]);
  const [imagesChanged, setImagesChange] = useState([]);
  const [moreRow, setMoreRow] = useState(rowNo);
  const [createDocument] = useMutation(CREATE_PAYMENT_DOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [isLoading, setLoading] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState([]);
  const [amount, setAmount] = useState<Number | any>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const _imgs = [];
    for (let _document of documents) {
      _imgs.push(_document.url);
    }
    setImages(_imgs);
  }, [documents, user]);

  console.log('documents', documents);

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
    console.log('newUser', newUser);
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
    console.log('Enter');

    try {
      for (let i = 0; i < moreRow; i++) {
        // console.log('data.config.items[i].id', data.config.items[i].id);
        if (imagesChanged[i]) {
          const documentTitle = data.config.items[i].id;
          const imgUrl = await handleCardPaymentProofUpload(images[i]);
          console.log('imgUrl', imgUrl);
          console.log('documentTitle', documentTitle);
          const _document = documents.find((document) => {
            if (document.title.toLowerCase() === documentTitle.toLowerCase()) {
              return true;
            }
          });
          console.log('_document', _document);
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
            width: 200,
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
          display: 'flex',
          flexDirection: 'row',
          '&:last-child td, &:last-child th': { border: 0 }
        }}
      >
        <Box>
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
        </Box>
        <Box>
          <TableCell style={{ border: 'none' }}>
            <Box>
              <TextField
                sx={{ width: 150, marginLeft: 3 }}
                id="outlined"
                label="Amount*"
                value={amount}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </Box>
            <Box>
              <TextField
                sx={{ width: 150, marginLeft: 3 }}
                id="outlined"
                label="UTR No*"
                value={amount}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </Box>
          </TableCell>
        </Box>
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

const CardPayment = ({ cardId, cardNumber, cardPaymentDocuments }) => {
  console.log('cardId', cardId);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user?.data);
  const [cardPaymentImage, setCardPaymentImage] = useState<any | null>(null);
  const [rowNo, setRowNo] = useState(0);
  const [isPaymentImage, setPaymentImage] = useState(false);
  const [cardPaymentDoc, setCardPaymentDoc] = useState<DocumentType>();
  const [isImageChanged, setImageChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSubmitButtonEnalbed, setSubmitButtonEnabled] = useState(false);
  const [createDocument] = useMutation(CREATE_PAYMENT_DOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [updatedetails] = useMutation(UPDATEUSERDETAILS);
  const { data: getcarduser } = useQuery(GET_CARD_USER, {
    variables: {
      cardNumber
    }
  });
  const [additionalDocuments, setAdditionalDocuments] = useState(false);
  const [utrNumber, setUtrNumber] = useState<String>();
  const [amount, setAmount] = useState<Number | any>();

  const { index } = router.query;
  console.log('cardPaymentDocuments', cardPaymentDocuments);
  // const validateSubmit = (imgUrl) => {
  //   if (!imgUrl) {
  //     alert('Invalid Image');
  //     return false;
  //   }

  //   return true;
  // };

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
      if (doc.title.includes('card_payment_proof_')) {
        count += 1;
      }
      setRowNo(count);
    });
  };

  const updateUser = (cardPaymentId, imgUrl) => {
    let newUser = user;
    let newDocs = [];
    user?.documents?.map((item) => {
      if (item.id === cardPaymentId) {
        newDocs.push({ ...item, url: imgUrl });
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
  };

  const handleSubmit = async () => {
    try {
      let imgUrl = '';
      if (isImageChanged) {
        imgUrl = await handleCardPaymentProofUpload(cardPaymentImage);
      } else {
        imgUrl = cardPaymentImage;
      }

      if (cardPaymentDocuments?.length > 0) {
        cardPaymentDocuments?.find((document: DocumentType) => {
          if (
            document.title.toLowerCase() ===
            documentsConfig.card_payment_proof.items[0].id
          ) {
            setCardPaymentDoc(document);
            setCardPaymentImage(document.url);
          }
        });
      }

      if (cardPaymentDoc) {
        await updateDocument({
          variables: {
            title: documentsConfig.card_payment_proof.items[0].id,
            url: imgUrl,
            id: cardPaymentDoc.id
          }
        });
        toast.success('Payment Proof Updated ');

        setSubmitButtonEnabled(false);
        // dispatch(setOrUpdateUser(updateUser(cardPaymentDoc.id, imgUrl)));
      } else {
        try {
          await createDocument({
            variables: {
              title: documentsConfig.card_payment_proof.items[0].id,
              url: imgUrl,
              cardUserId: index,
              myCardId: cardId,
              amount: parseInt(amount),
              utrNo: utrNumber
            }
          });
          toast.success('Card Payment Updated ');
          setSubmitButtonEnabled(false);
          setPaymentImage(true);
        } catch (err) {
          console.log('err', err);
        }
      }
    } catch (err) {}
    setLoading(false);
  };
  useEffect(() => {
    if (cardPaymentDocuments.length > 0) {
      cardPaymentDocuments.map((document) => {
        setCardPaymentDoc(document);
        setCardPaymentImage(document?.url);
        setAmount(document.amount);
        setUtrNumber(document.utrNo);
      });
    }
  }, [cardPaymentDocuments]);

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
            Kindly Upload Your Payment Proof
          </Typography>

          {cardPaymentImage ? (
            <img
              src={
                typeof cardPaymentImage == 'object'
                  ? URL.createObjectURL(cardPaymentImage)
                  : cardPaymentImage
              }
              style={{ marginTop: '10px' }}
              height={200}
            />
          ) : null}
          {cardPaymentDoc && cardPaymentDoc.status && (
            <Typography variant="h4" sx={{ mt: 2 }}>
              Status :{' '}
              <span
                style={{
                  color: cardPaymentDoc
                    ? (cardPaymentDoc.status === 'APPROVED' && 'green') ||
                      (cardPaymentDoc.status === 'REJECTED' && 'red')
                    : ''
                }}
              >
                {' '}
                {cardPaymentDoc && cardPaymentDoc.status}
              </span>
            </Typography>
          )}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              style={{
                cursor: cardPaymentDoc
                  ? cardPaymentDoc.status === 'APPROVED'
                    ? 'not-allowed'
                    : 'pointer'
                  : 'pointer'
              }}
              component="label"
              color={
                cardPaymentDoc
                  ? cardPaymentDoc.status === 'APPROVED'
                    ? 'secondary'
                    : 'primary'
                  : 'primary'
              }
            >
              Upload Payment Proof
              <input
                type="file"
                accept="image/*"
                hidden
                disabled={
                  cardPaymentDoc
                    ? cardPaymentDoc.status === 'APPROVED'
                      ? true
                      : false
                    : false
                }
                onChange={(f) => {
                  if (f.target.files.length > 0) {
                    setCardPaymentImage(f.target.files[0]);
                    setImageChanged(true);
                    setSubmitButtonEnabled(true);
                  }
                }}
              />
            </Button>

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
            <Toaster position="bottom-right" reverseOrder={false} />
          </Box>
          <Box>
            <Grid
              sx={{ display: 'flex', paddingTop: 3 }}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <Box>
                <TextField
                  sx={{ width: 150 }}
                  id="outlined"
                  label="UTR No.*"
                  value={utrNumber}
                  variant="outlined"
                  type="number"
                  onChange={(e) => {
                    setUtrNumber(e.target.value);
                  }}
                />
              </Box>
              <Box>
                <TextField
                  sx={{ width: 150, marginLeft: 3 }}
                  id="outlined"
                  label="Amount*"
                  value={amount}
                  variant="outlined"
                  type="number"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </Box>
            </Grid>
          </Box>

          <Grid item xs={4} />

          {isPaymentImage ||
            (cardPaymentDoc && (
              <>
                {rows.map((row, index) => (
                  <DocumentRow
                    cardId={cardId}
                    hideAdditionalDocuments={hideAdditionalDocuments}
                    data={row}
                    rowNo={rowNo}
                    key={index}
                    user={user}
                    documents={getDocumentsByConfig(row.config.items)}
                  />
                ))}
              </>
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
              cardId={undefined}
            />
          ))}
        </>
      )}
    </>
  );
};

export default CardPayment;

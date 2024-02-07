import {
  CREATE_PAYMENT_DOCUMENT,
  GET_CARD_USER,
  UPDATEDOCUMENT,
  UPDATEUSERDETAILS,
  UPDATE_PAYMENT_DOCUMENT
} from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import DocumentType from '@/state/types/document';
import handleCardPaymentProofUpload from '@/utils/uploadCardDocuments';
import { useMutation, useQuery } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import DocumentRow from './AdditionalDocumentRow';
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
import { GET_DOCUMENT_FOR_CARD } from '@/apollo/queries/myCardqueries';
import variables from '@/config/variables';
export const rows = [
  {
    config: documentsConfig.additional_card_payment_proof
  }
];

const CardPayment = ({ cardId, cardNumber, cardPaymentDocuments }) => {
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
  const [updateDocument] = useMutation(UPDATE_PAYMENT_DOCUMENT);
  const [updatedetails] = useMutation(UPDATEUSERDETAILS);
  const { data: getcarduser } = useQuery(GET_CARD_USER, {
    variables: {
      cardNumber
    }
  });

  console.log('===', cardPaymentDocuments);

  const [additionalDocuments, setAdditionalDocuments] = useState(false);

  const [utrNumber, setUtrNumber] = useState<String>();
  const [amount, setAmount] = useState<Number | any>();
  const { index } = router.query;
  const selectedTab = index.toString().split('&')[1];
  const cardUserId = index.toString().split('&')[0];
  const getDocumentsByConfig = (configs) => {
    const documents = [];
    if (cardPaymentDocuments) {
      for (let config of configs) {
        const document = cardPaymentDocuments?.find((doc: DocumentType) => {
          if (doc?.title.toLowerCase() === config.id.toLowerCase()) {
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
    cardPaymentDocuments?.map((doc) => {
      if (doc.title.includes('card_payment_proof')) {
        count += 1;
      }
      setRowNo(count);
    });
  };

  const updateUser = (cardPaymentId, imgUrl) => {
    let newUser = user;
    let newDocs = [];
    cardPaymentDocuments?.map((item) => {
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
          console.log(
            'here Comparisaon',
            document.title.toLowerCase(),
            documentsConfig.card_payment_proof.items[0].id
          );
          if (
            document.title.toLowerCase() ===
            documentsConfig.card_payment_proof.items[0].id
          ) {
            console.log('document', document);
            setCardPaymentDoc(document);
            setCardPaymentImage(document.url);
          }
        });
      }

      if (cardPaymentDoc) {
        console.log(
          'here update',
          amount,
          utrNumber,
          cardId,
          cardUserId,
          cardPaymentDoc.id
        );

        await updateDocument({
          variables: {
            title: documentsConfig.card_payment_proof.items[0].id,
            url: imgUrl,
            amount: parseInt(amount),
            cardUserId: cardUserId,
            myCardId: cardId,
            utrNo: utrNumber,
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
              cardUserId: cardUserId,
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
                    cardUserId={cardUserId}
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
              cardUserId={cardUserId}
              user={user}
              documents={getDocumentsByConfig(row.config.items)}
              cardId={cardId}
            />
          ))}
        </>
      )}
    </>
  );
};

export default CardPayment;

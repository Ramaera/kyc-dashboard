import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Button, Grid, Typography, TextField, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PaymentInfo from './paymentDetails';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const InfoTab = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    }
  }));
  const diff = 100500 / 3300000;
  const risedFundPer = diff * 100;

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);
  const [isLoading, setLoading] = useState(false);
  const [proofImage, setProofImage] = useState<any | null>(null);
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
    if (user && user.documents && user.documents.length > 0) {
      user.documents.find((document: DocumentType) => {
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
  return (
    <>
      <PaymentInfo />
      <Box sx={{ flexGrow: 1, my: 2 }}>
        <Typography variant="h6">Till Raised(%)</Typography>
        <BorderLinearProgress variant="determinate" value={risedFundPer} />
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            display: 'flex',
            position: 'absolute',
            marginTop: '-20px',
            marginLeft: '50px',
            fontWeight: 'bold',
            color: 'white'
          }}
        >{`${Math.round(risedFundPer)}%`}</Typography>
      </Box>

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
      {user.kyc === 'APPROVED' ? null : (
        <Grid container p={0} spacing={2}>
          <Grid item xs={12} sm={5} md={3} lg={12}>
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

          {/* <Grid item xs={2}>
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
          <Toaster position="bottom-center" reverseOrder={false} /> */}
        </Grid>
      )}

      <Typography variant="h4" sx={{ my: 2 }}>
        <Box
          component="form"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="UTR NO./Transaction ID"
            variant="outlined"
            sx={{ width: '48%' }}
          />
          <TextField
            id="outlined-basic"
            label="Enter Amount(Multiple of 500)"
            variant="outlined"
            sx={{ width: '48%' }}
          />
        </Box>
      </Typography>
      {/* {proofImage ? (
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
      )} */}
      {user.kyc === 'APPROVED' ? null : (
        <Grid container p={0} spacing={2}>
          {/* <Grid item xs={12} sm={5} md={3} lg={12}>
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
          </Grid> */}

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
    </>
  );
};

export default InfoTab;

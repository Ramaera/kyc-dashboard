import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const rows = [
  {
    name: 'Company Name',
    value: 'RAMAERA INDUSTRIES LTD.'
  },

  {
    name: 'Bank Name',
    value: 'KOTAK MAHINDRA BANK '
  },

  {
    name: 'Branch',
    value: 'NOIDA SECTOR 63'
  },

  {
    name: 'A/C No.',
    value: '4747237385'
  },

  {
    name: 'IFSC CODE ',
    value: 'KKBK0000180'
  }
];
const index = () => {
  const dispatch = useAppDispatch();
  const [wantAgency, setWantAgency] = useState(false);
  const user = useAppSelector((state) => state.user.data);
  const [isLoading, setLoading] = useState(false);
  const [agencyProofImage, aetAgencyProofImage] = useState<any | null>(null);
  const [isBankDetails, setBankDetails] = useState(false);
  const [isUPIDetails, setUPIDetails] = useState(false);

  const showBankDetails = () => {
    setBankDetails(true);
    setUPIDetails(false);
  };
  const showUPIDetails = () => {
    setBankDetails(false);
    setUPIDetails(true);
  };
  const [agencyPaymentDocument, setAgencyPaymentDocument] =
    useState<DocumentType>();
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
    user?.documents?.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, url: imgUrl });
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
  };
  const handlePaymentSubmit = async () => {
    const isValid = validateSubmit(agencyProofImage);
    if (!isValid) {
      return;
    }
    setLoading(true);

    try {
      let imgUrl = '';
      if (isImageChanged) {
        imgUrl = await handleImageUpload(agencyProofImage);
      } else {
        imgUrl = agencyProofImage;
      }

      toast.success('Payment Slip Updated ');
      if (agencyPaymentDocument) {
        await updateDocument({
          variables: {
            title: documentsConfig.agency_payment_proof.items[0].id,
            url: imgUrl,
            id: agencyPaymentDocument.id
          }
        });

        dispatch(setOrUpdateUser(updateUser(agencyPaymentDocument.id, imgUrl)));
      } else {
        await createDocument({
          variables: {
            title: documentsConfig.agency_payment_proof.items[0].id,
            url: imgUrl
          }
        });
      }
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => {
    if (user && user.documents && user?.documents?.length > 0) {
      user?.documents?.find((document: DocumentType) => {
        if (
          document.title.toLowerCase() ===
          documentsConfig.agency_payment_proof.items[0].id
        ) {
          setAgencyPaymentDocument(document);
          aetAgencyProofImage(document.url);
          setWantAgency(true);
        }
      });
    }
  }, [user]);

  return (
    <>
      {wantAgency ? (
        <>
          <Typography variant="h4" sx={{ my: 2 }}>
            Kindly Deposit Rs. 5000 and upload the payment slip as a proof!
          </Typography>
          <div
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Button
              style={{ marginRight: 20 }}
              variant="contained"
              onClick={() => {
                showBankDetails();
              }}
            >
              Back Details
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                showUPIDetails();
              }}
            >
              UPI
            </Button>
          </div>{' '}
          {isBankDetails && (
            <TableContainer>
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableBody>
                  {rows.map((row) => {
                    return (
                      <TableRow
                        key={row.name}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 }
                        }}
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
            </TableContainer>
          )}
          {isUPIDetails && (
            <TableContainer>
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableBody>
                  <img
                    style={{
                      width: '250px',
                      borderRadius: '20px',
                      padding: '10px'
                    }}
                    src="/images/upi.jpg"
                  />
                  <Typography variant="body1" sx={{ my: 2, pl: 2 }}>
                    OR
                  </Typography>
                  <Typography variant="h4" sx={{ my: 2, pl: 2 }}>
                    <a href="upi://pay?pa=ramaerakotak@ibl&amp;pn=Ramaera  K&amp;cu=INR">
                      UPI ID : ramaerakotak@ibl
                    </a>
                  </Typography>
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {agencyProofImage ? (
            <img
              src={
                typeof agencyProofImage == 'object'
                  ? URL.createObjectURL(agencyProofImage)
                  : agencyProofImage
              }
              style={{ marginTop: '10px' }}
              height={200}
            />
          ) : null}
          {agencyPaymentDocument && agencyPaymentDocument.status && (
            <Typography variant="h4" sx={{ my: 2 }}>
              Status :{' '}
              <span
                style={{
                  color: agencyPaymentDocument
                    ? (agencyPaymentDocument.status === 'APPROVED' &&
                        'green') ||
                      (agencyPaymentDocument.status === 'REJECTED' && 'red')
                    : ''
                }}
              >
                {agencyPaymentDocument && agencyPaymentDocument.status}
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
                    cursor: agencyPaymentDocument
                      ? agencyPaymentDocument.status === 'APPROVED'
                        ? 'not-allowed'
                        : 'pointer'
                      : 'pointer'
                  }}
                  color={
                    agencyPaymentDocument
                      ? agencyPaymentDocument.status === 'APPROVED'
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
                      agencyPaymentDocument
                        ? agencyPaymentDocument.status === 'APPROVED'
                          ? true
                          : false
                        : false
                    }
                    onChange={(f) => {
                      if (f.target.files.length > 0) {
                        setSubmitButtonEnabled(true);
                        aetAgencyProofImage(f.target.files[0]);
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
        </>
      ) : (
        <>
          <Grid
            container
            py={2}
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button
              onClick={() => {
                setWantAgency(true);
              }}
              variant="contained"
              component="label"
            >
              Get Agency
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};
export default index;

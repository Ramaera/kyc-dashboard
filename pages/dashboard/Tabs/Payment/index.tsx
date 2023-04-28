import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector } from '@/hooks';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
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
const InfoTab = () => {
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
      <Typography variant="h4" sx={{ my: 2 }}>
        Status : {paymentDocument ? paymentDocument.status : 'Unknown'}
      </Typography>
      <Typography variant="h4" sx={{ my: 2 }}>
        Kindly Deposit Rs.
        {user.membership === 'BASIC' ? '1,000/-' : '1,00,000/-'} and upload the
        payment slip as a proof!
      </Typography>
      <TableContainer component={Paper}>
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
      </TableContainer>
      {proofImage ? (
        <img
          src={
            typeof proofImage == 'object'
              ? URL.createObjectURL(proofImage)
              : proofImage
          }
          height={200}
          width={200}
        />
      ) : null}
      <Grid container p={2} spacing={2}>
        <Grid item xs={12} sm={5} md={3} lg={3}>
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
    </>
  );
};
export default InfoTab;

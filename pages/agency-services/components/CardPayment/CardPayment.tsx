import React, { useState } from 'react';
import { Button, Typography, Container, Box, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentDetails from '../PaymentDetails/paymentDetails';
const Documents = () => {
  const theme = useTheme();

  const UploadPaymentProof = () => {
    const [files, setFiles] = useState(['']);

    function handleChange(index, e) {
      const updatedFiles = [...files];
      updatedFiles[index] = URL.createObjectURL(e.target.files[0]);
      setFiles(updatedFiles);
    }

    function handleAddMore() {
      setFiles([...files, '']);
    }

    return (
      <Box>
        <h2 style={{ marginTop: '20px' }}>Upload Payment Proofs</h2>
        {files.map((file, index) => (
          <Box padding={1} key={index}>
            <input type="file" onChange={(e) => handleChange(index, e)} />
            <Button>
              <img src={file} />
            </Button>
          </Box>
        ))}
        <Button
          sx={{ marginTop: 5 }}
          variant="contained"
          onClick={handleAddMore}
        >
          Add More
        </Button>
      </Box>
    );
  };

  const cardType = 'Gold';
  return (
    <Container>
      <Typography
        fontSize={30}
        fontWeight={600}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Payment Details
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        <Box marginTop={2} sx={{ width: '50%' }}>
          <Box
            sx={{
              backgroundColor: 'black',
              // height: 60,
              width: 400,
              justifyContent: 'space-between',
              display: 'flex',
              padding: 2,
              [theme.breakpoints.down('sm')]: {
                width: 250
              }
            }}
          >
            <Typography>Gold</Typography>
            <Typography>#myCard</Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'grey',
              height: 200,
              width: 400,
              [theme.breakpoints.down('sm')]: {
                width: 250
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <img
                // alt="500"

                style={{ marginLeft: 5 }}
                height={70}
                src="/static/images/logo/logo.png"
              />
              <ShoppingCartIcon style={{ marginRight: 5 }} />
            </Box>{' '}
            <Typography
              sx={{
                marginTop: 3,
                display: 'flex',
                justifyContent: 'center',
                fontSize: 20,
                letterSpacing: 6,
                [theme.breakpoints.down('sm')]: {
                  letterSpacing: 2
                }
              }}
            >
              1234567890123456
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 1,
                padding: 2
              }}
            >
              <Typography>Kartikey Sharma</Typography>
              <Typography>Expiry:- 11/24</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          marginTop={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%'
          }}
        >
          <PaymentDetails />
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'left',
              fontSize: 30,
              marginTop: 5
            }}
          >
            {(cardType === 'Bronze' && 'You have to pay ₹1000') ||
              (cardType === 'Silver' && 'You have to pay ₹2500') ||
              (cardType === 'Gold' && 'You have to pay ₹5000') ||
              (cardType === 'Platinum' && 'You have to pay ₹10000')}
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography>{UploadPaymentProof()}</Typography>
      </Box>
      <Box sx={{ marginTop: 1 }}>
        <Button>Submit</Button>
      </Box>
    </Container>
  );
};

export default Documents;

import React, { useState } from 'react';
import { Button, Typography, Box, useTheme } from '@mui/material';
import PaymentDetails from './components/paymentDetails';
import CardRamaera from '../CardRamaera';
import CardBenefits from './components/cardBenefits';
import UploadCardPayment from './components/uploadCardPayment';

const Documents = (props: any) => {
  const { id, type, cardNumber, cardHolder, generatedCardData } = props;
  const theme = useTheme();

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          fontSize={30}
          fontWeight={600}
          sx={{
            display: 'flex',
            [theme.breakpoints.down('sm')]: {
              fontSize: 20,
              width: '50%'
            }
          }}
        >
          Card Details
        </Typography>

        <Box>
          <Button
            sx={{
              display: 'flex',
              [theme.breakpoints.down('sm')]: {
                fontSize: 10,
                width: '100%',
                padding: 1
              }
            }}
            variant="contained"
          >
            Activate Your Card
          </Button>
        </Box>
      </Box>

      <Box
        marginTop={1}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        <Box sx={{}}>
          <CardRamaera
            id={id}
            type={type}
            cardNumber={generatedCardData?.cardNumber}
            cardHolder={cardHolder}
            expiry={generatedCardData?.cardValidity}
          />
        </Box>
        <Box>
          <CardBenefits
            id={id}
            type={type}
            amountYouGet={generatedCardData?.cardValue}
            validUpto={generatedCardData?.cardValidity}
            redeemAmount={generatedCardData?.maxDiscount}
          />
        </Box>
      </Box>
      <Typography
        fontSize={30}
        fontWeight={600}
        sx={{
          display: 'flex',
          marginTop: 5,
          [theme.breakpoints.down('sm')]: {
            fontSize: 20
          }
        }}
      >
        Payment Details
      </Typography>
      <Box
        marginTop={1}
        sx={{
          display: 'flex',
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
          }
        }}
      >
        <Box sx={{}}>
          <PaymentDetails docStatus={undefined} />
        </Box>
        <Box
          sx={{
            marginLeft: 10,
            [theme.breakpoints.down('sm')]: {
              marginLeft: 0
            }
          }}
        >
          <UploadCardPayment cardId={id} />
        </Box>
      </Box>
    </Box>
  );
};

export default Documents;

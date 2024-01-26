import React, { useState } from 'react';
import { Button, Typography, Box, useTheme } from '@mui/material';
import PaymentDetails from './components/paymentDetails';
import CardRamaera from '../CardRamaera';
import CardBenefits from './components/cardBenefits';
import UploadCardPayment from './components/uploadCardPayment';
const Documents = (props: any) => {
  const { selectedCard } = props;
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
        {/* <Typography fontSize={30} fontWeight={600} sx={{ display: 'flex' }}>
          Staus:Pending
        </Typography> */}
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
          <CardRamaera {...selectedCard} />
        </Box>
        <Box>
          <CardBenefits />
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
          <UploadCardPayment />
        </Box>
      </Box>
    </Box>
  );
};

export default Documents;

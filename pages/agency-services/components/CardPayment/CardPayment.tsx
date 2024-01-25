import React, { useState } from 'react';
import { Button, Typography, Box, useTheme } from '@mui/material';
import PaymentDetails from './components/paymentDetails';
import CardRamaera from '../CardRamaera';
import CardBenefits from './components/cardBenefits';
import UploadCardPayment from './components/uploadCardPayment';
const Documents = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography fontSize={30} fontWeight={600} sx={{ display: 'flex' }}>
          Card Details
        </Typography>
        <Box>
          <Button variant="contained">Activate Your Card</Button>
        </Box>
      </Box>

      <Box
        marginTop={2}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center'
          // justifyContent: 'center'
        }}
      >
        <Box sx={{}}>
          <CardRamaera />
        </Box>
        <Box>
          <CardBenefits />
        </Box>
      </Box>
      <Typography
        fontSize={30}
        fontWeight={600}
        sx={{ display: 'flex', marginTop: 5 }}
      >
        Payment Details
      </Typography>
      <Box
        marginTop={2}
        sx={{
          display: 'flex'
          // justifyContent: 'center'
        }}
      >
        <Box sx={{}}>
          <PaymentDetails docStatus={undefined} />
        </Box>
        <Box sx={{ marginLeft: 10 }}>
          <UploadCardPayment />
        </Box>
      </Box>
    </div>
  );
};

export default Documents;

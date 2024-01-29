import React from 'react';
import {
  Box,
  Card,
  Typography,
  Divider,
  useTheme,
  colors
} from '@mui/material';

const TransactionDetailsCard = ({ amountToWithdraw }) => {
  const theme = useTheme();
  return (
    <Box
      style={{
        margin: '2%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2%',
        alignItems: 'center'
      }}
    >
      {/* #3a4068  #10121e*/}
      <Card
        sx={{
          maxWidth: 550,
          background: '#10121e',
          boxShadow: 5
        }}
      >
        <Typography
          textAlign={'center'}
          fontSize={24}
          fontWeight={600}
          paddingY={1}
          style={{ background: ' #3a4068' }}
        >
          Transaction Details
        </Typography>
        <Divider />

        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          paddingX={2}
        >
          <Typography
            textAlign={'center'}
            fontSize={24}
            fontWeight={600}
            color="white"
            marginY={1}
          >
            ₹ {amountToWithdraw}
          </Typography>
          <Typography
            sx={{
              backgroundColor: 'orange',
              fontSize: 16,
              fontWeight: 600,
              color: 'white',
              paddingX: 1,
              paddingY: 0.5,
              borderRadius: 1,
              textAlign: 'center',
              width: 100,
              [theme.breakpoints.down('sm')]: {}
            }}
          >
            Pending
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 600,
              color: 'white',
              marginTop: 1,
              [theme.breakpoints.down('sm')]: {
                fontSize: 16
              }
            }}
          >
            Withdrawal To Bank Account
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              marginTop: 1,

              textAlign: 'center',
              [theme.breakpoints.down('sm')]: {
                fontSize: 12
              }
            }}
          >
            We've received your withdrawal request. Incase it fails, the amount
            will be returned to your Funds in Wallet.
          </Typography>
        </Box>

        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          paddingX={3}
          marginY={2}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Typography>Payment Method</Typography>
            <Typography>NEFT</Typography>
          </Box>

          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Typography>From</Typography>
            <Typography>Agency Wallet</Typography>
          </Box>

          {/* <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Typography>Account</Typography>
            <Typography>****414</Typography>
          </Box> */}

          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Typography>Started on</Typography>
            <Typography>30/01/2024</Typography>
          </Box>

          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Typography>Transaction Fee</Typography>
            <Typography>No Fee</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default TransactionDetailsCard;

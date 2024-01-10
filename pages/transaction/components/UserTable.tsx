import { GET_FINAL_WALLET_BALANCE_OF_AGENCY } from '@/apollo/queries/auth';
import { useQuery } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Button, TextField, useTheme } from '@mui/material';

import {
  Box,
  Card,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { textAlign } from 'html2canvas/dist/types/css/property-descriptors/text-align';
import { color } from 'html2canvas/dist/types/css/types/color';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const UserTable = () => {
  const [amountToWithdraw, setAmountToWithdraw] = useState('');

  const handleAmountChange = (event) => {
    // Update the state with the entered value
    setAmountToWithdraw(event.target.value);
  };

  const isWithdrawalValid = () => {
    // Check if the entered amount is smaller than or equal to the wallet balance
    return parseFloat(amountToWithdraw) <= walletBalance;
  };
  const theme = useTheme();
  const [show, setShow] = useState(true);
  const agencyCode = useSelector(
    (persistor: any) => persistor.user?.agencyCode
  );

  const { data } = useQuery(GET_FINAL_WALLET_BALANCE_OF_AGENCY, {
    variables: { agencyCode: agencyCode }
  });
  const walletBalance = data?.GetFinalWalletBalanceOfAgency?.finalBalance;

  const handleButtonClick = () => {
    setShow(!show);
  };
  return (
    <>
      {show ? (
        <>
          <Card sx={{ marginTop: 2 }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '2%',
                [theme.breakpoints.down('sm')]: {
                  width: '100%'
                }
              }}
            >
              <div>
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}
                >
                  Amount To Withdraw
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    sx={{
                      marginTop: 2,
                      width: '30%',
                      display: 'flex',
                      justifyContent: 'center',
                      [theme.breakpoints.down('sm')]: {
                        width: '100%'
                      }
                    }}
                    id="outlined"
                    type="number"
                    label="Amount To Withdrawal"
                    variant="outlined"
                    value={amountToWithdraw}
                    onChange={handleAmountChange}
                  />
                </div>
                {amountToWithdraw >= walletBalance && (
                  <Typography
                    textAlign={'center'}
                    fontWeight={'700'}
                    color={'red'}
                  >
                    Amount must be less than wallet balance
                  </Typography>
                )}

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    onClick={handleButtonClick}
                    variant="contained"
                    sx={{
                      width: '30%',
                      display: 'flex',
                      justifyContent: 'center',
                      cursor: 'unset',
                      padding: 1,
                      margin: 1,
                      [theme.breakpoints.down('sm')]: {
                        width: '100%'
                      }
                    }}
                    disabled={
                      amountToWithdraw >= walletBalance ||
                      amountToWithdraw <= '0'
                    }
                  >
                    Place Withdrawal Request
                  </Button>
                </div>
              </div>
            </Box>
          </Card>
        </>
      ) : (
        <>
          <Card style={{ marginTop: '2%' }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '2%',
                alignItems: 'center',

                [theme.breakpoints.down('sm')]: {
                  width: '100%'
                }
              }}
            >
              <Card sx={{ paddingY: '20px' }}>
                <Typography textAlign={'center'} fontSize={32} fontWeight={600}>
                  Transaction Details
                </Typography>
                <Divider />
                <Typography
                  textAlign={'center'}
                  fontSize={24}
                  fontWeight={600}
                  color="white"
                >
                  ₹ 12345
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: 'orange',
                      width: '15%',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: 'white',
                      padding: '10px',
                      marginTop: '5px',
                      borderRadius: '3px',
                      textAlign: 'center',
                      [theme.breakpoints.down('sm')]: {
                        width: '30%'
                      }
                    }}
                  >
                    Pending
                  </Typography>
                </div>
                <div>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontSize: 24,
                      fontWeight: 600,
                      color: 'white',
                      marginTop: 1,
                      [theme.breakpoints.down('sm')]: {
                        fontSize: 20
                      }
                    }}
                  >
                    Withdrawal To Bank Account
                  </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography
                    fontSize={14}
                    fontWeight={600}
                    marginTop={1}
                    width="70%"
                    textAlign={'center'}
                  >
                    We've received your withdrawal request. Incase it fails, the
                    amount will be returned to your Funds in Wallet.
                  </Typography>
                </div>
                <Box sx={{ width: '100%', marginTop: '15px', fontSize: 14 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      fontSize: 14
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '70%'
                      }}
                    >
                      <Typography sx={{ fontSize: 14 }}>
                        Payment Method
                      </Typography>
                      <Typography sx={{ fontSize: 14 }}>NEFT</Typography>
                    </div>
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '70%'
                      }}
                    >
                      <Typography sx={{ fontSize: 14 }}>From</Typography>
                      <Typography sx={{ fontSize: 14 }}>
                        Agency Wallet
                      </Typography>
                    </div>
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '70%'
                      }}
                    >
                      <Typography>Account</Typography>
                      <Typography>****414</Typography>
                    </div>
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '70%'
                      }}
                    >
                      <Typography>Started on</Typography>
                      <Typography>12/01/2023</Typography>
                    </div>
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '70%'
                      }}
                    >
                      <Typography>Transaction Fee</Typography>
                      <Typography>No Fee</Typography>
                    </div>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',

                    [theme.breakpoints.down('sm')]: {
                      display: 'flex',
                      flexDirection: 'column'
                    }
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: 'uppercase',
                      padding: 2,
                      margin: 2,
                      backgroundColor: 'red',
                      borderColor: 'red',
                      color: 'white'
                    }}
                  >
                    Cancel Request
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: 'uppercase',
                      padding: 2,
                      margin: 2
                    }}
                  >
                    Modify Request
                  </Button>
                </Box>
              </Card>
            </Box>
          </Card>
        </>
      )}
    </>
  );
};

export default UserTable;

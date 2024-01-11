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
          <Box sx={{ marginTop: 2 }}>
            <Box
              sx={{
                width: '95%',
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
          </Box>
        </>
      ) : (
        <>
          <Box style={{ marginTop: '2%' }}>
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
                  ₹ {amountToWithdraw}
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
                      fontSize: 18,
                      fontWeight: 600,
                      color: 'white',
                      paddingX: 2,
                      paddingY: 1,
                      marginTop: 1,
                      borderRadius: 1,
                      textAlign: 'center',
                      [theme.breakpoints.down('sm')]: {}
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
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      marginTop: 1,
                      width: '70%',
                      textAlign: 'center',
                      [theme.breakpoints.down('sm')]: {
                        fontSize: 12,
                        width: '95%'
                      }
                    }}
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
                      <Typography
                        sx={{
                          fontSize: 18,
                          [theme.breakpoints.down('sm')]: {
                            fontSize: 14
                          }
                        }}
                      >
                        Payment Method
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 18,
                          [theme.breakpoints.down('sm')]: {
                            fontSize: 14
                          }
                        }}
                      >
                        NEFT
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
                      <Typography
                        sx={{
                          fontSize: 18,
                          [theme.breakpoints.down('sm')]: {
                            fontSize: 14
                          }
                        }}
                      >
                        From
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 18,
                          [theme.breakpoints.down('sm')]: {
                            fontSize: 14
                          }
                        }}
                      >
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
                      <Typography
                        sx={{
                          fontSize: 18,
                          [theme.breakpoints.down('sm')]: {
                            fontSize: 14
                          }
                        }}
                      >
                        Account
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 18,
                          [theme.breakpoints.down('sm')]: {
                            fontSize: 14
                          }
                        }}
                      >
                        ****414
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
                      <Typography
                        sx={{
                          fontSize: 18,
                          [theme.breakpoints.down('sm')]: {
                            fontSize: 14
                          }
                        }}
                      >
                        Started on
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 18,
                          [theme.breakpoints.down('sm')]: {
                            fontSize: 14
                          }
                        }}
                      >
                        12/01/2023
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
                      <Typography
                        sx={{
                          fontSize: 18,
                          [theme.breakpoints.down('sm')]: {
                            fontSize: 14
                          }
                        }}
                      >
                        Transaction Fee
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 18,
                          [theme.breakpoints.down('sm')]: {
                            fontSize: 14
                          }
                        }}
                      >
                        No Fee
                      </Typography>
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
          </Box>
        </>
      )}
    </>
  );
};

export default UserTable;

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
import TransactionDetailsCard from './TansactionDetail';

const UserTable = () => {
  const [amountToWithdraw, setAmountToWithdraw] = useState('');

  const handleAmountChange = (event) => {
    // Update the state with the entered value
    setAmountToWithdraw(event.target.value);
  };

  const theme = useTheme();
  const [show, setShow] = useState(true);
  const agencyCode = useSelector(
    (persistor: any) => persistor.user?.agencyCode?.agencyCode
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
                {amountToWithdraw > walletBalance && (
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
                      amountToWithdraw > walletBalance ||
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
          <TransactionDetailsCard amountToWithdraw={amountToWithdraw} />
        </>
      )}
    </>
  );
};

export default UserTable;

import { LoadingButton } from '@mui/lab';
import {
  Table,
  Button,
  useTheme,
  Card,
  Box,
  TableContainer,
  Typography,
  TableCell,
  TableHead,
  TableRow,
  TableBody
} from '@mui/material';
import Link from 'next/link';
import UserTable from './UserTable';
import { AGENCY_WALLET_HISTORY } from '@/apollo/queries/auth';

import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useMutation, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { log } from 'console';

const WalletFields = () => {
  const theme = useTheme();
  const [active, setActive] = useState(false);
  const [currentSelectedButton, setCurrentSelectedButton] = useState('');
  const agencyCode = useSelector((state: any) => state.user?.agencyCode);

  const getAllWalletHistory = useQuery(AGENCY_WALLET_HISTORY, {
    variables: {
      agencyCode: agencyCode
    }
  });

  const isButtonActive = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    // Enable the button on the 15th and 30th of every month
    return currentDay === 11 || currentDay === 30;
  };

  const allWalletHistory = getAllWalletHistory?.data?.AgencyWalletHistory;
  console.log('allWalletHistory', allWalletHistory);

  return (
    <>
      <Card>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column'
            }
          }}
        >
          <Table
            sx={{
              width: active ? '22%' : '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: '2%',
              alignItems: 'center',
              [theme.breakpoints.down('sm')]: {
                width: '100%'
              }
            }}
          >
            <LoadingButton
              onClick={() => {
                setCurrentSelectedButton('WithdrawAmount');
                setActive(true);
              }}
              variant={active ? 'contained' : 'outlined'}
              sx={{
                mt: 2,
                mb: 2,
                width: '180px',
                [theme.breakpoints.down('sm')]: {
                  mt: 1
                }
              }}
              disabled={!isButtonActive()}
            >
              Withdraw Amount
            </LoadingButton>

            <LoadingButton
              onClick={() => {
                setCurrentSelectedButton('WithdrawHistory');
                setActive(true);
              }}
              variant={active ? 'contained' : 'outlined'}
              sx={{
                mt: 2,
                mb: 2,
                width: '180px',
                [theme.breakpoints.down('sm')]: {
                  mt: 1
                }
              }}
            >
              Withdraw History
            </LoadingButton>
            {/* <LoadingButton
              variant="outlined"
              sx={{
                mt: 2,
                mb: 2,
                width: '180px',
                [theme.breakpoints.down('sm')]: {
                  mt: 1
                }
              }}
            >
              Withdraw Amountsss
            </LoadingButton> */}
          </Table>
          {active && (
            <TableContainer
              sx={{
                width: '78%',
                borderLeft: '1px solid #2c3151',
                [theme.breakpoints.down('sm')]: {
                  border: 'none',
                  width: '100%'
                }
              }}
            >
              {currentSelectedButton.includes('WithdrawAmount') && (
                <UserTable />
              )}
              {currentSelectedButton.includes('WithdrawHistory') && (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Amount Withdrawl</TableCell>
                      <TableCell>Balance</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allWalletHistory?.map((item: any) => (
                      <TableRow sx={{ cursor: 'pointer' }}>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            {item.createdAt}
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                          >
                            {/* {item.amount} */}
                          </Typography>
                        </TableCell>
                        <Link href="" scroll={false}>
                          <TableCell align="left">
                            <Typography
                              variant="body1"
                              width="100px"
                              fontWeight="bold"
                              color="text.primary"
                              noWrap
                            >
                              {item.type}
                            </Typography>
                          </TableCell>
                        </Link>
                        <TableCell>
                          <Typography
                            fontWeight="bold"
                            width="100px"
                            color="text.success"
                            gutterBottom
                            noWrap
                          >
                            ₹ {item.amount}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            width="80px"
                            noWrap
                          >
                            ₹ {item.finalBalance}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}

                    <Toaster position="bottom-center" reverseOrder={false} />
                  </TableBody>
                </Table>
              )}
            </TableContainer>
          )}
        </Box>
      </Card>
    </>
  );
};
export default WalletFields;

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

import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

const WalletFields = () => {
  const theme = useTheme();
  const [active, setActive] = useState(false);
  const [currentSelectedButton, setCurrentSelectedButton] = useState('');

  const isButtonActive = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    // Enable the button on the 15th and 30th of every month
    return currentDay === 11 || currentDay === 30;
  };

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
                      <TableCell>S.No.</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>PWID</TableCell>
                      <TableCell>KYC Status</TableCell>
                      <TableCell>Membership</TableCell>
                      <TableCell>Carry Forward</TableCell>
                      <TableCell align="center">KYC Income</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ cursor: 'pointer' }}>
                      <TableCell>
                        {' '}
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          1
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
                          Chota Don
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
                            420
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
                          Always Approoved
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
                          UnderWorld
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          // minWidth="80px"
                          noWrap
                        >
                          Accepted
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          width="100px"
                          color="text.success"
                          gutterBottom
                          noWrap
                        >
                          200
                        </Typography>
                      </TableCell>
                    </TableRow>

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

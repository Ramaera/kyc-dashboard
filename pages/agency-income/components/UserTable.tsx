import { LoadingButton } from '@mui/lab';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import {
  GET_AGENCY_PAYMENT,
  GetUser,
  TRANSACTION_TO_WALLET
} from '@/apollo/queries/auth';

import {
  Box,
  Card,
  CardHeader,
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
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useMutation, useQuery } from '@apollo/client';
import { useAppSelector } from '@/hooks';
import { useSelector } from 'react-redux';
import { timeStamp } from 'console';

const UserTable = () => {
  const agencyCode = useSelector((state: any) => state.user?.agencyCode);

  const [transactionToWalletMutation] = useMutation(TRANSACTION_TO_WALLET);
  const [isLoading, setLoading] = useState({});
  const matches = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const userResp = useQuery(GetUser);
  const userDetails = useAppSelector((state) => state.user.data);
  const [active, setActive] = useState(false);
  const [currentSelectedButton, setCurrentSelectedButton] = useState('');

  const currentDate = new Date();
  const months = [];
  for (let year = 2023; year <= currentDate.getFullYear(); year++) {
    const startMonth = year === 2023 ? 9 : 0; // October is 9 (0-indexed)
    const endMonth =
      year === currentDate.getFullYear() ? currentDate.getMonth() : 11;

    for (let month = startMonth; month <= endMonth; month++) {
      const monthYearString = `${year}-${String(month + 1).padStart(2, '0')}`;
      months.push(monthYearString);
    }
  }

  const initialDate = {
    month: currentDate.getMonth(),
    year: currentDate.getFullYear()
  };
  const [date, setDate] = useState<number>(initialDate);

  const [selectedMonthYear, setSelectedMonthYear] = useState<string>(
    months[months.length - 1]
  ); // Set initial value to the latest month and year

  const [selectedYear, selectedMonth] = selectedMonthYear.split('-');
  const getAgencyPayment = useQuery(GET_AGENCY_PAYMENT, {
    variables: {
      agencyCode: agencyCode,
      month: parseInt(selectedMonth, 10),
      year: parseInt(selectedYear, 10)
    }
  });

  // const getAgencyPayment = useQuery(GET_AGENCY_PAYMENT, {
  //   variables: {
  //     // agencyCode: 'ReferralAgencyCode',
  //     agencyCode: 'RLI977346',
  //     month: date.month,
  //     year: date.year
  //   }
  // });

  function getMonthName(dateString) {
    const myDate = new Date(dateString);
    const ans = myDate.toLocaleString('default', { month: 'long' });
    return ans;
  }

  function currentMonthName(monthNumber) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return months[monthNumber];
  }
  const monthName = currentMonthName(date.month);

  //total amount of each agency
  const totalKycIncome = getAgencyPayment?.data?.AgencyPayment?.kycAmount;
  const totalAgraIncome =
    getAgencyPayment?.data?.AgencyPayment?.agraProjectAmount;
  const totalHajipurIncome =
    getAgencyPayment?.data?.AgencyPayment?.hajipurProjectAmount;
  const totalMonthIncome =
    totalKycIncome + totalAgraIncome + totalHajipurIncome;

  //kyc
  const kycBasicIncome =
    getAgencyPayment?.data?.AgencyPayment?.BasicKycApprovedUser;
  const kycAdvanceIncome =
    getAgencyPayment?.data?.AgencyPayment?.AdvanceKycApprovedUser;
  const kycIncomeData = [];
  kycBasicIncome?.map((user) => kycIncomeData.push(user));
  kycAdvanceIncome?.map((user) => kycIncomeData.push(user));
  // Hajipur
  const basicHajipurIncome =
    getAgencyPayment?.data?.AgencyPayment?.basicHajipurprojectDocument;
  const advanceHajipurIncome =
    getAgencyPayment?.data?.AgencyPayment?.advanceHajipurprojectDocument;
  const hajipurIncomeData = [];
  basicHajipurIncome?.map((user) => hajipurIncomeData.push(user));
  advanceHajipurIncome?.map((user) => hajipurIncomeData.push(user));
  //Agra
  const basicAgraIncome =
    getAgencyPayment?.data?.AgencyPayment?.basicAgraprojectDocument;
  const advanceAgraIncome =
    getAgencyPayment?.data?.AgencyPayment?.advanceAgraprojectDocument;
  const agraIncomeData = [];
  basicAgraIncome?.map((user) => agraIncomeData.push(user));
  advanceAgraIncome?.map((user) => agraIncomeData.push(user));

  const showButtonDate = new Date('2023-01-01'); //YYYY-MM-DD
  const getDate = `${showButtonDate.getFullYear()}-${
    showButtonDate.getMonth() + 1
  }`;

  const walletTransferShowButton = selectedMonthYear >= getDate;
  // console.log('getDate', getDate, 'selectedMonthYear');

  const handleTransferToWallet = async (user, userId, paymentType) => {
    setLoading({ ...isLoading, [user.id]: true });

    // console.log('user---', user);

    const amountGenerate = currentSelectedButton.includes('kyc')
      ? 200
      : currentSelectedButton.includes('hajipur')
      ? user?.amount * 0.01
      : currentSelectedButton.includes('agra')
      ? user?.amount * 0.1
      : '';

    interface metaType {
      userId?: string;
      timeStamp?: string;
      documentId?: string;
    }

    const metaData: metaType[] = [
      { userId: userId },
      { timeStamp: new Date().toLocaleString('en-US', 'Asia/Delhi') }
    ];

    if (paymentType === 'project') {
      metaData.push({ documentId: user.id });
    }

    try {
      const data = await transactionToWalletMutation({
        variables: {
          agencyCode: agencyCode,
          type: 'DEPOSIT',
          amount: amountGenerate,
          metaData: metaData
        }
      });
      // console.log('data', data);
      toast.success('Succesfully');
    } catch (err) {
      // console.log('err---', err);
      toast.error(err.message);
    }
    setLoading({ ...isLoading, [user.id]: false });
  };

  return (
    <>
      <Card>
        <Box
          display={'flex'}
          gap={'20px'}
          alignItems={'center'}
          flexDirection={'row'}
          padding={2}
          sx={{
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column'
            }
          }}
        >
          <Box fontSize={23} fontWeight={600}>
            Agency Income List
          </Box>

          <Box width={'200px'}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="month-year-dropdown-label">
                Month and Year
              </InputLabel>
              <Select
                labelId="month-year-dropdown-label"
                id="month-year-dropdown"
                label="Month and Year"
                value={selectedMonthYear}
                onChange={(e: ChangeEvent<{ value: unknown }>) =>
                  setSelectedMonthYear(e.target.value as string)
                }
              >
                {months.map((monthYear) => (
                  <MenuItem key={monthYear} value={monthYear}>
                    {monthYear.split('-')[1] == new Date().getMonth() + 1
                      ? 'Current Month'
                      : new Date(monthYear).toLocaleString('default', {
                          month: 'long',
                          year: 'numeric'
                        })}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button variant="outlined" sx={{ cursor: 'unset', padding: 1.5 }}>
            Amount : ₹ {totalMonthIncome}
          </Button>
        </Box>
        <Divider />
        <TableContainer
          sx={{
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
            <Typography textAlign={'center'} fontSize={18} fontWeight={600}>
              Check Income Details
            </Typography>
            <LoadingButton
              onClick={() => {
                setActive(true);
                setCurrentSelectedButton('kyc');
              }}
              variant="contained"
              sx={{ mt: 2, mb: 2, width: '180px' }}
            >
              KYC : ₹{totalKycIncome}
            </LoadingButton>
            <LoadingButton
              onClick={() => {
                setActive(true);
                setCurrentSelectedButton('hajipur');
              }}
              variant="contained"
              sx={{ mt: 2, mb: 2, width: '180px' }}
            >
              HAJIPUR : ₹{totalHajipurIncome}
            </LoadingButton>
            <LoadingButton
              onClick={() => {
                setActive(true);
                setCurrentSelectedButton('agra');
              }}
              variant="contained"
              sx={{ mt: 2, mb: 2, width: '180px' }}
            >
              AGRA : ₹{totalAgraIncome}
            </LoadingButton>
          </Table>

          {currentSelectedButton.includes('kyc') && (
            <Table
              sx={{
                width: '78%',
                borderLeft: '0.1px solid #6A7199',
                [theme.breakpoints.down('sm')]: {
                  border: 'none'
                }
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>S.No.</TableCell>
                  {walletTransferShowButton && (
                    <TableCell>Transfer To Wallet</TableCell>
                  )}
                  <TableCell>Name</TableCell>
                  <TableCell>PWID</TableCell>
                  <TableCell>KYC Status</TableCell>
                  <TableCell>Membership</TableCell>
                  <TableCell>Carry Forward</TableCell>
                  <TableCell align="center">KYC Income</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {kycIncomeData.map((user, index) => {
                  return (
                    <TableRow hover key={user?.id} sx={{ cursor: 'pointer' }}>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          align="center"
                          noWrap
                          width={30}
                        >
                          {index + 1}
                        </Typography>
                      </TableCell>
                      {walletTransferShowButton && (
                        <TableCell>
                          <LoadingButton
                            loading={isLoading[user.id]}
                            variant="contained"
                            sx={{
                              fontSize: 12,
                              cursor: 'unset',
                              padding: 1,
                              minWidth: 200
                            }}
                            onClick={() =>
                              handleTransferToWallet(user, user.id, 'kyc')
                            }
                          >
                            Transfer Amount To Wallet
                          </LoadingButton>
                        </TableCell>
                      )}
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {user?.name === 'NULL' ? null : user?.name}
                        </Typography>
                      </TableCell>
                      <Link href="" scroll={false}>
                        <TableCell
                          align="left"
                          onClick={() => {
                            toast.success(`PWID ${user.pw_id} Copied`);
                            navigator.clipboard.writeText(user.pw_id);
                          }}
                        >
                          <Typography
                            variant="body1"
                            width="100px"
                            fontWeight="bold"
                            color="text.primary"
                            noWrap
                          >
                            {user?.pw_id === 'NULL' ? null : user?.pw_id}
                          </Typography>
                        </TableCell>
                      </Link>
                      <TableCell>
                        <Typography
                          style={{
                            color:
                              user?.kyc === 'APPROVED'
                                ? 'limegreen'
                                : user?.kyc === 'REJECTED'
                                ? 'red'
                                : user?.kyc === 'ONGOING'
                                ? 'orange'
                                : 'white'
                          }}
                          variant="body1"
                          fontWeight="bold"
                          width="100px"
                          color="text.success"
                          gutterBottom
                          noWrap
                        >
                          {user?.kyc}
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
                          {user?.membership}
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
                          {user?.createdAt.slice(0, 7) === selectedMonthYear
                            ? '--'
                            : `Carry Forward ${getMonthName(user?.createdAt)}`}
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
                  );
                })}
                <Toaster position="bottom-center" reverseOrder={false} />
              </TableBody>
            </Table>
          )}

          {currentSelectedButton.includes('hajipur') && (
            <Table
              sx={{
                width: '78%',
                borderLeft: '0.1px solid #6A7199',
                [theme.breakpoints.down('sm')]: {
                  border: 'none'
                }
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>S.No.</TableCell>
                  {walletTransferShowButton && (
                    <TableCell>Transfer To Wallet</TableCell>
                  )}
                  <TableCell>Name</TableCell>
                  <TableCell>PWID</TableCell>
                  <TableCell>KYC Status</TableCell>
                  <TableCell>Membership</TableCell>
                  <TableCell>Invest Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hajipurIncomeData.map((user, index) => {
                  return (
                    <TableRow hover key={user?.id} sx={{ cursor: 'pointer' }}>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          align="center"
                          noWrap
                          width={30}
                        >
                          {index + 1}
                        </Typography>
                      </TableCell>
                      {walletTransferShowButton && (
                        <TableCell>
                          <LoadingButton
                            loading={isLoading[user.id]}
                            variant="contained"
                            sx={{
                              fontSize: 12,
                              cursor: 'unset',
                              padding: 1,
                              minWidth: 200
                            }}
                            onClick={() =>
                              handleTransferToWallet(
                                user,
                                user?.user?.id,
                                'project'
                              )
                            }
                          >
                            Transfer Amount To Wallet
                          </LoadingButton>
                        </TableCell>
                      )}
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {user?.user?.name === 'NULL'
                            ? null
                            : user?.user?.name}
                        </Typography>
                      </TableCell>
                      <Link href="" scroll={false}>
                        <TableCell
                          align="left"
                          onClick={() => {
                            toast.success(`PWID ${user.pw_id} Copied`);
                            navigator.clipboard.writeText(user.pw_id);
                          }}
                        >
                          <Typography
                            variant="body1"
                            width="100px"
                            fontWeight="bold"
                            color="text.primary"
                            noWrap
                          >
                            {user?.user?.pw_id === 'NULL'
                              ? null
                              : user?.user?.pw_id}
                          </Typography>
                        </TableCell>
                      </Link>
                      <TableCell>
                        <Typography
                          style={{
                            color:
                              user?.user?.kyc === 'APPROVED'
                                ? 'limegreen'
                                : user?.user?.kyc === 'REJECTED'
                                ? 'red'
                                : user?.user?.kyc === 'ONGOING'
                                ? 'orange'
                                : 'white'
                          }}
                          variant="body1"
                          fontWeight="bold"
                          width="100px"
                          color="text.success"
                          gutterBottom
                          noWrap
                        >
                          {user?.user?.kyc}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          width="80px"
                          noWrap
                        >
                          {user?.user?.membership}
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
                          {user?.amount}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <Toaster position="bottom-center" reverseOrder={false} />
              </TableBody>
            </Table>
          )}
          {currentSelectedButton.includes('agra') && (
            <Table
              sx={{
                width: '78%',
                borderLeft: '0.1px solid #6A7199',
                [theme.breakpoints.down('sm')]: {
                  border: 'none'
                }
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>S.No.</TableCell>
                  {walletTransferShowButton && (
                    <TableCell>Transfer To Wallet</TableCell>
                  )}
                  <TableCell>Name</TableCell>
                  <TableCell>PWID</TableCell>
                  <TableCell>KYC Status</TableCell>
                  <TableCell>Membership</TableCell>
                  <TableCell>Invest Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {agraIncomeData.map((user, index) => {
                  return (
                    <TableRow hover key={user?.id} sx={{ cursor: 'pointer' }}>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          align="center"
                          noWrap
                          width={30}
                        >
                          {index + 1}
                        </Typography>
                      </TableCell>
                      {walletTransferShowButton && (
                        <TableCell>
                          <LoadingButton
                            loading={isLoading[user.id]}
                            variant="contained"
                            sx={{
                              fontSize: 12,
                              cursor: 'unset',
                              padding: 1,
                              minWidth: 200
                            }}
                            onClick={() =>
                              handleTransferToWallet(
                                user,
                                user?.user?.id,
                                'project'
                              )
                            }
                          >
                            Transfer Amount To Wallet
                          </LoadingButton>
                        </TableCell>
                      )}
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {user?.user?.name === 'NULL'
                            ? null
                            : user?.user?.name}
                        </Typography>
                      </TableCell>
                      <Link href="" scroll={false}>
                        <TableCell
                          align="left"
                          onClick={() => {
                            toast.success(`PWID ${user.pw_id} Copied`);
                            navigator.clipboard.writeText(user.pw_id);
                          }}
                        >
                          <Typography
                            variant="body1"
                            width="100px"
                            fontWeight="bold"
                            color="text.primary"
                            noWrap
                          >
                            {user?.user?.pw_id === 'NULL'
                              ? null
                              : user?.user?.pw_id}
                          </Typography>
                        </TableCell>
                      </Link>
                      <TableCell>
                        <Typography
                          style={{
                            color:
                              user?.user?.kyc === 'APPROVED'
                                ? 'limegreen'
                                : user?.user?.kyc === 'REJECTED'
                                ? 'red'
                                : user?.user?.kyc === 'ONGOING'
                                ? 'orange'
                                : 'white'
                          }}
                          variant="body1"
                          fontWeight="bold"
                          width="100px"
                          color="text.success"
                          gutterBottom
                          noWrap
                        >
                          {user?.user?.kyc}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {user?.user?.membership}
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
                          {user?.amount}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <Toaster position="bottom-center" reverseOrder={false} />
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Card>
    </>
  );
};

export default UserTable;

import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme
} from '@mui/material';
import {
  GET_AGENCY_PAYMENT,
  TRANSACTION_TO_WALLET,
  GET_ALL_KYC_REFERRAL
} from '@/apollo/queries/auth';
import CustomTable from './customTable';

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
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useMutation, useQuery } from '@apollo/client';
import { useAppDispatch } from '@/hooks';
import { useSelector } from 'react-redux';
import { addToWalletBalance } from '@/state/slice/walletBalanceSlice';
import { initialDate, monthsData } from './agenyIncomeStartMonth';

const UserTable = () => {
  const dispatch = useAppDispatch();
  const agencyCode = useSelector(
    (state: any) => state.user?.agencyCode?.agencyCode
  );
  const [transactionToWalletMutation] = useMutation(TRANSACTION_TO_WALLET);
  const [isLoading, setLoading] = useState({});
  const [isDisable, setDisable] = useState({});
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const [active, setActive] = useState(false);
  const [currentSelectedButton, setCurrentSelectedButton] = useState('');

  const getAllKycTransaction = useQuery(GET_ALL_KYC_REFERRAL);
  const [selectedMonthYear, setSelectedMonthYear] = useState<string>(
    monthsData.months[monthsData.months.length - 1]
  ); // Set initial value to the latest month and year

  const [selectedYear, selectedMonth] = selectedMonthYear.split('-');
  const getAgencyPayment = useQuery(GET_AGENCY_PAYMENT, {
    variables: {
      agencyCode: agencyCode,
      month: parseInt(selectedMonth, 10),
      year: parseInt(selectedYear, 10)
    }
  });

  function getMonthName(dateString) {
    const myDate = new Date(dateString);
    const ans = myDate.toLocaleString('default', { month: 'long' });
    return ans;
  }

  // KyC Rewar Amount
  const kycRewardAmountPerKyc =
    getAgencyPayment?.data?.AgencyPayment?.kycRewardAmount || 200;

  //total amount of each agency
  const totalKycIncome = getAgencyPayment?.data?.AgencyPayment?.kycAmount;
  const totalAgraIncome =
    getAgencyPayment?.data?.AgencyPayment?.agraProjectAmount;
  const totalHajipurIncome =
    getAgencyPayment?.data?.AgencyPayment?.hajipurProjectAmount;
  const totalMonthIncome =
    totalKycIncome + totalAgraIncome + totalHajipurIncome;
  const totalSelfAgraIncome =
    getAgencyPayment?.data?.AgencyPayment?.selfAgencyAgraPaymentAmount;
  const totalSelfHajipurIncome =
    getAgencyPayment?.data?.AgencyPayment?.selfAgencyHajipurPaymentAmount;
  const totalHyderabadIncome =
    getAgencyPayment?.data?.AgencyPayment?.hyderabadProjectAmount;
  const totalSelfHyderabadIncome =
    getAgencyPayment?.data?.AgencyPayment?.selfAgencyHyderabadPaymentAmount;

  //kyc

  // const kycBasicIncome =
  //   getAgencyPayment?.data?.AgencyPayment?.BasicKycApprovedUser;
  // const kycAdvanceIncome =
  //   getAgencyPayment?.data?.AgencyPayment?.AdvanceKycApprovedUser;
  const kycIncomeData = getAgencyPayment?.data?.AgencyPayment?.KycApprovedUser;
  // kycBasicIncome?.map((user) => kycIncomeData.push(user));
  // kycAdvanceIncome?.map((user) => kycIncomeData.push(user));

  console.log('kycIncomeData', kycIncomeData);
  // Hajipur
  // const basicHajipurIncome =
  //   getAgencyPayment?.data?.AgencyPayment?.basicHajipurprojectDocument;
  // const advanceHajipurIncome =
  //   getAgencyPayment?.data?.AgencyPayment?.advanceHajipurprojectDocument;
  const hajipurIncomeData =
    getAgencyPayment?.data?.AgencyPayment?.HajipurprojectDocument;
  // basicHajipurIncome?.map((user) => hajipurIncomeData.push(user));
  // advanceHajipurIncome?.map((user) => hajipurIncomeData.push(user));

  //Agra
  // const basicAgraIncome =
  //   getAgencyPayment?.data?.AgencyPayment?.basicAgraprojectDocument;
  // const advanceAgraIncome =
  //   getAgencyPayment?.data?.AgencyPayment?.advanceAgraprojectDocument;
  const agraIncomeData =
    getAgencyPayment?.data?.AgencyPayment?.AgraprojectDocument;
  // basicAgraIncome?.map((user) => agraIncomeData.push(user));
  // advanceAgraIncome?.map((user) => agraIncomeData.push(user));

  // hyderabad
  const hyderabadIncomeData =
    getAgencyPayment?.data?.AgencyPayment?.HyderabadprojectDocument;
  // Self Hajipur
  const selfHajipurIncome =
    getAgencyPayment?.data?.AgencyPayment?.selfHajipurInvestmentDocument;
  const selfHajipurIncomeData = [];
  selfHajipurIncome?.map((user) => selfHajipurIncomeData.push(user));

  // Self Agra
  const selfAgraIncome =
    getAgencyPayment?.data?.AgencyPayment?.selfAgraInvestmentDocument;
  const selfAgraIncomeData = [];
  selfAgraIncome?.map((user) => selfAgraIncomeData.push(user));

  // Self Hyderabad
  const selfHyderabadIncome =
    getAgencyPayment?.data?.AgencyPayment?.selfAgraInvestmentDocument;
  const selfHyderabadIncomeData = [];
  selfHyderabadIncome?.map((user) => selfHyderabadIncomeData.push(user));

  const showButtonDate = new Date('2024-01-01'); //YYYY-MM-DD
  const hideButtonDate = new Date('2024-02-01'); //YYYY-MM-DD

  const getDate = showButtonDate.toISOString().slice(0, 7);

  const walletTransferShowButton = selectedMonthYear >= getDate;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentMonthYear = `${currentYear}-${
    currentMonth < 10 ? '0' : ''
  }${currentMonth}`;

  // const walletTransferKYCShowButton = selectedMonthYear < currentMonthYear;
  const walletTransferKYCShowButton =
    walletTransferShowButton && selectedMonthYear < currentMonthYear;

  const handleTransferToWallet = async (document, userId, paymentType) => {
    setLoading({ ...isLoading, [document.id]: true });
    setDisable({ ...isDisable, [document.id]: false });

    let category = '';

    if (paymentType === 'kyc') {
      category = 'DEPOSIT_KYC';
    }
    if (paymentType === 'project') {
      category = 'DEPOSIT_PROJECT';
    }

    const amountGenerate = currentSelectedButton.includes('kyc')
      ? kycRewardAmountPerKyc
      : currentSelectedButton.includes('hajipur')
      ? document?.amount * 0.01
      : currentSelectedButton.includes('agra')
      ? document?.amount * 0.1
      : currentSelectedButton.includes('hyderabad')
      ? document?.amount * 0.1
      : currentSelectedButton.includes('selfHajipur')
      ? document?.amount * 0.01
      : currentSelectedButton.includes('selfAgra')
      ? document?.amount * 0.1
      : currentSelectedButton.includes('selfHyderabad')
      ? document?.amount * 0.1
      : '';

    interface metaType {
      userId?: string;
      timeStamp?: string;
      documentId?: string;
    }
    const indianDateTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    });

    const metaData: metaType[] = [
      { userId: userId },
      { timeStamp: indianDateTime }
    ];

    if (paymentType === 'project') {
      metaData.push({ documentId: document.id });
    }

    if (
      amountGenerate !== 0 &&
      amountGenerate !== '' &&
      amountGenerate !== null
    ) {
      try {
        await transactionToWalletMutation({
          variables: {
            agencyCode: agencyCode,
            category,
            type: 'DEPOSIT',
            amount: amountGenerate,
            metaData: metaData
          }
        });
        toast.success(` ₹ ${amountGenerate} Transfer To your  Wallet`);
        dispatch(addToWalletBalance(amountGenerate));
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      setOpen(true);
    }
    setLoading({ ...isLoading, [document.id]: false });
    setDisable({ ...isDisable, [document.id]: true });
  };

  const handleClose = () => {
    setOpen(false);
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

          <Box minWidth={'160px'}>
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
                {monthsData.months.map((monthYear) => (
                  <MenuItem key={monthYear} value={monthYear}>
                    {/* {monthYear.split('-')[1] == new Date().getMonth() + 1
                      ? 'Current Month'
                      : new Date(monthYear).toLocaleString('default', {
                          month: 'long',
                          year: 'numeric'
                        })} */}
                    {new Date(monthYear).toLocaleString('default', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Button
            variant="outlined"
            sx={{ cursor: 'unset', padding: 1.5, minWidth: '160px' }}
          >
            Amount : ₹ {totalMonthIncome | 0}
          </Button>
        </Box>
        <Divider />
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
            <Typography textAlign={'center'} fontSize={18} fontWeight={600}>
              Check Income Details
            </Typography>
            <LoadingButton
              onClick={() => {
                setActive(true);
                setCurrentSelectedButton('kyc');
              }}
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                width: '220px'
              }}
            >
              KYC : ₹{totalKycIncome | 0}
            </LoadingButton>
            <LoadingButton
              onClick={() => {
                setActive(true);
                setCurrentSelectedButton('hajipur');
              }}
              variant="contained"
              sx={{ mt: 2, mb: 2, width: '220px' }}
            >
              HAJIPUR : ₹{totalHajipurIncome | 0}
            </LoadingButton>
            <LoadingButton
              onClick={() => {
                setActive(true);
                setCurrentSelectedButton('agra');
              }}
              variant="contained"
              sx={{ mt: 2, mb: 2, width: '220px' }}
            >
              AGRA : ₹{totalAgraIncome | 0}
            </LoadingButton>

            <LoadingButton
              onClick={() => {
                setActive(true);
                setCurrentSelectedButton('hyderabad');
              }}
              variant="contained"
              sx={{ mt: 2, mb: 2, width: '220px' }}
            >
              Hyderabad : ₹{totalHyderabadIncome | 0}
            </LoadingButton>

            <LoadingButton
              onClick={() => {
                setActive(true);
                setCurrentSelectedButton('selfHajipur');
              }}
              variant="contained"
              sx={{ mt: 2, mb: 2, width: '220px' }}
            >
              SELF HAJIPUR : ₹{totalSelfHajipurIncome | 0}
            </LoadingButton>

            <LoadingButton
              onClick={() => {
                setActive(true);
                setCurrentSelectedButton('selfAgra');
              }}
              variant="contained"
              sx={{ mt: 2, mb: 2, width: '220px' }}
            >
              SELF AGRA : ₹{totalSelfAgraIncome | 0}
            </LoadingButton>

            <LoadingButton
              onClick={() => {
                setActive(true);
                setCurrentSelectedButton('selfHyderabad');
              }}
              variant="contained"
              sx={{ mt: 2, mb: 2, width: '220px' }}
            >
              SELF HYDERABAD : ₹{totalSelfHyderabadIncome | 0}
            </LoadingButton>
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
              {currentSelectedButton.includes('kyc') && (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>S.No.</TableCell>
                      {walletTransferKYCShowButton && (
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
                    {kycIncomeData?.map((user, index) => {
                      return (
                        <TableRow
                          hover
                          key={user?.id}
                          sx={{ cursor: 'pointer' }}
                        >
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
                          {walletTransferKYCShowButton && (
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
                                disabled={
                                  isDisable[user.id] ||
                                  getAllKycTransaction.data.getAllKycReferral.find(
                                    (data) => data.userId === user.id
                                  )
                                }
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
                                toast.success(` ${user.pw_id} Copied`);
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
                                : `Carry Forward ${getMonthName(
                                    user?.createdAt
                                  )}`}
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
                              {kycRewardAmountPerKyc}
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
                <CustomTable
                  projectName="hajipur"
                  data={hajipurIncomeData}
                  // walletTransferShowButton={true}
                  walletTransferShowButton={walletTransferShowButton}
                  isLoading={isLoading}
                  isDisable={isDisable}
                  handleTransferToWallet={handleTransferToWallet}
                />
              )}

              {currentSelectedButton.includes('agra') && (
                <CustomTable
                  projectName="agra"
                  data={agraIncomeData}
                  walletTransferShowButton={walletTransferShowButton}
                  isLoading={isLoading}
                  isDisable={isDisable}
                  handleTransferToWallet={handleTransferToWallet}
                />
              )}
              {currentSelectedButton.includes('hyderabad') && (
                <CustomTable
                  projectName="hyderabad"
                  data={hyderabadIncomeData}
                  walletTransferShowButton={walletTransferShowButton}
                  isLoading={isLoading}
                  isDisable={isDisable}
                  handleTransferToWallet={handleTransferToWallet}
                />
              )}

              {currentSelectedButton.includes('selfHajipur') && (
                <CustomTable
                  projectName="selfHajipur"
                  data={selfHajipurIncomeData}
                  walletTransferShowButton={walletTransferShowButton}
                  isLoading={isLoading}
                  isDisable={isDisable}
                  handleTransferToWallet={handleTransferToWallet}
                />
              )}

              {currentSelectedButton.includes('selfAgra') && (
                <CustomTable
                  projectName="selfAgra"
                  data={selfAgraIncomeData}
                  walletTransferShowButton={walletTransferShowButton}
                  isLoading={isLoading}
                  isDisable={isDisable}
                  handleTransferToWallet={handleTransferToWallet}
                />
              )}

              {currentSelectedButton.includes('selfHyderabad') && (
                <CustomTable
                  projectName="selfHyderabad"
                  data={selfHyderabadIncomeData}
                  walletTransferShowButton={walletTransferShowButton}
                  isLoading={isLoading}
                  isDisable={isDisable}
                  handleTransferToWallet={handleTransferToWallet}
                />
              )}
            </TableContainer>
          )}
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Zero Amount Issue?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Kindly Contact to Kyc Person
              <br />
              <br />
              Regarding Mention Amount Of Project
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </>
  );
};

export default UserTable;

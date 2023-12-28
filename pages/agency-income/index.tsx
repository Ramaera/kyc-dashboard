// import { GetAllUser } from '@/apollo/queries/auth';
// import { GET_ALL_KYC_HANDLER } from '@/apollo/queries/updateUser';
import Footer from '@/components/Footer';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
  setAllKycHandlerList,
  setAllTheUsers
} from '@/state/slice/allUsersSlice';
import { useQuery } from '@apollo/client';
import {
  Box,
  Button,
  Card,
  Container,
  Tooltip,
  Typography,
  colors
} from '@mui/material';
import Head from 'next/head';
import { useDispatch } from 'react-redux';

import Loading from '@/components/Loading';
import PageHeader from '@/content/Dashboards/Kyc/PageHeader';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import UserTable from './components/UserTable';
import StarIcon from '@mui/icons-material/Star';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import WalletIcon from '@mui/icons-material/Wallet';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function DashboardTasks() {
  // const dispatch = useDispatch();
  // const foundUser = useSelector((state: any) => state.foundUser.foundUser);
  // const { loading, error, data } = useQuery(GetAllUser);
  // const kycHandlersList = useQuery(GET_ALL_KYC_HANDLER);

  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <h3>error</h3>;
  // }
  // if (data) {
  //   // console.log('all users', data.getAllUser);
  //   dispatch(setAllTheUsers(data.getAllUser));
  // }
  // if (kycHandlersList) {

  //   // console.log('kycHandlersList', kycHandlersList.data.getAllKycHandler);
  //   dispatch(setAllKycHandlerList(kycHandlersList.data.getAllKycHandler));
  // }

  return (
    <ProtectedSSRoute>
      <Head>
        <title>Agency Income</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
        <Box
          display="flex"
          alignItems={{ xs: 'stretch', md: 'center' }}
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Box
            fontSize={23}
            fontWeight={600}
            display={'flex'}
            alignItems={'center'}
            border={1}
            borderRadius={1}
            marginBottom={{ xs: 2, md: 'unset' }}
            sx={{ borderColor: '#7063C0' }}
          >
            <Box
              display={'flex'}
              sx={{
                background: '#7063C0',
                padding: 1,
                borderEndStartRadius: 6,
                borderTopLeftRadius: 6
              }}
            >
              <AccountBalanceWalletIcon />

              <Typography variant="h4">Wallet Amount</Typography>
              <Tooltip title="Onward from January 1, 2024" enterTouchDelay={0}>
                <Typography paddingX={1}>*</Typography>
              </Tooltip>
            </Box>
            <Typography
              variant="h4"
              sx={{
                padding: 1,
                color: '#7063C0'
              }}
            >
              ₹ {11110}
            </Typography>
          </Box>
          <Box
            fontSize={23}
            fontWeight={600}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Box display={'flex'}>
              <Typography variant="h4"> Withdrawal Amount</Typography>
              <Tooltip
                title="You can withdraw the amount on 15th or 30th date of the month."
                enterTouchDelay={0}
              >
                <Typography paddingX={1}>*</Typography>
              </Tooltip>
            </Box>
            <Button
              variant="contained"
              sx={{
                cursor: 'unset',
                padding: 1,
                margin: 1
              }}
            >
              <CurrencyRupeeIcon />
              Withdrawal
            </Button>
          </Box>
        </Box>
        {/* // todo place filters here */}
      </PageTitleWrapper>
      <Container maxWidth={false}>
        <UserTable />
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}

DashboardTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;

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
  colors,
  useTheme
} from '@mui/material';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '@/components/Loading';
import PageHeader from '@/content/Dashboards/Kyc/PageHeader';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import UserTable from './components/UserTable';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

// import WalletIcon from '@mui/icons-material/Wallet';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { GET_FINAL_WALLET_BALANCE_OF_AGENCY } from '@/apollo/queries/auth';
import {
  addToWalletBalance,
  setWalletBalance
} from '@/state/slice/walletBalanceSlice';
import { useAppDispatch } from '@/hooks';
import { useEffect } from 'react';
import React from 'react';
import Link from 'next/link';

function DashboardTasks() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const agencyCode = useSelector(
    (persistor: any) => persistor.user?.agencyCode
  );
  const walletFinalBalance = useSelector(
    (state: any) => state.walletBalance.walletBalance
  );
  // console.log('walletFinalBalance', walletFinalBalance);

  const { data } = useQuery(GET_FINAL_WALLET_BALANCE_OF_AGENCY, {
    variables: { agencyCode: agencyCode }
  });

  useEffect(() => {
    if (data && data?.GetFinalWalletBalanceOfAgency?.finalBalance) {
      {
        walletFinalBalance <
          data?.GetFinalWalletBalanceOfAgency?.finalBalance &&
          dispatch(
            setWalletBalance(data?.GetFinalWalletBalanceOfAgency?.finalBalance)
          );
      }
    }
  }, [data]);

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
                borderTopLeftRadius: 6,
                alignItems: 'center'
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
              ₹ {walletFinalBalance | 0}
            </Typography>
          </Box>
          <Box
            fontSize={23}
            fontWeight={600}
            display={'flex'}
            flexDirection={'column'}
            // alignItems={'center'}
          >
            <Link href="/wallet">
              <Button
                variant="contained"
                sx={{
                  cursor: 'unset',
                  fontSize: 24,
                  paddingY: 1,
                  paddingInline: 3,
                  [theme.breakpoints.down('sm')]: {
                    fontSize: 20
                  }
                }}
              >
                <CurrencyRupeeIcon />
                Wallet
              </Button>
            </Link>
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

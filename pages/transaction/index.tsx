import Footer from '@/components/Footer';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import SidebarLayout from '@/layouts/SidebarLayout';

import {
  Box,
  Button,
  Card,
  Container,
  useTheme,
  Tooltip,
  Typography,
  colors
} from '@mui/material';
import Head from 'next/head';
import PageHeader from '@/content/Dashboards/Kyc/PageHeader';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import UserTable from './components/UserTable';
import React from 'react';
import { useSelector } from 'react-redux';
import { GET_FINAL_WALLET_BALANCE_OF_AGENCY } from '@/apollo/queries/auth';
import { useQuery } from '@apollo/client';

function DashboardTasks() {
  const theme = useTheme();
  const agencyCode = useSelector(
    (persistor: any) => persistor.user?.agencyCode
  );

  const { data } = useQuery(GET_FINAL_WALLET_BALANCE_OF_AGENCY, {
    variables: { agencyCode: agencyCode }
  });
  const walletBalance = data?.GetFinalWalletBalanceOfAgency?.finalBalance;

  return (
    <ProtectedSSRoute>
      <Head>
        <title>Transaction</title>
      </Head>
      <PageTitleWrapper sx={{}}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '2%',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
              padding: '0px'
            }
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '600',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '14px'
                }
              }}
            >
              Withdraw Funds
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '600',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '14px'
                }
              }}
            >
              Wallet Amount : ₹ {walletBalance}
            </Typography>
          </div>
        </Box>
        <PageHeader />
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

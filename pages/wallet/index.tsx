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
import WalletFields from './components/walletFields';
import React from 'react';
import { useSelector } from 'react-redux';
import { GET_FINAL_WALLET_BALANCE_OF_AGENCY } from '@/apollo/queries/auth';
import { useQuery } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { color } from 'html2canvas/dist/types/css/types/color';

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
            alignItems: 'flex-start',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
              padding: '0px'
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              [theme.breakpoints.down('sm')]: {
                justifyContent: 'center'
              }
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '600',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '18px'
                }
              }}
            >
              Wallet Amount : ₹ {walletBalance}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'primary.main',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '10px'
                }
              }}
            >
              Withdrawals are only processed on the 15th and 30th of the month.
            </Typography>
          </Box>
        </Box>

        <Card>
          <Box></Box>
        </Card>

        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth={false}>
        <WalletFields />
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}

DashboardTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;

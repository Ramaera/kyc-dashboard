import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
  Box,
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  useTheme
} from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import PaymentTab from './Tabs/Payment';
import { useEffect } from 'react';
import { useAppSelector } from '@/hooks';
import variables from '@/config/variables';

function index() {
  const theme = useTheme();
  const user = useAppSelector((state) => state.user?.data);

  const router = useRouter();
  let title =
    router.query.index.charAt(0).toUpperCase() + router.query.index.slice(1);
  // useEffect(() => {
  //   if (user?.kyc !== variables.status.APPROVED) {
  //     router.replace('/dashboard');
  //   }
  // }, []);
  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Dashboard</title>
      </Head>

      <Container maxWidth={false} sx={{ mt: 2 }}>
        <Card variant="outlined">
          <CardHeader
            title={title}
            sx={{
              ml: 2,
              textTransform: 'uppercase'
            }}
          />
          <Divider sx={{ mb: 1 }} />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
          >
            <Grid item xs={12}>
              <Box
                px={4}
                py={2}
                sx={{
                  [theme.breakpoints.down('sm')]: {
                    padding: 1
                  }
                }}
              >
                <PaymentTab title={title} />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}
index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default index;

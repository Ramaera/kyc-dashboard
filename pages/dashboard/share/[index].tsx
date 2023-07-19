import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Box, Card, CardHeader, Container, Grid } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import PaymentTab from './Tabs/Payment';
import { useRouter } from 'next/router';

function index() {
  const router = useRouter();
  let title =
    router.query.index.charAt(0).toUpperCase() + router.query.index.slice(1);
  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Share</title>
      </Head>
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Card variant="outlined">
          <CardHeader
            title={title}
            sx={{
              ml: 2,
              textTransform: 'uppercase',
              textDecoration: 'underline'
            }}
          />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
          >
            <Grid item xs={12}>
              <Box m={4}>Allotted Share:</Box>
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

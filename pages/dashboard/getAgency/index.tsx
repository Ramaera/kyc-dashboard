import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Box, Card, CardHeader, Container, Divider, Grid } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import Agency from './Agency';
function index() {
  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Dashboard</title>
      </Head>

      <Container maxWidth={false} sx={{ mt: 2 }}>
        <Card variant="outlined">
          <CardHeader
            title={'GET AGENCY'}
            sx={{
              ml: 2,
              textTransform: 'uppercase'
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
              <Box px={4}>
                <Agency />
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

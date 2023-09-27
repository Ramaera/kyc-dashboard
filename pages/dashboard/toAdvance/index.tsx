import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Box, Card, CardHeader, Container, Grid } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import Advance from './Advance';
function index() {
  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Dashboard</title>
      </Head>

      <Container maxWidth={false} sx={{ mt: 2, pb: 2 }}>
        <Card variant="outlined" sx={{ pb: 2 }}>
          <CardHeader
            title={'UPGRADE TO ADVANCE'}
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
                <Advance />
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

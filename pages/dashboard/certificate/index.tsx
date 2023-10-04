import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Card, CardHeader, Container, Divider, Grid } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useSelector } from 'react-redux';
import Certificate from './components/Certificate';
function index() {
  const user = useSelector((state: any) => state.user?.data);

  /*   const beforeAugustFifteenthTwentyTwentyThree =
    202310815 > parseInt(user.createdAt.split('-').join(''));
 */
  const allCertificates = () => {
    let certificates: any = [];
    certificates.push(
      <Certificate
        id="r23423"
        receiptSerialNumber="000001"
        date="12/12/23"
        recievedFrom="Sudhanshu Kumar Dwivedi Ji"
        identityNumber="000001"
        amount="1000"
        amountPaidFor="project"
        paymentSource="upi"
        utrNumber="02394823904"
        receivedBy="RAMAERA INDUSTRIES LTD. (Account Dept.)"
        AgencyCode="934934"
      />
    );
    return certificates;
  };

  return (
    <ProtectedSSRoute>
      <Head>
        <title>Certificate</title>
      </Head>
      <Container maxWidth={false} sx={{ mt: 2 }}>
        <Card variant="outlined">
          <CardHeader
            title={'CERTIFICATE'}
            sx={{
              ml: 2,
              textTransform: 'uppercase'
            }}
          />
          <Divider sx={{ mb: 2 }} />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
          >
            <Grid item xs={12} paddingX={6}>
              {allCertificates()}
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

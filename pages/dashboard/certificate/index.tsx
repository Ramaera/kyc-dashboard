import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Card, CardHeader, Container, Divider, Grid } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useSelector } from 'react-redux';
import Certificate from './components/Certificate';
import documentsConfig from '@/config/documentsConfig';
function index() {
  const user = useSelector((state: any) => state.user?.data);

  /*   const beforeAugustFifteenthTwentyTwentyThree =
    202310815 > parseInt(user.createdAt.split('-').join(''));
 */

  const allCertificates = () => {
    let certificates: any = [];
    user.documents.map((doc) => {
      if (doc.amount) {
        certificates.push(
          <Certificate
            id={doc.id}
            receiptSerialNumber=""
            date={doc.createdAt.slice(0, 10)}
            recievedFrom={user?.name || ''}
            identityNumber={user.rm_id + '/' + user.pw_id}
            amount={doc.amount}
            amountPaidFor={
              doc.title === documentsConfig.payment_proof &&
              (doc.amount === 2000 || doc.amount === 1000)
                ? 'basic'
                : doc.title === documentsConfig.payment_proof &&
                  (doc.amount === 200000 || doc.amount === 100000)
                ? 'advance'
                : doc.title.includes('project') && 'project'
            }
            paymentSource="upi"
            utrNumber={doc.utrNo || ''}
            receivedBy="RAMAERA INDUSTRIES LTD. (Account Dept.)"
            AgencyCode=""
          />
        );
      }
    });

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

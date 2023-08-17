import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Box, Card, CardHeader, Container, Grid } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useSelector } from 'react-redux';
import Certificate from './components/Certificate';
import { useEffect, useState } from 'react';
function index() {
  const user = useSelector((state: any) => state.user.data);
  const [paymentDocs, setPaymentDocs] = useState([]);

  useEffect(() => {
    let docs: any = [];
    user.documents.map((doc: any) => {
      doc.title.includes('payment') &&
        doc.status === 'APPROVED' &&
        docs.push(doc);
    });
    setPaymentDocs(docs);
  }, [user]);

  const allCertificates = () => {
    return paymentDocs.map((doc: any, index) => (
      <Certificate
        id={'certificate_' + index}
        key={index}
        username={user?.name}
        membership={
          doc.title === 'payment_proof' && doc.amount === 1000
            ? 'BASIC'
            : doc.title.includes('to_advance') && doc.amount === 199000
            ? 'ADVANCE'
            : doc.title.includes('hajipur')
            ? 'Hajipur Project'
            : doc.title.includes('agra')
            ? 'Agra Project'
            : 'KYC'
        }
        description={'YOUR KYC HAS BEEN SUCCESSFULLY APPROVED'}
        digit={doc.amount}
      />
    ));
  };

  return (
    <ProtectedSSRoute>
      <Head>
        <title>Certificate</title>
      </Head>
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Card variant="outlined">
          <CardHeader
            title={'CERTIFICATE'}
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
              {paymentDocs.length === 0 ? (
                <Box>No Certificates to Show</Box>
              ) : (
                allCertificates()
              )}
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

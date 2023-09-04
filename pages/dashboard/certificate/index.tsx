import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Box, Card, CardHeader, Container, Divider, Grid } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useSelector } from 'react-redux';
import Certificate from './components/Certificate';
import { useEffect, useState } from 'react';
function index() {
  const user = useSelector((state: any) => state.user?.data);
  // const [paymentDocs, setPaymentDocs] = useState([]);
  const [paymentTotals, setPaymentTotals] = useState({
    kyc: 0,
    advanceKyc: 0,
    hajipur: 0,
    agra: 0
  });
  const [paymentDates, setPaymentDates] = useState({
    kyc: '',
    advanceKyc: '',
    hajipur: '',
    agra: ''
  });

  const beforeAugustFifteenthTwentyTwentyThree =
    202310815 > parseInt(user.createdAt.split('-').join(''));

  const certificateExtractor = () => {
    let docs: any = [];
    let payments = {
      kyc: 0,
      advanceKyc: 0,
      hajipur: 0,
      agra: 0
    };
    let paymentsDate = {
      kyc: '',
      advanceKyc: '',
      hajipur: '',
      agra: ''
    };
    let zeroKyc = false;
    user.documents.map((doc: any) => {
      doc.title.includes('payment') &&
        doc.status === 'APPROVED' &&
        docs.push(doc);
      if (
        doc.title === 'payment_proof' &&
        (doc.amount === 200000 || doc.amount === 100000) &&
        doc.status === 'APPROVED'
      ) {
        zeroKyc = true;
        payments = {
          ...payments,
          advanceKyc: (payments.advanceKyc += doc.amount)
        };
        paymentsDate = { ...paymentsDate, advanceKyc: doc.updatedAt };
      } else if (
        (doc.title.includes('advance') ||
          doc.title === 'payment_proof' ||
          doc.title.includes('additional_payment')) &&
        doc.amount &&
        doc.status === 'APPROVED'
      ) {
        payments = {
          ...payments,
          kyc: (payments.kyc += doc.amount),
          advanceKyc: (payments.advanceKyc += doc.amount)
        };
        paymentsDate = {
          ...paymentsDate,
          kyc: doc.updatedAt,
          advanceKyc: doc.updatedAt
        };
      }
      console.log(payments);
      if (
        doc.title.includes('hajipur') &&
        doc.amount &&
        doc.status === 'APPROVED'
      ) {
        payments = { ...payments, hajipur: (payments.hajipur += doc.amount) };
        paymentsDate = { ...paymentsDate, hajipur: doc.updatedAt };
      }
      if (
        doc.title.includes('agra') &&
        doc.amount &&
        doc.status === 'APPROVED'
      ) {
        payments = { ...payments, agra: (payments.agra += doc.amount) };
        paymentsDate = { ...paymentsDate, agra: doc.updatedAt };
      }
    });

    setPaymentTotals({ ...payments, kyc: zeroKyc ? 0 : payments.kyc });
    setPaymentDates({ ...paymentsDate, kyc: zeroKyc ? '' : paymentsDate.kyc });
    // setPaymentDocs(docs);
  };

  useEffect(() => {
    certificateExtractor();
  }, [user]);

  /* useEffect(() => {
    let docs: any = [];
    user?.documents.map((doc: any) => {
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
            ? 'ADVANCE (Profit Sharing Partner)'
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
  }; */

  const allCertificates = () => {
    let certificates: any = [];
    Object.keys(paymentTotals).forEach((key, index) => {
      console.log('paymentTotals[key]', paymentTotals[key]);
      if (paymentTotals[key]) {
        certificates.push(
          <Certificate
            key={index}
            id={'certificate_' + index}
            username={user?.name}
            digit={
              beforeAugustFifteenthTwentyTwentyThree && key === 'kyc'
                ? 1000
                : !beforeAugustFifteenthTwentyTwentyThree && key === 'kyc'
                ? 2000
                : beforeAugustFifteenthTwentyTwentyThree && key === 'advanceKyc'
                ? paymentTotals[key] - 1000
                : !beforeAugustFifteenthTwentyTwentyThree &&
                  key === 'advanceKyc'
                ? paymentTotals[key] - 2000
                : paymentTotals[key]
            }
            time={paymentDates[key]}
            membership={key}
            description={
              key === 'kyc' || key === 'advanceKyc'
                ? 'YOUR KYC HAS BEEN SUCCESSFULLY APPROVED'
                : 'YOUR PAYMENT HAS BEEN SUCCESSFULLY APPROVED'
            }
            userCreatedAt={user.createdAt}
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
      <Container maxWidth="lg" sx={{ mt: 2 }}>
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

import { AGREEMENT_DATA, GET_ALL_AGENCY_USERS } from '@/apollo/queries/auth';
import Footer from '@/components/Footer';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import SidebarLayout from '@/layouts/SidebarLayout';
import { setAllTheUsers } from '@/state/slice/allUsersSlice';
import { useQuery } from '@apollo/client';
import { Container, Typography } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '@/components/Loading';
import AgreementDetails from './components/AgreementDetails';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useAppSelector } from '@/hooks';
import PDFGenerator from './components/Pages/Test';

function Agreement() {
  const dispatch = useDispatch();
  const foundUser = useSelector((state: any) => state.foundUser.foundUser);
  const agencyCode = useSelector(
    (state: any) => state.user?.agencyCode?.agencyCode
  );
  const user = useAppSelector((state) => state.user?.data);
  const { loading, data, error } = useQuery(AGREEMENT_DATA, {
    variables: {
      PWID: user?.pw_id
    }
  });
  const [signData, setSignData] = useState(null);
  const signatureCanvasRef = useRef(null);
  const clearSignature = () => {
    signatureCanvasRef.current.clear();
  };

  const saveSignature = async () => {
    const signatureImage = signatureCanvasRef?.current?.toDataURL();
    setSignData(signatureImage);
  };

  if (loading) {
    return <div>Loading.........</div>;
  }
  if (error) {
    console.log('err', error);
  }

  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Users</title>
      </Head>
      <PageTitleWrapper>
        <Typography
          variant="h3"
          component="h3"
          sx={{ textTransform: 'uppercase', marginTop: 2, marginBottom: 2 }}
          gutterBottom
        >
          Ramaera 30% net profit partner mutual agreement consent
        </Typography>
      </PageTitleWrapper>

      <PDFGenerator
        data={data}
        signData={signData}
        // saveSignature={saveSignature}
        // clearSignature={clearSignature}
      />
      <Container maxWidth={false}>
        {data ? (
          <>
            <AgreementDetails data={data} />
          </>
        ) : (
          'Kindly Contact KYC Team ,Regarding Your Agreement'
        )}
      </Container>

      <Footer />
    </ProtectedSSRoute>
  );
}

Agreement.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Agreement;

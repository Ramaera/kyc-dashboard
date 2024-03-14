import { AGREEMENT_DATA, GET_ALL_AGENCY_USERS } from '@/apollo/queries/auth';
import Footer from '@/components/Footer';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import SidebarLayout from '@/layouts/SidebarLayout';
import { setAllTheUsers } from '@/state/slice/allUsersSlice';
import { useQuery } from '@apollo/client';
import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignatureCanvas from 'react-signature-canvas';
import Loading from '@/components/Loading';
import AgreementDetails from './AgreementDetails';
import { PDFDownloadLink, View, Text } from '@react-pdf/renderer';
import { useAppSelector } from '@/hooks';
import PDFGenerator from './Pages/Test';

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
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [place, setPlace] = useState('');

  const [signData, setSignData] = useState(null);
  const signatureCanvasRef = useRef(null);
  const clearSignature = () => {
    signatureCanvasRef.current.clear();
    setSignData('');
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

      <Container maxWidth={false}>
        {/* {data ? (
          <> */}
        <AgreementDetails data={data} signData={signData} place={place} />
        {/* </>
        ) : (
          'Kindly Contact KYC Team ,Regarding Your Agreement'
        )} */}
        <Box
          style={{
            display: 'flex',
            marginTop: 20,
            flexDirection: 'column',
            backgroundColor: 'lightGray',
            padding: 20,
            color: 'black'
          }}
        >
          <Box style={{ fontSize: 25 }}>
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              style={{ fontSize: 30, marginRight: 10 }}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />
            <label htmlFor="acceptTerms">
              I accept the terms and conditions
            </label>
          </Box>
          {acceptedTerms && (
            <View>
              <Text style={{ marginVertical: 20 }}>
                Subscriber’s Signature / सब्सक्राइबर के हस्ताक्षर :
              </Text>

              <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View>
                  <SignatureCanvas
                    penColor="black"
                    ref={signatureCanvasRef}
                    canvasProps={{
                      className: 'signCanvas',
                      // width: 500,
                      // height: 200,
                      style: {
                        border: '1px solid black',
                        backgroundColor: 'white'
                      }
                    }}
                  />
                </View>
              </View>
              <div style={{ display: 'flex', gap: 5 }}>
                <button onClick={() => clearSignature()}>
                  Clear Signature
                </button>
                <button onClick={() => saveSignature()}>Save Signature</button>
              </div>
              <View>
                <div style={{ marginTop: 10 }}>
                  Place:{' '}
                  <input
                    style={{ backgroundColor: 'white', color: 'black' }}
                    type="text"
                    placeholder="Type Place Here"
                    id="place"
                    name="place"
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </div>
              </View>
            </View>
          )}
        </Box>
      </Container>
      {acceptedTerms && signData && place && (
        <PDFGenerator
          PWID={user?.pw_id}
          data={data}
          place={place}
          signData={signData}
          saveSignature={saveSignature}
          clearSignature={clearSignature}
        />
      )}
      <Footer />
    </ProtectedSSRoute>
  );
}

Agreement.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Agreement;

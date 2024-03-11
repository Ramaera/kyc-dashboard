'use client';
import MainPage from './Pages/MainPage';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import OtherPage from './Pages/OtherPage';
import ReactDOM from 'react-dom';
import { useQuery } from '@apollo/client';
import { AGREEMENT_DATA } from '@/apollo/queries/auth';
import { useRef, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import AgreementPages from './AgreementPages';

const AgreementDetails = () => {
  const [signData, setSignData] = useState(null);
  const signatureCanvasRef = useRef(null);
  const clearSignature = () => {
    signatureCanvasRef.current.clear();
  };
  const saveSignature = async () => {
    const signatureImage = signatureCanvasRef.current.toDataURL();
    setSignData(signatureImage);
  };
  const { loading, data, error } = useQuery(AGREEMENT_DATA, {
    variables: {
      PWID: 'RIL-14'
    }
  });

  if (loading) {
    return <div>Loading .......</div>;
  }
  if (error) {
    console.log('err', error);
  }
  const generatePdf = async () => {
    return (
      <PDFDownloadLink document={<AgreementDetails />} fileName="example1.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
    );
  };

  return (
    <>
      <Document style={{ display: 'flex', flexDirection: 'column' }}>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <MainPage />
          </View>
        </Page>
        <OtherPage
          data={data}
          clearSignature={clearSignature}
          saveSignature={saveSignature}
          signatureCanvasRef={signatureCanvasRef}
          signData={signData}
        />
      </Document>
      <button onClick={generatePdf}>Generate PDF</button>
    </>
  );
};
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    color: 'black'
  },
  section: {
    margin: 10,
    paddingHorizontal: 10
  }
});
export default AgreementDetails;

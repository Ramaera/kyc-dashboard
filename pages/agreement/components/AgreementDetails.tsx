'use client';
import MainPage from './Pages/MainPage';
import ReactPDF, { PDFViewer } from '@react-pdf/renderer';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import OtherPage from './Pages/OtherPage';
import ReactDOM from 'react-dom';
import { useQuery } from '@apollo/client';
import { AGREEMENT_DATA } from '@/apollo/queries/auth';
import { useRef, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import AgreementPages from './AgreementPages';
import Test from './Pages/Test';

const AgreementDetails = ({ data }) => {
  return (
    <>
      <Document style={{}}>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <MainPage />
          </View>
        </Page>
        {/* <Test /> */}

        <OtherPage data={data} />
      </Document>
    </>
  );
};
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
    color: 'black'
  },
  section: {
    margin: 10,
    paddingHorizontal: 10
  }
});
export default AgreementDetails;

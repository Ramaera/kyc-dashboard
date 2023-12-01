import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer
} from '@react-pdf/renderer';
import { Certificate } from 'crypto';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <Certificate />
        </Page>
      </Document>
    </>
  );
};

export default MyDocument;

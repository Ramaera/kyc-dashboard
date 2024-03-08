import MainPage from './Pages/MainPage';
import OtherPage from './Pages/OtherPage';
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet
} from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';

const AgreementPages = () => {
  const generatePdf = () => {
    const input = document.getElementById('pdf-content');
    const inputHeight = input.offsetHeight;
    const inputWidth = input.offsetWidth;
    const pdf = new jsPDF('p', 'mm');
    const margin = 30; // Margin from top and bottom
    const pageSize = pdf.internal.pageSize;
    const pageWidth = pageSize.width;
    const pageHeight = 280;
    const scale = 2;

    html2canvas(input, {
      scale: scale,
      backgroundColor: 'red',

      scrollY: 0,
      windowWidth: document.body.scrollWidth,
      windowHeight: document.body.scrollHeight - 20,
      useCORS: true, // Enable CORS for external images
      allowTaint: true, // Allow rendering of images from other domains
      logging: true, // Enable logging for debugging
      width: inputWidth,
      height: inputHeight
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210;
      const pageHeight = 295;

      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('download1.pdf');
    });
  };

  const contentRef = useRef(null);
  return (
    <>
      <div
        ref={contentRef}
        id="pdf-content"
        style={{
          width: '80%',
          padding: 40,
          backgroundColor: 'white'
        }}
      >
        <MainPage />
        <OtherPage />
      </div>

      <button onClick={generatePdf}>Generate PDF</button>
    </>
  );
};

export default AgreementPages;

// import MainPage from './Pages/MainPage';
// import OtherPage from './Pages/OtherPage';
// import {
//   PDFDownloadLink,
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet
// } from '@react-pdf/renderer';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { useRef } from 'react';
// import { saveAs } from 'file-saver';
// import { PDFViewer } from '@react-pdf/renderer';
// import ReactDOM from 'react-dom';

const AgreementPages = () => {
  //   const generatePdf = async () => {
  //     // const input = document.getElementById('pdf-content');
  //     // const inputHeight = input.offsetHeight;
  //     // const inputWidth = input.offsetWidth;
  //     // const pdf = new jsPDF('p', 'mm');
  //     // const margin = 30; // Margin from top and bottom
  //     // const pageSize = pdf.internal.pageSize;
  //     // const pageWidth = pageSize.width;
  //     // const pageHeight = 280;
  //     // const scale = 2;
  //     // html2canvas(input, {
  //     //   scale: scale,
  //     //   scrollY: 0,
  //     //   windowWidth: document.body.scrollWidth + 5,
  //     //   windowHeight: document.body.scrollHeight,
  //     //   useCORS: true, // Enable CORS for external images
  //     //   allowTaint: true, // Allow rendering of images from other domains
  //     //   logging: true, // Enable logging for debugging
  //     //   width: inputWidth,
  //     //   height: inputHeight
  //     // }).then((canvas) => {
  //     //   const imgData = canvas.toDataURL('image/png');
  //     //   const imgWidth = 210;
  //     //   const pageHeight = 295;
  //     //   const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     //   var heightLeft = imgHeight;
  //     //   let position = 0;
  //     //   pdf.addImage(imgData, 'JPEG', 0, position + 20, imgWidth, imgHeight);
  //     //   heightLeft -= pageHeight;
  //     //   while (heightLeft >= 0) {
  //     //     position = heightLeft - imgHeight;
  //     //     pdf.addPage();
  //     //     pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
  //     //     heightLeft -= pageHeight;
  //     //   }
  //     //   pdf.save('download1.pdf');
  //     // });

  //     const pdfBlob = await generatePDFBlob();
  //     saveAs(pdfBlob, 'document.pdf');
  //   };

  //   const generatePDFBlob = async () => {
  //     // Create a hidden div to render the PDF
  //     const div = document.createElement('div');
  //     document.body.appendChild(div);

  //     // Render PDF component within the div
  //     ReactDOM.render(
  //       <PDFViewer width="800" height="600">
  //         <AgreementPages />
  //       </PDFViewer>,
  //       div
  //     );

  //     // Wait for rendering
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     // Convert the rendered PDF to blob
  //     const pdfBlob = await new Promise((resolve) => {
  //       const canvas = div.querySelector('canvas');
  //       canvas.toBlob((blob) => {
  //         resolve(blob);
  //       });
  //     });

  //     // Clean up
  //     document.body.removeChild(div);

  //     return pdfBlob;
  //   };

  //   const contentRef = useRef(null);
  return (
    <>
      {/* //       <PDFViewer>
//         {/* <div
//           ref={contentRef}
//           id="pdf-content"
//           style={{
//             width: '80%',
//             padding: 40,
//             backgroundColor: 'white'
//           }}
//         > */}
      {/* //         <Document */}
      {/* //           style={{ */}
      // width: '80%', // padding: 40, // backgroundColor: 'white'
      {/* //           }} */}
      {/* //         > */}
      {/* //           <MainPage /> */}
      // {/* <OtherPage /> */}
      {/* //         </Document> */}
      // {/* </div> */}
      {/* //       </PDFViewer> */} */
      {/* //       <button onClick={generatePdf}>Generate PDF</button> */}
    </>
  );
};

export default AgreementPages;

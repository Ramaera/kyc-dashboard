import amountToWords from '../utils/amountToWords';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';
const Certificate = ({ username, membership, digit, description, id }: any) => {
  const generatePDF = async () => {
    toast.success('Downloading');
    const pdf = new JsPDF('landscape', 'pt', 'a4');
    const data = await html2canvas(document.querySelector('#' + id));
    const img = data.toDataURL('image/png');
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('certificate.pdf');
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div
        id={id}
        style={{
          fontSize: '16px',
          height: 768,
          color: '#000',
          width: 1080,
          fontWeight: 400
        }}
      >
        <div
          style={{
            backgroundImage: 'url("/certificateAssets/bg.png")',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            padding: '6rem 8rem'
          }}
        >
          <p
            style={{
              fontSize: '64px',
              color: '#FFA502',
              textAlign: 'center',
              margin: 0
            }}
          >
            RAMAERA INDUSTRIES LTD
          </p>
          <p style={{ fontSize: '1.4rem', textTransform: 'capitalize' }}>
            Received From <span style={{ fontWeight: 600 }}>{username}</span>
          </p>

          <p style={{ fontSize: '1.6rem' }}>
            We have Received the sum of rupees{' '}
            <span style={{ color: 'red' }}>
              {digit} ({amountToWords(digit)} ONLY )
            </span>
            ,
          </p>
          <p style={{ fontSize: '1.6rem' }}>
            {membership === 'BASIC' || membership === 'ADVANCE'
              ? ', For Your '
              : ', For '}
            <span style={{ color: '#1FAE47' }}>{membership}</span>
            {(membership === 'BASIC' || membership === 'ADVANCE') && ' KYC'}
          </p>
          <p
            style={{
              // width: '780px',
              color: 'white',
              fontSize: '1.8rem',
              backgroundColor: 'green',
              textAlign: 'center',
              border: 'solid 2px black',
              margin: 0
            }}
          >
            {description}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'right',
              flexDirection: 'column',
              margin: ' 0 0 0 600px'
            }}
          >
            <img
              style={{
                width: '200px',
                transform: 'scale(80%)'
              }}
              src="/certificateAssets/stamp1.png"
              alt=""
            />
            <span
              style={{
                width: '200px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '0.8rem'
              }}
            >
              Authorized Stamp
            </span>
          </div>
        </div>
      </div>
      <Button sx={{ mb: 2 }} variant="outlined" onClick={generatePDF}>
        Print
      </Button>
    </>
  );
};

export default Certificate;

import amountToWords from '../utils/amountToWords';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Box, Button, useTheme } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';
const Certificate = ({
  id,
  receiptSerialNumber,
  date,
  recievedFrom,
  identityNumber,
  amount,
  amountPaidFor,
  paymentSource,
  utrNumber,
  receivedBy,
  AgencyCode
}: any) => {
  const theme = useTheme();
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
      <Box
        id={id}
        sx={{
          scale: '0.9',
          transformOrigin: 'left',
          padding: '20px',
          backgroundColor: 'white',
          width: '1180px',
          borderRadius: '20px',
          [theme.breakpoints.down('sm')]: {
            transformOrigin: 'left top',
            scale: '0.25',
            height: '800px'
          }
        }}
      >
        <div
          style={{
            border: '2px solid #301100',
            borderRadius: '20px',
            overflow: 'clip',
            fontWeight: '450'
          }}
        >
          <div
            style={{
              color: 'white',
              backgroundColor: '#301100',
              height: '100px',
              marginLeft: '0px',
              display: 'flex'
            }}
          >
            <img
              style={{ width: '130px', height: '130px' }}
              src="/images/logo.png"
              alt=""
            />
            <div>
              <div style={{ height: '20px' }}>
                <p
                  style={{
                    fontSize: '40px',
                    marginTop: '30px',
                    fontFamily: 'dash'
                  }}
                >
                  RAMAERA INDUSTRIES LTD
                </p>
              </div>
              <div style={{ marginTop: '5px' }}>
                <p style={{ fontSize: '20px' }}>
                  CIN No. U74110UP2022PLC168553
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              color: 'white',
              marginTop: '0px',
              backgroundColor: '#301100',
              display: 'flex',
              marginLeft: '0px',
              height: '118px'
            }}
          >
            <div
              style={{
                width: '400px',
                border: '1px solid white',
                height: '50px',
                marginTop: '55px',
                marginLeft: '270px',
                display: 'flex'
              }}
            >
              <p
                style={{
                  fontSize: '38px',
                  marginLeft: '42px',
                  padding: '0px',
                  marginTop: '0px'
                }}
              >
                PAYMENT RECEIPT
              </p>
            </div>
            <div
              style={{
                width: '300px',
                justifyContent: 'flex-start',
                marginLeft: '100px',
                marginTop: '0px'
              }}
            >
              <div>
                <p
                  style={{
                    borderBottom: '2px solid white',
                    fontSize: '20px'
                  }}
                >
                  Receipt Sr. No. : {receiptSerialNumber}
                </p>
              </div>
              <div>
                <p
                  style={{
                    borderBottom: '2px solid white',
                    fontSize: '20px'
                  }}
                >
                  Date : {date}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '1105px',
              height: '540px',
              backgroundColor: 'white',
              marginLeft: '0px'
            }}
          >
            <div
              style={{
                borderBottom: '2px solid black',
                display: 'flex',
                justifyContent: 'space-between',
                color: 'black',
                marginLeft: '40px',
                height: '45px'
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  marginLeft: '0px',
                  marginTop: '20px'
                }}
              >
                Received From :{' '}
                <span style={{ fontWeight: 'bold' }}>{recievedFrom}</span>
              </p>
              <p style={{ fontSize: '18px' }}>
                RM/PW Number :{' '}
                <span style={{ fontWeight: 'bold' }}>{identityNumber}</span>
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                borderBottom: '2px solid black',
                marginLeft: '40px'
              }}
            >
              <div
                style={{
                  fontSize: '18px',
                  color: 'black',
                  marginLeft: '0px',
                  display: 'flex'
                }}
              >
                Amount
              </div>
              <div
                style={{
                  width: '200px',
                  height: '100px',
                  marginLeft: '749px'
                }}
              >
                <div
                  style={{
                    width: '200px',
                    height: '70px',
                    border: '2px solid black',
                    marginLeft: '43px',
                    borderBottom: '0px',
                    marginTop: '30px',
                    paddingTop: '20px',
                    color: 'black',
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 'bold'
                  }}
                >
                  {amount && 'Rs.' + amount + '/-'}
                </div>
              </div>
            </div>

            <div
              style={{
                fontSize: '18px',
                color: 'black',
                marginTop: '20px',
                display: 'flex',
                marginLeft: '40px',
                borderBottom: '2px solid black'
              }}
            >
              <div style={{ display: 'flex' }}>
                {' '}
                Amount Paid For : Basic Subscription{' '}
                <div
                  style={{
                    width: '13px',
                    height: '13px',
                    border: '1px solid black',
                    marginTop: '7px',
                    marginLeft: '5px'
                  }}
                >
                  {' '}
                </div>
              </div>
              <div style={{ marginLeft: '80px', display: 'flex' }}>
                {' '}
                Profit sharing partner
                <div
                  style={{
                    width: '32px',
                    marginTop: '0px',
                    marginLeft: '5px',
                    height: '20px',
                    border: '1px solid black',
                    textAlign: 'center',
                    paddingBottom: '25px'
                  }}
                >
                  ✓
                </div>
              </div>
              <div style={{ marginLeft: '80px', display: 'flex' }}>
                Industrial Project
                <div
                  style={{
                    width: '13px',
                    marginTop: '7px',
                    marginLeft: '5px',
                    height: '13px',
                    border: '1px solid black'
                  }}
                ></div>{' '}
              </div>
            </div>

            <div style={{ display: 'flex' }}>
              <div
                style={{
                  fontSize: '17px',
                  color: 'black',
                  marginTop: '20px',
                  marginLeft: '40px',
                  borderBottom: '2px solid black',
                  width: '853px'
                }}
              >
                <div
                  style={{ display: 'flex', borderBottom: '2px solid black' }}
                >
                  <div style={{ marginLeft: '0px', display: 'flex' }}>
                    Payment Source: Cheque
                    <div
                      style={{
                        width: '13px',
                        marginTop: '7px',
                        marginLeft: '5px',
                        height: '13px',
                        border: '1px solid black'
                      }}
                    ></div>
                  </div>
                  <div style={{ marginLeft: '50px', display: 'flex' }}>
                    UPI
                    <div
                      style={{
                        width: '13px',
                        marginTop: '7px',
                        marginLeft: '5px',
                        height: '13px',
                        border: '1px solid black'
                      }}
                    ></div>
                  </div>
                  <div style={{ marginLeft: '60px', display: 'flex' }}>
                    Cash Deposit
                    <div
                      style={{
                        width: '13px',
                        marginTop: '7px',
                        marginLeft: '5px',
                        height: '13px',
                        border: '1px solid black'
                      }}
                    ></div>
                  </div>
                  <div style={{ marginLeft: '60px', display: 'flex' }}>
                    Bank Transfer
                    <div
                      style={{
                        width: '13px',
                        marginTop: '7px',
                        marginLeft: '5px',
                        height: '13px',
                        border: '1px solid black'
                      }}
                    ></div>
                  </div>
                  <div style={{ marginLeft: '60px', display: 'flex' }}>
                    Other
                    <div
                      style={{
                        width: '13px',
                        marginTop: '7px',
                        marginLeft: '5px',
                        height: '13px',
                        border: '1px solid black'
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '18px',
                    color: 'black',
                    marginTop: '20px',
                    display: 'flex',
                    borderBottom: '2px solid black'
                  }}
                >
                  UTR NO. / Transaction No.
                </div>
                <div
                  style={{
                    height: '45px',
                    fontSize: '20px',
                    color: 'black',
                    marginTop: '6px',
                    display: 'flex',
                    alignItems: 'baseline'
                  }}
                >
                  <p style={{ marginTop: '30px' }}>
                    {' '}
                    Received By{' '}
                    <strong style={{ marginLeft: '150px' }}>
                      RAMAERA INDUSTRIES LTD. (Account Dept.)
                    </strong>
                  </p>
                </div>
              </div>

              <div
                style={{
                  height: '159px',
                  width: '210px',
                  border: '2px solid black',
                  borderTop: '0px',
                  color: 'black',
                  textAlign: 'center',
                  marginLeft: '0px'
                }}
              >
                {' '}
                <p style={{ fontSize: '18px', marginTop: '130px' }}>
                  Sign & Stamp
                </p>
              </div>
            </div>

            <div
              style={{
                fontSize: '18px',
                color: 'black',
                marginTop: '20px',
                display: 'flex',
                marginLeft: '40px',
                borderBottom: '2px solid black'
              }}
            >
              Agency Code
            </div>

            <div
              style={{
                backgroundColor: '#301100',
                width: '980px',
                height: '100px',
                clipPath:
                  'polygon(5% 0, 95% 0, 100% 20%, 100% 80%, 95% 100%, 5% 100%, 0% 80%, 0% 20%)',
                fontSize: '30px',
                marginLeft: '60px',
                marginTop: '20px',
                borderLeft: '10px solid white',
                textAlign: 'center'
              }}
            >
              Address: H150, Ground Floor, Sector 63, Noida, Uttar Pradesh
              201301 GST No. 09AAMCR0782R1ZF
            </div>
          </div>
        </div>
      </Box>

      <Button sx={{ mb: 2 }} variant="outlined" onClick={generatePDF}>
        Print
      </Button>
    </>
  );
};

export default Certificate;

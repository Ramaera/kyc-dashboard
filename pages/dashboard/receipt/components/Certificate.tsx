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
  project_name,
  receivedBy,
  AgencyCode
}: any) => {
  const theme = useTheme();

  const generatePDF = async () => {
    const toastId = toast.loading('Downloading');
    const pdf = new JsPDF('landscape', 'pt', 'a4');

    const data = await html2canvas(document.querySelector('.toPrintDetails'));
    const img = data?.toDataURL('image/png');
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
    toast.dismiss(toastId);
    toast.success('Downloaded');
    pdf.save('certificate.pdf');
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Box
        sx={{
          paddingLeft: '0px',
          overflowX: 'scroll',
          [theme.breakpoints.down('sm')]: {
            width: '800px'
          }
        }}
      >
        <Box
          className="toPrintDetails"
          sx={{
            scale: '1',
            transformOrigin: 'left',
            padding: '20px',

            backgroundColor: 'white',
            borderRadius: '20px',
            width: '1180px',
            [theme.breakpoints.down('sm')]: {
              transform: 'scale(50%)',
              marginY: '-20%'
            }
          }}
        >
          <div
            id={id}
            style={{
              border: '2px solid #301100',
              borderRadius: '20px',
              overflow: 'clip',
              fontWeight: '450',
              paddingBottom: '20px'
            }}
          >
            <div
              style={{
                color: 'white',
                backgroundColor: '#301100',
                padding: '10px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div>
                    <img
                      style={{ width: '130px', height: '130px' }}
                      src="/images/logo.png"
                      alt=""
                    />
                  </div>
                  <div style={{}}>
                    <p
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: '40px',
                        fontFamily: 'dash',
                        lineHeight: '1.5rem'
                      }}
                    >
                      RAMAERA INDUSTRIES LTD
                    </p>
                    <p
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: '20px',
                        fontFamily: 'dash'
                      }}
                    >
                      CIN No. U74110UP2022PLC168553
                    </p>
                  </div>
                </div>
                <div style={{ marginRight: '20px' }}>
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
                  fontSize: '20px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <p
                  style={{
                    padding: '10px',
                    border: '1px solid white',
                    fontSize: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '0px',
                    marginTop: '0px'
                  }}
                >
                  PAYMENT RECEIPT
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                paddingInline: '25px'
              }}
            >
              <div
                style={{
                  borderBottom: '2px solid black',
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'black',
                  paddingTop: '10px'
                }}
              >
                <p
                  style={{
                    fontSize: '18px',
                    marginBottom: '0px',
                    marginTop: '0px'
                  }}
                >
                  Received From :
                  <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
                    {recievedFrom}
                  </span>
                </p>
                <p
                  style={{
                    fontSize: '18px',
                    marginBottom: '0px',
                    marginTop: '0px'
                  }}
                >
                  RM/PW Number:
                  <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
                    {identityNumber}
                  </span>
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  borderBottom: '2px solid black',
                  justifyContent: 'space-between'
                }}
              >
                <div
                  style={{
                    fontSize: '18px',
                    color: 'black',
                    display: 'flex'
                  }}
                >
                  Amount
                </div>
                <div style={{}}>
                  <div
                    style={{
                      color: 'black',
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}
                  >
                    {amountToWords(amount)} Only /-
                  </div>
                </div>

                <div
                  style={{
                    width: '200px',
                    height: '50px',
                    border: '2px solid black',
                    borderBottom: '0px',
                    borderTop: '0px',
                    paddingTop: '20px',
                    color: 'black',
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 'bold'
                  }}
                >
                  {amount && '₹' + amount + '/-'}
                </div>
              </div>

              <div
                style={{
                  fontSize: '18px',
                  color: 'black',
                  display: 'flex',
                  borderBottom: '2px solid black',
                  paddingTop: '10px',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex' }}>
                  Amount Paid For : Basic Subscription
                  <div
                    style={{
                      width: '32px',
                      marginLeft: '5px',
                      border: '1px solid black',
                      textAlign: 'center',
                      fontWeight: 'bold'
                    }}
                  >
                    {amountPaidFor === 'basic' ? '✓' : ''}
                  </div>
                </div>
                <div style={{ display: 'flex' }}>
                  {' '}
                  Profit sharing partner
                  <div
                    style={{
                      width: '32px',
                      marginLeft: '5px',
                      border: '1px solid black',
                      textAlign: 'center',
                      fontWeight: 'bold'
                    }}
                  >
                    {amountPaidFor === 'advance' ? '✓' : ''}
                  </div>
                </div>
                <div style={{ display: 'flex' }}>
                  {project_name}
                  <div
                    style={{
                      width: '32px',
                      marginLeft: '5px',
                      border: '1px solid black',
                      textAlign: 'center',
                      fontWeight: 'bold'
                    }}
                  >
                    {amountPaidFor === 'project' ? '✓' : ''}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div
                  style={{
                    fontSize: '17px',
                    color: 'black',
                    borderBottom: '2px solid black',
                    width: '100%'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      borderBottom: '2px solid black',
                      paddingTop: '10px',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex' }}>
                      Payment Source: Cheque
                      <div
                        style={{
                          width: '32px',
                          height: '30px',
                          border: '1px solid black',
                          textAlign: 'center',
                          marginLeft: '5px',
                          fontWeight: 'bold'
                        }}
                      >
                        {paymentSource === 'cheque' ? '✓' : ''}
                      </div>
                    </div>
                    <div style={{ marginLeft: '20px', display: 'flex' }}>
                      UPI
                      <div
                        style={{
                          width: '32px',
                          height: '30px',
                          border: '1px solid black',
                          textAlign: 'center',
                          marginLeft: '5px',
                          fontWeight: 'bold'
                        }}
                      >
                        {paymentSource === 'upi' ? '✓' : ''}
                      </div>
                    </div>
                    <div style={{ marginLeft: '20px', display: 'flex' }}>
                      Cash Deposit
                      <div
                        style={{
                          width: '32px',
                          height: '30px',
                          border: '1px solid black',
                          textAlign: 'center',
                          marginLeft: '5px',
                          fontWeight: 'bold'
                        }}
                      >
                        {paymentSource === 'deposit' ? '✓' : ''}
                      </div>
                    </div>
                    <div style={{ marginLeft: '20px', display: 'flex' }}>
                      Bank Transfer
                      <div
                        style={{
                          width: '32px',
                          height: '30px',
                          border: '1px solid black',
                          textAlign: 'center',
                          marginLeft: '5px',
                          fontWeight: 'bold'
                        }}
                      >
                        {paymentSource === 'bank' ? '✓' : ''}
                      </div>
                    </div>
                    <div style={{ marginLeft: '20px', display: 'flex' }}>
                      Other
                      <div
                        style={{
                          width: '32px',
                          height: '30px',
                          border: '1px solid black',
                          textAlign: 'center',
                          marginLeft: '5px',
                          fontWeight: 'bold'
                        }}
                      >
                        {paymentSource === 'other' ? '✓' : ''}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: '18px',
                      color: 'black',
                      marginTop: '10px',
                      display: 'flex',
                      borderBottom: '2px solid black'
                    }}
                  >
                    UTR NO. / Transaction No <span>{' . : ' + utrNumber}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '20px',
                      color: 'black',
                      display: 'flex',
                      alignItems: 'baseline'
                    }}
                  >
                    <p style={{ marginTop: '0px', marginBottom: '0px' }}>
                      Received By:
                      <strong style={{ marginLeft: '150px' }}>
                        {receivedBy}
                      </strong>
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    height: '120px',
                    width: '20%',
                    border: '2px solid black',
                    borderTop: '0px',
                    color: 'black',
                    textAlign: 'center',
                    marginLeft: '0px'
                  }}
                >
                  {' '}
                  <p style={{ fontSize: '18px', marginTop: '90px' }}>
                    Sign & Stamp
                  </p>
                </div>
              </div>

              <div
                style={{
                  fontSize: '18px',
                  color: 'black',
                  padding: '5px',
                  display: 'flex',
                  borderBottom: '2px solid black'
                }}
              >
                Agency Code{' '}
                <span style={{ fontWeight: 'bold' }}>{' : ' + AgencyCode}</span>
              </div>

              <div
                style={{
                  backgroundColor: '#301100',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '70%',
                  marginInline: 'auto',
                  alignItems: 'center',
                  height: '100px',
                  clipPath:
                    'polygon(2.5% 0, 97.5% 0, 100% 20%, 100% 80%, 97.5% 100%, 2.5% 100%, 0% 80%, 0% 20%)',
                  fontSize: '30px',
                  marginTop: '20px',
                  textAlign: 'center'
                }}
              >
                <p>
                  Address: H150, Ground Floor, Sector 63, Noida, Uttar Pradesh
                  201301 GST No. 09AAMCR0782R1ZF
                </p>
              </div>
            </div>
          </div>
        </Box>
        <Button
          sx={{
            mt: 1,
            mb: 2,
            [theme.breakpoints.down('sm')]: {}
          }}
          variant="outlined"
          onClick={generatePDF}
        >
          Download
        </Button>
      </Box>
    </>
  );
};

export default Certificate;

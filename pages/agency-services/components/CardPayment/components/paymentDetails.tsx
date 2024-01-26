import { useState } from 'react';
import { useAppSelector } from '@/hooks';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TableHead
} from '@mui/material';
import variables from '@/config/variables';
import { useSelector } from 'react-redux';

const rows = [
  {
    name: 'Company Name',
    value: 'RAMAERA LEGAL INFOTECH PVT LTD.'
  },

  {
    name: 'Bank Name',
    value: 'HDFC BANK'
  },

  {
    name: 'Branch',
    value: 'NOIDA SECTOR 18'
  },

  {
    name: 'A/C No.',
    value: '50200073634812'
  },

  {
    name: 'IFSC CODE ',
    value: 'HDFC0000088'
  }
];
const PaymentInfo = ({ docStatus }) => {
  const [isBankDetails, setBankDetails] = useState(true);
  const [isUPIDetails, setUPIDetails] = useState(false);
  const [bankButtonClicked, setBankButtonClicked] = useState(true);
  const [upiButtonClicked, setUpiButtonClicked] = useState(false);

  const showBankDetails = () => {
    setBankDetails(true);
    setUPIDetails(false);
    setBankButtonClicked(true);
    setUpiButtonClicked(false);
  };

  const showUPIDetails = () => {
    setBankDetails(false);
    setUPIDetails(true);
    setBankButtonClicked(false);
    setUpiButtonClicked(true);
  };
  return (
    <>
      <div
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 10
        }}
      >
        <Button
          style={{ marginRight: 20, justifyContent: 'center' }}
          variant={bankButtonClicked ? 'contained' : 'outlined'}
          onClick={() => {
            showBankDetails();
          }}
        >
          Bank Details
        </Button>
        <Button
          style={{ justifyContent: 'center' }}
          variant={upiButtonClicked ? 'contained' : 'outlined'}
          onClick={() => {
            showUPIDetails();
          }}
        >
          UPI
        </Button>
      </div>
      {isBankDetails && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {isUPIDetails && (
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 100, justifyContent: 'center' }}
            aria-label="simple table"
          >
            <TableBody
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <img
                style={{
                  width: '250px',
                  borderRadius: '20px',
                  padding: 10
                }}
                src="/images/upi_legal.png"
              />
              <Typography fontSize={20} variant="body1" sx={{ m: 1 }}>
                OR
              </Typography>
              <Typography variant="h4" sx={{ m: 2 }}>
                <a href="upi://pay?pa=ramaeralegal.noida@hdfcbank&amp;pn=Ramaera  K&amp;cu=INR">
                  UPI ID : ramaeralegal.noida@hdfcbank
                </a>
              </Typography>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default PaymentInfo;

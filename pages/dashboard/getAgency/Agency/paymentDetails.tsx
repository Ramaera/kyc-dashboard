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
  Typography
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
  const user = useAppSelector((state) => state.user?.data);
  const [isBankDetails, setBankDetails] = useState(false);
  const [isUPIDetails, setUPIDetails] = useState(false);

  const agencyCode = useSelector(
    (state: any) => state.user?.agencyCode?.agencyCode
  );

  const showBankDetails = () => {
    setBankDetails(true);
    setUPIDetails(false);
  };
  const showUPIDetails = () => {
    setBankDetails(false);
    setUPIDetails(true);
  };
  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        {agencyCode
          ? 'Upgrade your Agency license  '
          : 'Kindly Deposit ₹ 10000/-  For 1 year License Or  ₹ 30000/- For 5 year Licesnse Validity   and upload the payment slip as a proof!'}
      </Typography>

      <div
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 10
        }}
      >
        <Button
          style={{ marginRight: 20 }}
          variant="contained"
          onClick={() => {
            showBankDetails();
          }}
        >
          Bank Details
        </Button>
        <Button
          variant="contained"
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
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableBody>
              <img
                style={{
                  width: '250px',
                  borderRadius: '20px',
                  padding: '10px'
                }}
                src="/images/upi_legal.png"
              />
              <Typography variant="body1" sx={{ my: 2, pl: 2 }}>
                OR
              </Typography>
              <Typography variant="h4" sx={{ my: 2, pl: 2 }}>
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

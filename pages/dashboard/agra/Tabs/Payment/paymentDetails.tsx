// import { useAppSelector } from '@/hooks';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';

const rows = [
  {
    name: 'Company Name',
    value: 'RAMAERA INDUSTRIES LTD.'
  },

  {
    name: 'Bank Name',
    value: 'HDFC BANK '
  },

  {
    name: 'Branch',
    value: 'NOIDA SECTOR 18'
  },

  {
    name: 'A/C No.',
    value: '50200069506090'
  },

  {
    name: 'IFSC CODE ',
    value: 'HDFC0000088'
  }
];

const rowSecond = [
  {
    name: 'Your Enrollment Amount is ',
    value: '0'
  },

  {
    name: 'Your No. of Profit Persons ',
    value: '0'
  },

  {
    name: 'Required Fund ',
    value: 'Rs. 33 Lakh'
  },

  {
    name: 'Required No. of Share Holders ',
    value: '6600'
  },

  {
    name: 'Per Share Holders Required Fund ',
    value: 'Multiple of 500'
  },

  {
    name: 'No of Share allotment ',
    value: 'Rs. 200.00/Share'
  },

  {
    name: 'Net Profit Sharing ',
    value: '55%'
  },

  {
    name: 'Total Enrolled Share ',
    value: '500'
  },

  {
    name: 'Till Enrolled ',
    value: '201'
  },

  {
    name: 'Till Raised Fund ',
    value: '100500'
  },

  {
    name: 'Remain Funding ',
    value: '3199500'
  },

  {
    name: 'Upcoming Enroll ',
    value: '6399'
  }
];

const PaymentInfo = () => {
  // const user = useAppSelector((state) => state.user.data);

  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        Bank Detail
        {/* Kindly Deposite Rs.
        {user.membership === 'BASIC' ? '1,000/-' : '1,00,000/-'} and upload the
        payment slip as a proof! */}
      </Typography>
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
      <Typography variant="h4" sx={{ my: 2, marginTop: 5 }}>
        Project Detail
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableBody>
            {rowSecond.map((row) => {
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
    </>
  );
};

export default PaymentInfo;

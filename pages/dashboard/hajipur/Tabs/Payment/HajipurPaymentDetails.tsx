import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';

const data = [
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
    value: 'HAJIPUR BIHAR'
  },
  {
    name: 'A/C No.',
    value: '50200078200870'
  },
  {
    name: 'IFSC CODE ',
    value: 'HDFC0000088'
  }
];

const rows = [
  {
    name: 'Your Enrollment Amount is ',
    value: '0'
  },

  {
    name: 'Your No. of profit persons',
    value: '0'
  },

  {
    name: 'Required Fund',
    value: 'Rs 2 cr.'
  },

  {
    name: 'Required No. of Share Holder',
    value: '8000'
  },

  {
    name: 'Per Share Holder Required Fund',
    value: 'Minimum 2500 to multiple 8'
  },

  {
    name: 'No. of sahre allotment',
    value: 'Rs 200/Share'
  },

  {
    name: 'Net Profit Sharing',
    value: '55%'
  },

  {
    name: 'Total Enrolled Share',
    value: '8000'
  },

  {
    name: 'Total Enrolled',
    value: '4668'
  },

  {
    name: 'Till Raised Fund',
    value: '11670000'
  },

  {
    name: 'Remain Funding',
    value: '8330000'
  },

  {
    name: 'Upcoming Enroll',
    value: '3332'
  }
];

const HajipurPaymentInfo = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    }
  }));

  const diff = 11670000 / 20000000;
  const risedFundPer = diff * 100;

  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        Bank Detail
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableBody>
            {data.map((bankData) => {
              return (
                <TableRow
                  key={bankData.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {bankData.name}
                  </TableCell>
                  <TableCell align="right">{bankData.value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" sx={{ my: 2, marginTop: 5 }}>
        Project Detail
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

      <Box sx={{ flexGrow: 1, my: 2 }}>
        <Typography variant="h6">Till Raised(%)</Typography>
        <BorderLinearProgress variant="determinate" value={risedFundPer} />
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            display: 'flex',
            position: 'absolute',
            marginTop: '-20px',
            marginLeft: '50px',
            fontWeight: 'bold',
            color: 'white'
          }}
        >{`${Math.round(risedFundPer)}%`}</Typography>
      </Box>
    </>
  );
};

export default HajipurPaymentInfo;

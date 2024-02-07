import React from 'react';
import {
  Button,
  Typography,
  Container,
  Box,
  useTheme,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead
} from '@mui/material';

const cardBenefits = (props) => {
  const { amountYouGet, validUpto, redeemAmount } = props;
  const theme = useTheme();
  const { type } = props;

  // Define values based on card type
  var amountToPay;

  switch (type) {
    case 'BRONZE':
      amountToPay = '₹ 1000';
      break;
    case 'SILVER':
      amountToPay = '₹ 2500';
      break;
    case 'GOLD':
      amountToPay = '₹ 5000';
      break;
    case 'DIAMOND':
      amountToPay = '₹ 10000';
      break;
    default:
      // Handle default case
      break;
  }

  const rows = [
    {
      name: 'Amount To Pay',
      value: amountToPay
    },
    {
      name: 'Amount You Get',
      value: `₹ ${amountYouGet}`
    },
    {
      name: 'Redeem Amount Per Month',
      value: `₹ ${redeemAmount}`
    },
    {
      name: 'Valid Upto',
      value: `${validUpto} Months`
    }
  ];

  return (
    <>
      <Box
        sx={{
          marginLeft: 10,
          [theme.breakpoints.down('sm')]: {
            marginLeft: 0
          }
        }}
      >
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 400,
              [theme.breakpoints.down('sm')]: {
                minWidth: 300
              }
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{
                    backgroundColor: theme.colors.primary.main,
                    textAlign: 'center',
                    width: '100%'
                  }}
                >
                  <Typography color="white" variant="h5">
                    Card Benefits
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>

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
                    <TableCell align="right">{row?.value}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
export default cardBenefits;

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

const cardBenefits = () => {
  const theme = useTheme();

  const rows = [
    {
      name: 'Amount To Pay',
      value: '1000'
    },
    {
      name: 'Amount You Get',
      value: '1100'
    },

    {
      name: 'Redeem Amount',
      value: '100'
    },

    {
      name: ' Valid Upto  ',
      value: '11 Months'
    }
  ];
  return (
    <>
      <Box sx={{ marginLeft: 10 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={2} // Assuming you have 2 columns in the table body
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
                    <TableCell align="right">{row.value}</TableCell>
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

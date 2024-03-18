import React from 'react';
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
import { AllBankDetails } from '../AllProjectData';

const BankDetails = ({
  showBankDetails,
  showUPIDetails,
  btnShowBankDetails,
  btnShowUPIDetails,
  title,
  enrollNow
}) => {
  return (
    <>
      {enrollNow && (
        <>
          <Button
            style={{ marginRight: 20 }}
            variant={showBankDetails ? 'contained' : 'outlined'}
            onClick={() => {
              btnShowBankDetails();
            }}
          >
            <Typography variant="h4">Bank Details</Typography>
          </Button>

          {title.toLowerCase() === 'hyderabad' && (
            <Button
              variant={showUPIDetails ? 'contained' : 'outlined'}
              onClick={() => {
                btnShowUPIDetails();
              }}
            >
              <Typography variant="h4">UPI</Typography>
            </Button>
          )}
          <br />
        </>
      )}
      {showBankDetails && enrollNow && (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableBody>
              {AllBankDetails[title + 'BankDetails'].map((bankData) => {
                return (
                  <TableRow
                    key={bankData.key}
                    sx={{
                      '&:last-child td, &:last-child th': {
                        border: 0
                      }
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {bankData.key}
                    </TableCell>
                    <TableCell align="right">{bankData.info}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {showUPIDetails && enrollNow && title.toLowerCase() === 'hyderabad' && (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableBody>
              <img
                style={{
                  width: '250px',
                  borderRadius: '20px',
                  padding: '10px'
                }}
                src="/images/hyderabad_upi.png"
              />
              <Typography variant="body1" sx={{ my: 2, pl: 2 }}>
                OR
              </Typography>
              <Typography variant="h4" sx={{ my: 2, pl: 2 }}>
                <a href="#">UPI ID : ramaeraindustries@sbi</a>
              </Typography>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default BankDetails;

import { useAppSelector } from '@/hooks';
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
    value: 'KOTAK MAHINDRA BANK '
  },

  {
    name: 'Branch',
    value: 'NOIDA SECTOR 63'
  },

  {
    name: 'A/C No.',
    value: '4747237385'
  },

  {
    name: 'IFSC CODE ',
    value: 'KKBK0000180'
  }
];

const PaymentInfo = () => {
  const user = useAppSelector((state) => state.user.data);

  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        Kindly Deposit Rs.
        {user.membership === 'BASIC' ? '1,000/-' : '1,00,000/-'} and upload the
        payment slip as a proof!
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
    </>
  );
};

export default PaymentInfo;

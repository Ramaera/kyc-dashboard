import {
  Grid,
  Box,
  useTheme,
  Divider,
  TextField,
  Button,
  Typography
} from '@mui/material';

import TeamOverview from '@/content/Dashboards/Tasks/TeamOverview';
import TasksAnalytics from '@/content/Dashboards/Tasks/TasksAnalytics';
import Performance from '@/content/Dashboards/Tasks/Performance';
import Projects from '@/content/Dashboards/Tasks/Projects';
import Checklist from '@/content/Dashboards/Tasks/Checklist';
import Profile from '@/content/Dashboards/Tasks/Profile';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

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
const InfoTab = () => {
  const theme = useTheme();
  const [isBasicMember, setBasicMember] = useState(false);
  const [proofImage, setProofImage] = useState();
  const [isSubmitButtonEnalbed,setSubmitButtonEnabled] = useState(false)
  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        Kindly Deposit Rs.{isBasicMember ? '10,000/-' : '1,25,000/-'} and upload
        the payment slip as a proof!
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

      {proofImage ? <img src={proofImage} height={200} width={200} /> : null}

      <Grid container p={2} spacing={2}>
        <Grid item xs={2}>
          <Button variant="contained" component="label">
            Upload Proof
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  setSubmitButtonEnabled(true)
                  setProofImage(URL.createObjectURL(f.target.files[0]));
                }
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth variant="contained" disabled={!isSubmitButtonEnalbed}>
            Submit
          </Button>
        </Grid>

        <Grid item sx={8}/>
      </Grid>
    </>
  );
};
export default InfoTab;

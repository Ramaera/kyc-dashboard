import {
  Grid,
  Box,
  useTheme,
  Divider,
  TextField,
  Button,
  Typography,
  Badge
} from '@mui/material';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

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
    name: 'Passport Size Photo',
    status: -1,
    id: 'photo'
  },
  {
    name: 'Aadhar Card',
    status: -1,
    id: 'aadhar',
    twoSides: true
  },
  {
    name: 'Pan Card',
    status: -1,
    id: 'pan'
  }
];

const DocumentRow = ({ data }) => {
  const [front, setFront] = useState();
  const [back, setBack] = useState();

  const getBadge = (status) => {
    let msg = 'Upload';
    if (status != -1) {
      msg = 'Pending';
    }
    return <Badge badgeContent={msg} color="secondary"></Badge>;
  };

  const getActionCell = () => {
    if (data.twoSides) {
      return (
        <>
          <Button component="label">
            Choose Front
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  setFront(URL.createObjectURL(f.target.files[0]));
                }
              }}
            />
          </Button>
          <Button component="label">
            Choose Back{' '}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  setBack(URL.createObjectURL(f.target.files[0]));
                }
              }}
            />
          </Button>
        </>
      );
    } else {
      return (
        <Button component="label">
          Choose{' '}
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(f) => {
              if (f.target.files.length > 0) {
                setFront(URL.createObjectURL(f.target.files[0]));
              }
            }}
          />
        </Button>
      );
    }
  };

  const getPreview = () => {
    const views: any = [];

    if (front) {
      views.push(<img src={front} height={100} width={100} />);
    }

    if (back) {
      views.push(<img src={back} height={100} width={100} />);
    }

    if (views.length == 0) {
      return <Typography variant="subtitle1">No Document</Typography>;
    }

    return views;
  };

  return (
    <TableRow
      key={data.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {data.name}
      </TableCell>

      <TableCell>{getPreview()}</TableCell>

      <TableCell>{getActionCell()}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          disabled={!(data.twoSides ? front && back : front)}
        >
          Upload
        </Button>
      </TableCell>

      <TableCell>{getBadge(data.status)}</TableCell>
    </TableRow>
  );
};

const NomineeTab = () => {
  const theme = useTheme();

  const [aadharFront, setAadharFront] = useState();

  const [aadharBack, setAadharBack] = useState();

  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        Please Fill the form to enlist nominee
      </Typography>

      <Grid container p={2} spacing={2}>
        <Grid item xs={4}>
          <TextField
            id="outlined"
            label="Full Name*"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Relationship" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={4}></Grid>
      </Grid>

      <Grid container p={2} spacing={2}>
        <Grid item xs={4}>
          {aadharFront ? (
            <img src={aadharFront} height={200} width={200} />
          ) : null}
          <Button variant="contained" component="label">
            Upload Aadhar Card Front
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  setAadharFront(URL.createObjectURL(f.target.files[0]));
                }
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={4}>
          {aadharBack ? (
            <img src={aadharBack} height={200} width={200} />
          ) : null}
          <Button variant="contained" component="label">
            Upload Aadhar Card Back
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  setAadharBack(URL.createObjectURL(f.target.files[0]));
                }
              }}
            />
          </Button>



        </Grid>

        <Grid item xs={4}></Grid>
      </Grid>


<Divider/>
    <Box mt={2}>
    <Button variant="contained" component="label">
          Submit</Button>
    </Box>
    </>
  );
};
export default NomineeTab;

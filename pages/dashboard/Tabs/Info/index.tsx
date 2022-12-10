import { Grid, Box, useTheme, Divider, TextField, Button } from '@mui/material';

import TeamOverview from '@/content/Dashboards/Tasks/TeamOverview';
import TasksAnalytics from '@/content/Dashboards/Tasks/TasksAnalytics';
import Performance from '@/content/Dashboards/Tasks/Performance';
import Projects from '@/content/Dashboards/Tasks/Projects';
import Checklist from '@/content/Dashboards/Tasks/Checklist';
import Profile from '@/content/Dashboards/Tasks/Profile';
const InfoTab = () => {
  const theme = useTheme();

  return (
    <>
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
          <TextField
            label="Father's/Husband's Name*"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField label="DOB(DD/MM/YYYY)*" variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Grid container p={2} spacing={2}>
        <Grid item xs={4}>
          <TextField label="Mobile Number*" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined"
            label="Alternate Number*"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Email ID*" variant="outlined" fullWidth />
        </Grid>
      </Grid>

      <Grid container p={2} spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Demat A/C no (optional)"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth variant="contained">
            Submit
          </Button>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </>
  );
};
export default InfoTab;

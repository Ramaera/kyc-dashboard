import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ForgotPasswordModal from './ForgotPasswordModal';
import { Radio, RadioGroup } from '@mui/material';
import { useAuth } from 'pages/auth/auth';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const [pw_id,setPW_id]=React.useState('')
  const [memberType,setMemberType]=React.useState(true)
  const[password,setPassword]=React.useState('')
  const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    

  };

  return (
    <form onSubmit={handleSubmit}>
    <Grid component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          p: 2,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant="h1" sx={{ my: 2 }}>
          Login
        </Typography>

        <Typography
          variant="h4"
          color="text.secondary"
          fontWeight="normal"
          sx={{ mb: 0 }}
        >
          For the purpose of industry regulation, your details are required.
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="referralId"
            label="PlanetWay Refferal Id"
            name="referralId"
            autoFocus
          />
          <Typography
            color="text.secondary"
            textAlign="left"
            fontWeight="normal"
          >
            Select Membership Type*:
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="basic" control={<Radio />} label="Basic" />
            <FormControlLabel
              value="Advance"
              control={<Radio />}
              label="Advance"
            />
          </RadioGroup>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
          
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid item xs>
            <Link
              href="#"
              underline="always"
              variant="body2"
              onClick={() => {
                setForgotPasswordOpen(true);
              }}
            >
              Forgot password?
            </Link>
          </Grid>

          <Button
          onClick={() => {
            window.location ="/auth/signup"
          }}
            fullWidth
            variant="outlined"
            sx={{ mt: 2, mb: 2 }}
          >
            Create Account
          </Button>
        </Box>
      </Box>
      <ForgotPasswordModal
        open={forgotPasswordOpen}
        setOpen={setForgotPasswordOpen}
      />
    </Grid>
    </form>
  );
}

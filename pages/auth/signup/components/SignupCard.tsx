import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
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
import { validate } from 'numeral';

import toast, { Toaster } from 'react-hot-toast';



export default function SignInSide() {
  const [PWId,setPWId]=React.useState('')
  const[password,setPassword]=React.useState('')
  const[membership,setMembership]=React.useState("basic")

  const [isLoading,setLoading] = React.useState(false)
  const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState(false);



  const validateForm=()=>{


    if(!PWId){

      toast.error('PW ID is not valid!');

      return 
    }

    if(!password){
      toast.error('Password is not valid!');

      return 
    }

    return true
  }


  const handleSubmit = () => {
   
    const isValid = validateForm()
  };

  return (
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
        Signup
      </Typography>

      <Typography
        variant="h4"
        color="text.secondary"
        fontWeight="normal"
        sx={{ mb: 0 }}
      >
        For the purpose of industry regulation, your details are required.
      </Typography>
      <Box component="form" noValidate sx={{ mt: 0 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="referralId"
          label="PlanetWay Refferal Id"
          name="referralId"
          autoFocus

          onChange={(e)=>{
            setPWId(e.target.value)
          }}
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
          onChange={(e)=>{
            setMembership(e.target.value)
          }}
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
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <LoadingButton
          loading={isLoading}
          fullWidth
          onClick={()=>{
            handleSubmit()
          }}
          disabled={isLoading}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
Create An Acccount          
        </LoadingButton>
        <Typography
        variant="body1"
        color="text.secondary"
        text-align='left'
        >Already have an account ?</Typography>
        {/* <Grid item xs>
          <Link
            href="#"
            underline="always"
            variant="body2"
            onClick={() => {
              setForgotPasswordOpen(true);
            }}
          >   */}
          {/* </Link> */}
        {/* </Grid> */}
        

        <Button
         onClick={() => {
          window.location = "/auth/login"
        }}
          fullWidth
          variant="outlined"
          sx={{ mt: 2, mb: 2 }}
          href=""
        >
         Login
        </Button>
      </Box>
    </Box>
    <ForgotPasswordModal
      open={forgotPasswordOpen}
      setOpen={setForgotPasswordOpen}
    />

<Toaster />

  </Grid>
  );
}

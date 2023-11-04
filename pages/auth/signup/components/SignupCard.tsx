import { SIGNUP } from '@/apollo/queries/auth';
import { useLazyQuery, useMutation } from '@apollo/client';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup
} from '@mui/material';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import toast, { Toaster } from 'react-hot-toast';
// import { GET_ALL_AGENCY } from '@/apollo/queries/updateUser';
import { CHECK_AGENCY } from '@/apollo/queries/updateUser';

export default function SignupCard() {
  const router = useRouter();
  const [signup] = useMutation(SIGNUP);
  const [PWId, setPWId] = React.useState('');
  const [visible, setVisible] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState('');
  const [referral, setReferral] = React.useState('');
  const [debouncedReferral, setDebouncedReferral] = React.useState('');
  const [open, setOpen] = React.useState(false);

  // const [referral, setReferral] = React.useState('');
  const [aadhaarNumber, setAadhaarNumber] = React.useState('');
  const [membership, setMembership] = React.useState('BASIC');
  const [validPWID, setValidPWID] = React.useState<boolean>(true);
  const [isAgentVerified, setAgentVerified] = React.useState<boolean>(true);
  const [isLoading, setLoading] = React.useState(false);
  const [agentName, setAgentName] = React.useState('');
  // const [allAgents, setAllAgents] = React.useState([]);
  const [checkAgency, { loading, error, data }] = useLazyQuery(CHECK_AGENCY, {
    variables: { AgencyCode: debouncedReferral }
  });

  // const checkPWID = (text: any) => {
  //   const postData = {
  //     Reff_Code: text
  //   };

  //   const options = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };

  //   axios
  //     .post('https://api.ramaera.com/api/KYC', postData, options)
  //     .then((res) => {
  //       setValidPWID(
  //         res.data[0]['AC_Status'] === 'InActive'
  //           ? false
  //           : res.data[0]['AC_Status'] === 'Active'
  //           ? true
  //           : false
  //       );
  //     })
  //     .catch((err) => {
  //       console.log('ERROR: ====', err);
  //     });
  // };

  const validateForm = () => {
    if (aadhaarNumber.length !== 12) {
      toast.error('Enter Valid Aadhaar Number!');

      return;
    }
    if (!PWId) {
      toast.error('PW ID is not valid!');

      return;
    }

    if (!password || password.length < 8) {
      toast.error('Password is not valid!');
      return;
    }
    if (!validPWID) {
      toast.error('Please Enter a valid PWID');

      return;
    }
    return true;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();
    setLoading(true);
    if (isValid) {
      try {
        const resp = await signup({
          variables: {
            pw_id: PWId.toUpperCase(),
            membership: membership,
            aadharCardNumber: aadhaarNumber,
            password: password,
            referralAgencyCode: referral
          }
        });

        const data = resp.data.signup;
        for (let key of Object.keys(data)) {
          localStorage.setItem(key, data[key]);
        }
        router.reload();
      } catch (err) {
        toast.error(err.message);
      }
    }
    setLoading(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStatus = async () => {
    handleSubmit();
    handleClose();
    /*  if (status === 'APPROVED') {
      toast.success('KYC APPROVED');
    }
    if (status === 'REJECTED') {
      toast.error('KYC REJECTED');
    }
    if (status === 'ONGOING') {
      toast.success('KYC ONGOING');
    } */
  };
  const checkIfAgentExists = () => {};

  /*   React.useEffect(() => {
    setAllAgents(data.AllKycAgency);
  }, [data]); */

  const verifyAgency = () => {
    setDebouncedReferral(referral);
    checkAgency();
  };
  React.useEffect(() => {
    if (data?.findAgency?.user?.name) {
      setAgentName(data?.findAgency?.user?.name);
      setAgentVerified(true);
    } else {
      setAgentName('');
    }
  }, [data]);

  React.useEffect(() => {
    if (error?.message) {
      toast.error(error?.message);
    }
  }, [error]);

  React.useEffect(() => {
    checkIfAgentExists();
  }, [referral]);
  React.useEffect(() => {
    setAgentVerified(true);
  }, [agentName]);

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
            label="PlanetWay Refferal Id"
            autoFocus
            onChange={(e) => {
              setPWId(e.target.value);
              // checkPWID(e.target.value);
            }}
          />

          <Typography
            color="text.secondary"
            textAlign="left"
            fontWeight="normal"
          >
            Select Share Holder Type*:
          </Typography>
          <RadioGroup
            row
            defaultValue={'Basic'}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => {
              setMembership(e.target.value);
            }}
          >
            <FormControlLabel value="BASIC" control={<Radio />} label="Basic" />
            <FormControlLabel
              value="ADVANCE"
              control={<Radio />}
              label="Advance (Profit Sharing Partner)"
            />
          </RadioGroup>
          <TextField
            margin="normal"
            fullWidth
            label="Agency Referral Code (optional)"
            onChange={(e) => {
              setReferral(e.target.value);
              if (e.target.value.length > 0) {
                setAgentVerified(false);
              } else {
                setAgentVerified(true);
              }
            }}
            InputProps={{
              endAdornment: (
                <LoadingButton
                  onClick={() => {
                    verifyAgency();
                  }}
                  disabled={!referral || loading}
                  variant="contained"
                >
                  Verify
                </LoadingButton>
              )
            }}
          />
          {agentName && (
            <Typography>{'Referral Code Of : ' + agentName}</Typography>
          )}
          <TextField
            margin="normal"
            fullWidth
            label="Aadhaar Number "
            required
            onChange={(e) => {
              setAadhaarNumber(e.target.value);
              //checkPWID(e.target.value);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            label="Password"
            type={visible ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <LoadingButton
            loading={isLoading}
            fullWidth
            onClick={() => {
              if (referral) {
                handleSubmit();
              } else {
                handleClickOpen();
              }
            }}
            disabled={isLoading}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create An Acccount
          </LoadingButton>
          <Typography variant="body1" color="text.secondary" text-align="left">
            Already have an account ?
          </Typography>
          <LoadingButton
            onClick={() => {
              router.push('/auth/login');
            }}
            fullWidth
            variant="outlined"
            sx={{ mt: 2, mb: 2 }}
            href=""
          >
            Login
          </LoadingButton>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Are you susre?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have not added any Referral Code
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Dismiss</Button>
          <Button onClick={handleStatus} autoFocus>
            Create Account
          </Button>
        </DialogActions>
      </Dialog>
      <Toaster />
    </Grid>
  );
}

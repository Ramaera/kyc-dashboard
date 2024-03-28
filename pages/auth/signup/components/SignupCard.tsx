import { SIGNUP } from '@/apollo/queries/auth';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
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
  RadioGroup,
  useTheme
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
import { CHECK_REFERRAL_CODE } from '@/apollo/queries/updateUser';
import { CHECK_AGENCY_EXPIRY } from '@/apollo/queries/updateUser';
export default function SignupCard() {
  const router = useRouter();
  const [signup] = useMutation(SIGNUP);
  const [PWId, setPWId] = React.useState('');
  const [visible, setVisible] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState('');
  const [referral, setReferral] = React.useState('');
  const [debouncedReferral, setDebouncedReferral] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  // const [referral, setReferral] = React.useState('');
  const [aadhaarNumber, setAadhaarNumber] = React.useState('');
  const [membership, setMembership] = React.useState('BASIC');
  const [validPWID, setValidPWID] = React.useState<boolean>(true);
  const [isAgentVerified, setAgentVerified] = React.useState<boolean>(true);
  const [isLoading, setLoading] = React.useState(false);
  const [agentName, setAgentName] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isVerifyAgencyCalled, setIsVerifyAgencyCalled] = React.useState(false);

  // console.log('debouncedReferral', debouncedReferral);

  const [
    checkAgencyExpiry,
    { loading: loadingExpiry, error: errorExpiry, data: dataExpiry }
  ] = useLazyQuery(CHECK_AGENCY_EXPIRY, {
    variables: { AgencyCode: debouncedReferral }
  });

  // if (errorExpiry) {
  //   toast.error(errorExpiry?.message);
  // }

  // console.log('checkAgencyExpiry', dataExpiry?.findAgency?.agencyExpiryDate);

  const [
    checkAgency,
    { loading: loadingAgency, error: errorAgency, data: dataAgency }
  ] = useLazyQuery(CHECK_REFERRAL_CODE, {
    variables: { referralCode: debouncedReferral }
  });

  // console.log('checkAgency', dataAgency);

  // if (errorExpiry) {
  //   toast.error(errorExpiry?.message);
  // }

  const checkPWID = (text: any) => {
    const postData = {
      Reff_Code: text
    };
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    axios
      .post('https://api.ramaera.com/api/KYC', postData, options)
      .then((res) => {
        // const AC_Status = res.data[0]?.AC_Status || 'InActive';
        // setValidPWID(AC_Status === 'Active');

        const AC_Status = res.data[0]?.AC_Status;
        setValidPWID(AC_Status);
        setUserName(res.data[0]?.Name);
        setUserName(res.data[0]?.Name);
      })
      .catch((err) => {
        console.error('error', err);
        setValidPWID(false);
      });
  };

  const validateForm = () => {
    if (!PWId) {
      toast.error('PW ID is not valid!');

      return;
    }

    if (!isAgentVerified) {
      toast.error('Enter correct Referral ID!');

      return;
    }

    if (!aadhaarNumber || aadhaarNumber.length !== 12) {
      toast.error('Enter Valid Aadhaar Number!');

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
            referralAgencyCode: referral.toUpperCase()
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

  const verifyAgency = () => {
    setDebouncedReferral(referral);
    console.log('calling');
    checkAgencyExpiry();
    console.log('called');
    setIsVerifyAgencyCalled((s) => !s);
    checkAgency();
  };

  React.useEffect(() => {
    if (
      dataExpiry &&
      dataExpiry.findAgency &&
      dataExpiry.findAgency.agencyExpiryDate
    ) {
      const expiryDate = new Date(dataExpiry.findAgency.agencyExpiryDate);
      const currentDate = new Date();

      if (expiryDate < currentDate) {
        toast.error('Your agency code is expired.');
      }
    }
  }, [isVerifyAgencyCalled, dataExpiry]);

  React.useEffect(() => {
    if (dataAgency?.verifyReferralId?.name) {
      setAgentName(dataAgency?.verifyReferralId?.name);
      setAgentVerified(true);
    } else {
      setAgentName('');
      setAgentVerified(false);
    }
  }, [dataAgency]);

  // React.useEffect(() => {
  //   if (error?.message) {
  //     toast.error(error?.message);
  //   }
  // }, [error]);

  return (
    <Grid component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          p: 2,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          [theme.breakpoints.down('sm')]: {
            mx: 0
          }
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
            label="Your Identity Code"
            autoFocus
            onChange={(e) => {
              setPWId(e.target.value);
              checkPWID(e.target.value);
            }}

            // InputProps={{
            //   endAdornment: (
            //     <LoadingButton
            //       onClick={() => {
            //         checkPWID(PWId);
            //       }}
            //       // disabled={!referral || loading}
            //       variant="contained"
            //     >
            //       Verify
            //     </LoadingButton>
            //   )
            // }}
          />
          {userName && <Typography>{'Name : ' + userName}</Typography>}

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
              sx={{ textAlign: 'left' }}
              value="ADVANCE"
              control={<Radio />}
              label="30% Net Profit Sharing Partner"
            />
          </RadioGroup>
          <TextField
            margin="normal"
            fullWidth
            label="Authorized Agency Code"
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
                  disabled={!referral || loadingAgency} // Updated from {!referral || loading} to {!referral || loadingAgency}
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
            disabled={isLoading || !validPWID}
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
        <DialogTitle id="alert-dialog-title">
          {'Verify Your Referral ID !'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have not added any Referral ID Code
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
          {/* <Button onClick={handleStatus} autoFocus>
            Create Account
          </Button> */}
        </DialogActions>
      </Dialog>
      <Toaster />
    </Grid>
  );
}

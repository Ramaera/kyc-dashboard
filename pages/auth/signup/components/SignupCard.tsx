import { SIGNUP } from '@/apollo/queries/auth';
import { useMutation } from '@apollo/client';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { IconButton, InputAdornment, Radio, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import * as React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function SignupCard() {
  const router = useRouter();
  const [PWId, setPWId] = React.useState('');
  const [visible, setVisible] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState('');
  const [referral, setReferral] = React.useState('');
  const [membership, setMembership] = React.useState('BASIC');
  const [validPWID, setValidPWID] = React.useState<any>();
  const [isLoading, setLoading] = React.useState(false);

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
        console.log(res.data[0]);
        setValidPWID(res.data[0]);
      })
      .catch((err) => {
        console.log('ERROR: ====', err);
      });
  };
  const [signup] = useMutation(SIGNUP);

  const validateForm = () => {
    /*  if (!validPWID) {
      toast.error('Please Enter a valid PWID');

      return;
    } */
    if (!PWId) {
      toast.error('PW ID is not valid!');

      return;
    }

    if (!password || password.length < 8) {
      toast.error('Password is not valid!');
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
            pw_id: PWId,
            membership: membership,
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
  // React.useEffect(()=>{
  //   console.log("dataatsignup",{user})
  //   // setMembership(user?.membership)
  // },[user])

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
            onChange={(e) => {
              setPWId(e.target.value);
              //checkPWID(e.target.value);
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
              label="Advance"
            />
          </RadioGroup>
          <TextField
            margin="normal"
            fullWidth
            id="referralId"
            label="Agency Referral Code (optional)"
            name="referralId"
            onChange={(e) => {
              setReferral(e.target.value);
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
              handleSubmit();
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

      <Toaster />
    </Grid>
  );
}

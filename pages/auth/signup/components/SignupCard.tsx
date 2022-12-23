import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Radio, RadioGroup } from '@mui/material';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '@/apollo/queries/auth';

export default function SignupCard() {
  const router = useRouter();

  const [PWId, setPWId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [membership, setMembership] = React.useState('basic');

  const [isLoading, setLoading] = React.useState(false);

  const [signup] = useMutation(SIGNUP);

  const validateForm = () => {
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
            password: password
          }
        });

        const data = resp.data.signup;
        for (let key of Object.keys(data)) {
          localStorage.setItem(key, data[key]);
        }
        router.reload()
      } catch (err) {
        toast.error(err.message);
      }
    }
    setLoading(false);
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
        }}>
        <Typography variant="h1" sx={{ my: 2 }}>
          Signup
        </Typography>
        <Typography
          variant="h4"
          color="text.secondary"
          fontWeight="normal"
          sx={{ mb: 0 }}>
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
            defaultValue={'basic'}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => {
              setMembership(e.target.value);
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
            onChange={(e) => {
              setPassword(e.target.value);
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
          <Button
            onClick={() => {
              router.push('/auth/login');
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

      <Toaster />
    </Grid>
  );
}

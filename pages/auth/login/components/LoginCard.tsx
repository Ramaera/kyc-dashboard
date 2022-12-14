import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

import toast, { Toaster } from 'react-hot-toast';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '@/apollo/queries/auth';

export default function LoginCard() {
  const router = useRouter();

  const [PWId, setPWId] = React.useState('');
  const [password, setPassword] = React.useState('');

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

        console.log({ resp });
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
           Login
          </LoadingButton>
          <Typography variant="body1" color="text.secondary" text-align="left">
            Don't Have An Account?
          </Typography>
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
              router.push('/auth/signup');
            }}
            fullWidth
            variant="outlined"
            sx={{ mt: 2, mb: 2 }}
            href=""
          >
            Register
          </Button>
        </Box>
      </Box>

      <Toaster />
    </Grid>
  );
}

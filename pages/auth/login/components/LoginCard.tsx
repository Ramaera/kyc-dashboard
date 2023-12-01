import { LOGIN } from '@/apollo/queries/auth';
import { useMutation } from '@apollo/client';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { IconButton, InputAdornment, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ForgotPasswordModal from './ForgotPasswordModal';

export default function LoginCard() {
  const router = useRouter();
  const [PWId, setPWId] = useState('');
  const [visible, setVisible] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const [forgotPasswordShow, setForgotPasswordShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [login] = useMutation(LOGIN);
  const theme = useTheme();

  const validateForm = () => {
    if (!PWId) {
      toast.error('PW ID is not valid!');
      return;
    }
    // if (!password || password.length < 8) {
    if (!password) {
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
        const resp = await login({
          variables: {
            pw_id: PWId,
            password: password
          }
        });
        const data = resp.data.login;
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
            label="PW ID"
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
            value={password}
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
                    aria-label="togglw password visibility"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Grid item xs>
            <Link href="#">
              <a
                onClick={() => {
                  setForgotPasswordShow(true);
                }}
              >
                Forgot Password
              </a>
            </Link>
          </Grid>
          <LoadingButton
            loading={isLoading}
            fullWidth
            type="submit"
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

          <Button
            onClick={() => {
              router.push('/auth/signup');
            }}
            fullWidth
            variant="outlined"
            sx={{ mt: 2, mb: 2 }}
          >
            Register
          </Button>
          <ForgotPasswordModal
            open={forgotPasswordShow}
            setOpen={setForgotPasswordShow}
          />
        </Box>
      </Box>
      <Toaster />
    </Grid>
  );
}

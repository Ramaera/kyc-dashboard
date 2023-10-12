import { RESETPASSWORD } from '@/apollo/queries/auth';
import { useAppSelector } from '@/hooks';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import router from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

function ForgotPasswordModal({ open, setOpen }) {
  const user = useAppSelector((state) => state.user?.data);
  const [isChangePasswordVisible, setChangePasswordVisible] =
    useState<boolean>(false);
  const [privateKey, setPrivateKey] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [PWID, setPWID] = useState('');

  const [isLoading, setLoading] = useState(false);
  const [forgetPasswordWithPrivateKey] = useMutation(RESETPASSWORD);
  const handleClose = () => {
    setOpen(false);
  };

  const checkPrivateKey = async () => {
    if (privateKey.length < 8) {
      toast.error('Private key is not valid');
      return;
    }
    setChangePasswordVisible(true);
    toast.error('Private key is not getting checked');
  };
  /*   const checkPrivateKey = async () => {
    const postData = {
      privateKey: privateKey
    };

    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    await axios
      .post('https://api.ramaera.com/api/PKey', postData, options)
      .then((res) => {
        setPWID(res.data[0]);
        if (res.data[0]) {
          setChangePasswordVisible(true);
        } else {
          toast.error('Invalid PrivateKey');
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }; */

  const handlePasswordChange = async () => {
    if (confirmPassword !== newPassword) {
      toast.error("Passwords Don't Match");
      return;
    }
    if (confirmPassword.length < 8) {
      toast.error('Minimun Password Length is 8');
      return;
    } else {
      try {
        const resp = await forgetPasswordWithPrivateKey({
          variables: {
            pwId: PWID,
            newPassword: confirmPassword
          }
        });
        if (resp) {
          toast.success('Password Changed');
          router.push('/login');
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    setChangePasswordVisible(false);
  }, []);
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <Grid component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
              p: 1,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography variant="h3" sx={{ my: 2 }}>
              Forgot Password?
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight="normal"
              //   sx={{ mb: 4 }}
            >
              Please Fill This Form to Reset Your Password{' '}
            </Typography>
            <Box>
              {!isChangePasswordVisible && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Please Enter your Private Key "
                  autoFocus
                  onChange={(e) => {
                    setPrivateKey(e.target.value);
                  }}
                />
              )}
              {isChangePasswordVisible && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    label="Please Enter Your New password"
                    autoFocus
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    label="Please Confirm Your New password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </>
              )}
              {!isChangePasswordVisible && (
                <LoadingButton
                  loading={isLoading}
                  onClick={() => {
                    checkPrivateKey();
                  }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                >
                  Validate Private Key
                </LoadingButton>
              )}
              {isChangePasswordVisible && (
                <LoadingButton
                  loading={isLoading}
                  onClick={() => {
                    handlePasswordChange();
                    router.push('/auth/login');
                  }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                >
                  Change Password
                </LoadingButton>
              )}
              <Button
                color="error"
                onClick={handleClose}
                fullWidth
                variant="outlined"
                sx={{ mt: 0, mb: 2 }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Grid>
      </Dialog>
    </>
  );
}

export default ForgotPasswordModal;

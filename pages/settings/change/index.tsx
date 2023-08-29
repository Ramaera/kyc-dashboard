import { CHANGE_PASSWORD } from '@/apollo/queries/auth';
import SidebarLayout from '@/layouts/SidebarLayout';
import { logout } from '@/state/slice/userSlice';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Card,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

function ChangePassword() {
  const dispatch = useDispatch();
  const [changePassword] = useMutation(CHANGE_PASSWORD);
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = async () => {
    try {
      const resp = await changePassword({
        variables: {
          oldpassword: oldPassword,
          newPassword: confirmPassword
        }
      });
      if (resp) {
        toast.success('Password Changed');
        dispatch(logout());
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <ProtectedSSRoute>
      <Toaster position="bottom-center" reverseOrder={false} />

      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Card variant="outlined">
          <Grid maxWidth={500} mx={'auto'}>
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
                Change Password?
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight="normal"
                //   sx={{ mb: 4 }}
              >
                Please Fill This Form to Chnage Your Password
              </Typography>
              <Box>
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    label="Please Enter Your Old password"
                    autoFocus
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    label="Please Enter Your New password"
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

                <LoadingButton
                  onClick={() => {
                    handlePasswordChange();
                  }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                >
                  Change Password
                </LoadingButton>
              </Box>
            </Box>
          </Grid>
        </Card>
      </Container>
    </ProtectedSSRoute>
  );
}

ChangePassword.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default ChangePassword;

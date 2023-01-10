import { RESETPASSWORD } from '@/apollo/queries/auth';
import { useAppSelector } from '@/hooks';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import router from 'next/router';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function ForgotPasswordModal({ open, setOpen }) {
  const user = useAppSelector(state => state.user.data);
  const [isLoading, setLoading] = useState(false);
  const [private_key, setPrivate_key]=useState('')
  const [password,setPassword]=useState<any | null>(null);
  const [resetPassword]=useMutation(RESETPASSWORD)
  const handleClose = () => {
    setOpen(false);
  };
  const validateForm=()=>{
    
    if (!private_key){
  
      toast.error("Private Key is not valid");
      return ;
    }
    return true
  }
  const handleSubmit = async () => {
    const isValid=validateForm();

    setLoading(true);
    if (isValid){
      
      try {
        const resp=await resetPassword({
          variables:{
            private_key:private_key,
            newPassword:password
          }
        });
        
        const data=resp.data.forgetPasswordWithPrivateKey;
        toast.success("Password Updated",data.message)
     
      } catch (err) {
        toast.error(err.message);
      }
    }

    setLoading(false);
  };
useEffect(()=>{
  if(user)
setPassword(user.password)
},[])
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
Please Fill This Form to Reset Your Password            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="referralId"
                label="Please Enter your Private Key "
                autoFocus
                onChange={(e) => {
                  setPrivate_key(e.target.value);
                }}
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="referralId"
                type='password'
                label="Please Enter your New password"
                autoFocus
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                
              />
              <LoadingButton
              loading={isLoading}
              onClick={() => {
                router.push('/auth/login');
              }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}>
                Reset Password
              </LoadingButton>
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
        <Toaster
          position='bottom-center'
          reverseOrder={false} />
      </Dialog>
    </>
  );
}

export default ForgotPasswordModal;

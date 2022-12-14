// import Head from 'next/head';
// import SidebarLayout from '@/layouts/SidebarLayout';
// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRouter } from 'next/router';


import { FORGETPASSWORD } from '@/apollo/queries/auth';
import Dialog from '@mui/material/Dialog';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import { toast } from 'react-hot-toast';
import { responsePathAsArray } from 'graphql';


function ForgotPasswordModal({ open, setOpen }) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [PWId, setPWId] = useState('');
  const [forgetpassword]=useMutation(FORGETPASSWORD)
  const handleClose = () => {
    setOpen(false);
  };
  const validateForm=()=>{
    console.log(PWId)
    if (!PWId){
      console.log(PWId)
      toast.error("PW Id is not valid");
      return ;
    }
    return true
  }

 
  const handleSubmit = async () => {
    const isValid=validateForm();

    setLoading(true);
    if (isValid){
      try {
        const resp=await forgetpassword({
          variables:{
            pw_id:PWId
          }
        });
        const data=resp.data.passwordresetRequest;
        console.log(data.value)
        for (let key of Object.keys(data)) {
          localStorage.setItem(key,data[key]);
        }

        // console.log({ resp });
      } catch (err) {
        toast.error(err.message);
      }
    }

    setLoading(false);
  };


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
                label="PlanetWay Refferal Id or Email"
                autoFocus
                onChange={(e) => {
                  setPWId(e.target.value);
                }}
                
              />

              <Button
              // onClick={() => {
              //   router.push('/auth/login');
              // }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                
              >
                Reset Password
              </Button>

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

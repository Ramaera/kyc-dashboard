import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';

function ForgotPasswordModal({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {};

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
              />

              <Button
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

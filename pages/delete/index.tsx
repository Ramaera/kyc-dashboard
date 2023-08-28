import { logout } from '@/state/slice/userSlice';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    console.log('deleted');
    dispatch(logout());
    // router.push('/dashboard');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <LoadingButton onClick={() => handleClickOpen()} variant="contained">
        Delete Account
      </LoadingButton>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Delete Account Forever?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You won't be able to recover this account.
              <br />
              Account will be deleted in 15 Days
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Dismiss</Button>
            <Button onClick={handleDelete} autoFocus>
              DELETE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default index;

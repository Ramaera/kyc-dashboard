import { useAppSelector } from '@/hooks';
import {
  Typography,
  Badge,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { useMutation } from '@apollo/client';
import toast from 'react-hot-toast';
import Link from 'src/components/Link';
import { UPDATE_KYC_BY_ADMIN } from '@/apollo/queries/updateUser';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useState } from 'react';

function PageHeader() {
  const user = useAppSelector((state) => state.user.data);

  const [updateStatus] = useMutation(UPDATE_KYC_BY_ADMIN);
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState('');
  const currentUser = useSelector((state: any) => state.foundUser.foundUser);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStatus = async () => {
    const resp = await updateStatus({
      variables: {
        id: currentUser.id,
        kyc: status
      }
    });
    handleClose();
    if (status === 'APPROVED') {
      toast.success('KYC APPROVED');
    }
    if (status === 'REJECTED') {
      toast.error('KYC REJECTED');
    }
    if (status === 'ONGOING') {
      toast.success('KYC ONGOING');
    }
    setResponse(resp.data.updateStatus.kyc);
  };
  const checkStatus = () => {
    if (currentUser) {
      let dis = false;
      currentUser.documents.map((doc) => {
        if (
          doc.status === 'REJECTED' ||
          doc.status === 'PENDING' ||
          doc.status === 'NOT_ININTIALISED'
        ) {
          // console.log(doc.status);
          dis = true;
        }
      });
      return dis;
    }
  };
  return (
    <>
      {router.pathname === '/dashboard' && (
        <Box
          display="flex"
          alignItems={{ xs: 'stretch', md: 'center' }}
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            {/* <AvatarPageTitle variant="rounded">
          <AddAlertTwoToneIcon fontSize="large" />
        </AvatarPageTitle> */}
            <Box>
              {/* <Grid> */}
              <Typography variant="h3" component="h3" gutterBottom>
                Welcome, {user?.name ? user?.name : user?.rm_id}!
              </Typography>
              <Typography variant="h5" component="h5" align="left">
                Membership Type :{' '}
                <Badge
                  badgeContent={user?.membership}
                  sx={{
                    marginLeft: 4
                  }}
                  color="success"
                ></Badge>
              </Typography>
              <Typography variant="subtitle2" mt={1}>
                Complete Your KYC By Filling the form below
              </Typography>
              {/* </Grid> */}
            </Box>
          </Box>
          <Box mt={{ xs: 3, md: 0 }}>
            <Typography
              padding="0 0 10px 0 "
              align="center"
              variant="h4"
              component="h2"
              gutterBottom
            >
              Status :{' '}
              <span
                style={{
                  color: user?.kyc
                    ? (user?.kyc === 'APPROVED' && 'green') ||
                      (user?.kyc === 'REJECTED' && 'red')
                    : ''
                }}
              >
                {user?.kyc === 'NOT_INITIALIZED' ? 'NOT STARTED' : user?.kyc}
              </span>
            </Typography>{' '}
          </Box>
        </Box>
      )}
      {router.pathname === `/agency/[index]` && (
        <Box
          display="flex"
          alignItems={{ xs: 'stretch', md: 'center' }}
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Typography
              variant="h3"
              component="h3"
              sx={{ textTransform: 'uppercase' }}
              gutterBottom
            >
              Agency Dashboard
            </Typography>
            <Typography variant="subtitle2">
              <Link href="/agency">
                <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
                  USERLIST
                </Button>
              </Link>
            </Typography>
          </Box>
          {router.pathname === '/agency/[index]' && (
            <Box margin=" 0 0 0 auto">
              <Box>
                <Typography
                  padding="0 0 10px 0 "
                  align="center"
                  variant="h4"
                  component="h2"
                  gutterBottom
                >
                  <span
                    style={{
                      color: response
                        ? (response === 'APPROVED' && 'green') ||
                          (response === 'REJECTED' && 'red') ||
                          (response === 'ONGOING' && 'orange')
                        : (currentUser.kyc === 'APPROVED' && 'green') ||
                          (currentUser.kyc === 'REJECTED' && 'red') ||
                          (currentUser.kyc === 'ONGOING' && 'orange')
                    }}
                  >
                    Status :{' '}
                    {response
                      ? response
                      : currentUser?.kyc
                      ? currentUser?.kyc
                      : 'UNKNOWN'}
                  </span>
                </Typography>
              </Box>
              <Button
                onClick={() => {
                  handleClickOpen();
                  setStatus('APPROVED');

                  // handleStatus('APPROVED');
                }}
                variant="outlined"
                // disabled={checkStatus()}
                color="success"
                sx={{ ml: 2 }}
              >
                Approve
              </Button>
              <Button
                onClick={() => {
                  handleClickOpen();
                  setStatus('ONGOING');

                  // handleStatus('ONGOING');
                }}
                variant="outlined"
                color="warning"
                sx={{ ml: 2 }}
              >
                Ongoing
              </Button>
              <Button
                onClick={() => {
                  handleClickOpen();
                  setStatus('REJECTED');
                }}
                variant="outlined"
                color="error"
                sx={{ ml: 2 }}
              >
                Reject
              </Button>
              <div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {'Submit KYC Status'}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      KYC Status will be set to {status}.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Dismiss</Button>
                    <Button onClick={handleStatus} autoFocus>
                      Submit
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Box>
          )}
          <Box mt={{ xs: 3, md: 0 }}>
            {/* <Button variant="contained" startIcon={<DocumentScannerTwoToneIcon />}>
          Export
        </Button> */}
          </Box>
        </Box>
      )}
    </>
  );
}

export default PageHeader;
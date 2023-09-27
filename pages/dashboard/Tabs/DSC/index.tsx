import { useAppSelector } from '@/hooks';
import { DesktopDatePicker } from '@mui/lab';
import { Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const DematTab = () => {
  const user = useAppSelector((state) => state.user?.data);
  const [dscDetails, setDscDetails] = useState({
    dscStatus: '',
    createdDate: '',
    expiryDate: ''
  });

  useEffect(() => {
    if (user.DSCDetails) {
      setDscDetails({
        dscStatus: user?.DSCDetails[0].dscStatus,
        createdDate: user?.DSCDetails[0].DscCreatedDate,
        expiryDate: user?.DSCDetails[0].DscExpiryDate
      });
    }
  }, [user]);

  return (
    <>
      <Grid container p={2} spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            disabled
            id="outlined"
            label="DSC Status"
            type="text"
            fullWidth
            value={dscDetails.dscStatus}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DesktopDatePicker
            label="Created Date"
            inputFormat="dd/MM/yyyy"
            value={dscDetails.createdDate}
            // disableFuture
            disabled
            onChange={() => {}}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: '100%' }} />
            )}
          />
          {/* <TextField
            disabled
            id="outlined"
            label="Created Date"
            type="text"
            fullWidth
            value={dscDetails.createdDate}
            variant="outlined"
          /> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <DesktopDatePicker
            label="Expiry Date"
            inputFormat="dd/MM/yyyy"
            onChange={() => {}}
            value={dscDetails.expiryDate}
            // disableFuture
            disabled
            renderInput={(params) => (
              <TextField {...params} sx={{ width: '100%' }} />
            )}
          />
          {/*  <TextField
            disabled
            id="outlined"
            label="Expiry Date"
            type="text"
            fullWidth
            value={dscDetails.expiryDate}
            variant="outlined"
          /> */}
        </Grid>
      </Grid>

      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default DematTab;

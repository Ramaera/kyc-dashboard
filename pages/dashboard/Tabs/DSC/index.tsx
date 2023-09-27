import { useAppSelector } from '@/hooks';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const DematTab = () => {
  const user = useAppSelector((state) => state.user?.data);
  const [dscDetails, setDscDetails] = useState({
    dscStatus: '',
    createdDate: '',
    expiryDate: ''
  });

  const dscStatus = [
    { id: 'RECEIVED', name: 'RECEIVED' },
    { id: 'NOT_RECEIVED', name: 'NOT_RECEIVED' }
  ];

  useEffect(() => {
    if (user.DSCDetails) {
      setDscDetails({
        dscStatus: user?.DSCDetails[0].dscStatus,
        createdDate: user?.DSCDetails[0].DscCreatedDate,
        expiryDate: user?.DSCDetails[0].DscExpiryDate
      });
    }
  }, [user]);

  useEffect(() => {
    if (
      dscDetails.createdDate &&
      dscDetails.dscStatus &&
      dscDetails.expiryDate
    ) {
      setSubmitButtonEnabled(true);
    }
  }, [dscDetails]);

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
          <TextField
            disabled
            id="outlined"
            label="Created Date"
            type="text"
            fullWidth
            value={dscDetails.createdDate}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            disabled
            id="outlined"
            label="Expiry Date"
            type="text"
            fullWidth
            value={dscDetails.expiryDate}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default DematTab;

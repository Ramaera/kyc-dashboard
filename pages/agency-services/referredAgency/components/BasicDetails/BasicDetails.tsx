import React, { useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  TextField,
  Button,
  Typography,
  Box,
  Card,
  useTheme,
  TableHead,
  TableRow,
  CardHeader,
  Divider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import { CREATE_CARD_USER } from '@/apollo/queries/auth';
import { LoadingButton } from '@mui/lab';

const PersonalInfoForm = () => {
  const [createCardUser] = useMutation(CREATE_CARD_USER);

  const [formData, setFormData] = useState({
    agencyCode: '',
    pwid: ''
  });

  const [isLoading, setLoading] = React.useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.agencyCode) {
      toast.error('Enter Agency Code');
      return;
    }
    if (!formData.pwid) {
      toast.error('Enter PWID');
      return;
    }

    return true;
  };

  const theme = useTheme();

  const submitData = async () => {
    const isValid = validateForm();
    setLoading(true);
    if (isValid) {
      try {
        const resp = await createCardUser({
          variables: {
            address: [{ pincode: formData.pincode, address: formData.address }],
            email: formData.email,
            mobileNumber: formData.mobileNumber,
            name: formData.name,

            metaData: [{ aadhar: formData.aadhar, pancard: formData.pancard }]
          }
        });

        toast.success('Created Sucessfully');
        setFormData({
          pwid: '',
          agencyCode: ''
        });
      } catch (err) {
        toast.error(err.message);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Card sx={{ paddingY: 2 }}>
        <CardHeader title="Fills Details" />
        <Divider />
        <Box
          sx={{
            paddingX: 4,
            [theme.breakpoints.down('sm')]: {
              paddingX: 2
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              // width: "100%",
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginY: 2
              // width: '100%',
              // flexDirection: 'row',
              // flexWrap: 'wrap',
              // justifyContent: 'space-between',
              // gap: '1rem'
              // [theme.breakpoints.down('sm')]: {
              //   display: 'block',
              //   paddingInline: 1
              // }
            }}
          >
            <TextField
              sx={{ width: { xs: '100%', sm: '48%' } }}
              // sx={{ width: '49%', marginRight: '1%' }}
              required
              name="agencyCode"
              label="Agency Code"
              variant="outlined"
              value={formData.agencyCode}
              onChange={handleInputChange}
            />
            <TextField
              // sx={{ width: '49%', marginLeft: '1%' }}
              sx={{ width: { xs: '100%', sm: '48%' } }}
              required
              name="pwid"
              label="PWID"
              variant="outlined"
              value={formData.pwid}
              onChange={handleInputChange}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: 1,
              marginTop: 2
            }}
          >
            <LoadingButton
              loading={isLoading}
              onClick={submitData}
              variant="contained"
              type="submit"
            >
              Submit
            </LoadingButton>
          </Box>
          <Toaster position="bottom-right" reverseOrder={false} />
        </Box>
      </Card>
    </>
  );
};

export default PersonalInfoForm;

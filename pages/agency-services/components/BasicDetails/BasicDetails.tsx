import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';

import {
  TextField,
  Button,
  Typography,
  Box,
  Card,
  useTheme
} from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import { CREATE_CARD_USER } from '@/apollo/queries/auth';
import { LoadingButton } from '@mui/lab';
const PersonalInfoForm = ({ onAddUser, agencyCode }) => {
  const [createCardUser] = useMutation(CREATE_CARD_USER);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    pincode: '',
    address: '',
    metaData: '',
    aadhar: '',
    pancard: ''
  });
  const [isLoading, setLoading] = React.useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name) {
      toast.error('Enter Name');
      return;
    }
    if (!formData.email) {
      toast.error('Enter E-mail Id');
      return;
    }
    if (formData.mobileNumber.length !== 10) {
      toast.error('Enter Valid Mobile Number');
      return;
    }
    if (!formData.pincode) {
      toast.error('Enter Pincode');
      return;
    }
    if (!formData.address) {
      toast.error('Enter Address');
      return;
    }

    if (formData.aadhar.length !== 12) {
      toast.error('Enter Valid Adhar No');
      return;
    }
    if (formData.pancard.length !== 10) {
      toast.error('Enter Valid Pan No');
      return;
    }
    return true;
  };

  const theme = useTheme();

  const submitData = async () => {
    const isValid = validateForm();
    setLoading(true);
    if (isValid) {
      console.log('Enter');

      try {
        const resp = await createCardUser({
          variables: {
            address: [{ pincode: formData.pincode, address: formData.address }],
            email: formData.email,
            mobileNumber: formData.mobileNumber,
            name: formData.name,
            referralAgencyCode: 'RLI1234',
            metaData: [{ aadhar: formData.aadhar, pancard: formData.pancard }]
          }
        });

        onAddUser(resp?.data?.CreateUser);

        toast.success('User Created Sucessfully');
        setFormData({
          name: '',
          email: '',
          mobileNumber: '',
          pincode: '',
          address: '',
          metaData: '',
          aadhar: '',
          pancard: ''
        });
      } catch (err) {
        toast.error(err.message);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Card sx={{}}>
        <Typography
          fontSize={30}
          fontWeight={600}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          Please Fill User Details
        </Typography>
        <Box
          sx={{
            padding: 2,
            paddingInline: 8,
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            [theme.breakpoints.down('sm')]: {
              display: 'block',
              paddingInline: 1
            }
          }}
        >
          <Box sx={{ paddingY: 2 }}>
            <TextField
              sx={{ width: '49%', marginRight: '1%' }}
              required
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              sx={{ width: '49%', marginLeft: '1%' }}
              required
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Box>
          <Box sx={{ paddingY: 2 }}>
            <TextField
              sx={{ width: '49%', marginRight: '1%' }}
              required
              type="number"
              name="mobileNumber"
              label="Mobile Number"
              variant="outlined"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
            <TextField
              sx={{ width: '49%', marginLeft: '1%' }}
              required
              name="pincode"
              label="Pin Code"
              variant="outlined"
              value={formData.pincode}
              onChange={handleInputChange}
            />
          </Box>

          <TextField
            sx={{ width: '100%' }}
            required
            name="address"
            label="Address"
            variant="outlined"
            multiline
            rows={3}
            value={formData.address}
            onChange={handleInputChange}
          />
          <Box sx={{ paddingY: 2 }}>
            <TextField
              sx={{ width: '49%', marginRight: '1%' }}
              required
              type="number"
              name="aadhar"
              label="Aadhar No"
              variant="outlined"
              value={formData.aadhar}
              onChange={handleInputChange}
            />
            <TextField
              sx={{ width: '49%', marginLeft: '1%' }}
              required
              name="pancard"
              label="Pan No"
              variant="outlined"
              value={formData.pancard}
              onChange={handleInputChange}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
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
      </Card>
    </>
  );
};

export default PersonalInfoForm;

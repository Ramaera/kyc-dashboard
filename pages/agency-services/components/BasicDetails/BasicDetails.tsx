import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Card,
  useTheme
} from '@mui/material';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    pincode: '',
    address: '',
    aadhar: '',
    pancard: ''
  });

  const CheckData = {
    name: formData.name,
    email: formData.email,
    referralAgencyCode: 'RLI1234',
    address: [{ address: formData.address, pinCode: formData.pincode }],
    mobileNumber: formData.mobileNumber
  };

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

  const API_URL = `https://l83w6jqz-6768.inc1.devtunnels.ms/graphql`;
  const submitData = async () => {
    const isValid = validateForm();
    if (isValid) {
      await axios
        .post(API_URL, CheckData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          console.log('response', response);
        })
        .catch((error) => {
          console.log('ERRROR', error.message);
        });
    }
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
          <Button onClick={submitData} variant="contained" type="submit">
            Submit
          </Button>
        </Box>
        <Toaster />
      </Card>
    </>
  );
};

export default PersonalInfoForm;

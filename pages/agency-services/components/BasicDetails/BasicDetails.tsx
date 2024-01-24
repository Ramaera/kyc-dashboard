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
import { error } from 'console';
import { CommitSharp } from '@mui/icons-material';
import checkData from 'pages/agency-income/components/agenyIncomeStartMonth';

const PersonalInfoForm = ({
  nextStep,
  prevStep,
  formData: initialFormData
}: any) => {
  const [formData, setFormData] = useState(
    initialFormData || {
      name: '',
      email: '',
      mobileNumber: '',
      pincode: '',
      address: '',
      aadhar: '',
      pancard: ''
    }
  );

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
  const theme = useTheme();
  const handleSubmit = async (e) => {
    e.preventDefault();

  const API_URL = `http://localhost:6768/my-card/create-user`;
  const submitData = async () => {
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
  };

  return (
    <Card sx={{}}>
      <form onSubmit={submitData}>
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              sx={{ width: '49%', marginLeft: '1%' }}
              name="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Box>
          <Box sx={{ paddingY: 2 }}>
            <TextField
              sx={{ width: '49%', marginRight: '1%' }}
              name="mobileNumber"
              label="Mobile Number"
              variant="outlined"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
            {/* 
            <TextField
              sx={{ width: '49%', marginLeft: '1%' }}
              name="pincode"
              label="Pin Code"
              variant="outlined"
              value={formData.pincode}
              onChange={handleInputChange}
            /> */}
          </Box>

          <TextField
            sx={{ width: '100%' }}
            required
            name="address"
            label="Address"
            variant="outlined"
            multiline
            rows={3}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <Box sx={{ paddingY: 2 }}>
            {/* <TextField
              sx={{ width: '49%', marginRight: '1%' }}
              name="aadhar"
              label="Aadhar No"
              variant="outlined"
              value={formData.aadhar}
              onChange={handleInputChange}
            />
            <TextField
              sx={{ width: '49%', marginLeft: '1%' }}
              name="pancard"
              label="Pan No"
              variant="outlined"
              value={formData.pancard}
              onChange={handleInputChange}
            /> */}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Card>
  );
};

export default PersonalInfoForm;

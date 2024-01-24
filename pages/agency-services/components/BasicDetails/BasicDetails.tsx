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

const PersonalInfoForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');

  const theme = useTheme();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://l83w6jqz-6768.inc1.devtunnels.ms/my-card/create-user',
        { json: { name, email, address, mobileNumber } }
      );

      if (response.status === 200) {
        // Handle success, maybe navigate to the next step or show a success message
        console.log('User created successfully', response);
      } else {
        // Handle error, maybe show an error message
        console.error('Error creating user');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };

  return (
    <Card sx={{}}>
      <form onSubmit={handleSubmit}>
        <Typography
          fontSize={30}
          fontWeight={600}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          User Details
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

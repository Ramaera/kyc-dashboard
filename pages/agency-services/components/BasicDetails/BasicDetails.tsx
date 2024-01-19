import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Card } from '@mui/material';

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
  console.log('initialFormData', initialFormData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep(formData);
  };

  return (
    <Card sx={{}}>
      <form onSubmit={handleSubmit}>
        <Typography
          fontSize={30}
          fontWeight={600}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          Basic Details
        </Typography>
        <Box
          sx={{
            padding: 2,
            paddingInline: 8,
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap'
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
              name="mobileNumber"
              label="Mobile Number"
              variant="outlined"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />

            <TextField
              sx={{ width: '49%', marginLeft: '1%' }}
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
            />
          </Box>
        </Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', padding: 1 }}
        >
          <Button onClick={prevStep}>Back</Button>
          <Button type="submit" onClick={handleSubmit}>
            Next
          </Button>
        </Box>
      </form>
    </Card>
  );
};

export default PersonalInfoForm;

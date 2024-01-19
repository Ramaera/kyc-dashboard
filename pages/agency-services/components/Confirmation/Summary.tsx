import { Box, Button, TextField, Typography } from '@mui/material';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Summary = ({ prevStep, formData }: any) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    formData;
  };
  console.log('formData', formData);

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">Confirm Your All Details </h3>
      <Box className="bg-[#f6f6f6] px-3 py-2 rounded-md">
        <h3 className="text-lg font-bold my-2">Basic Details</h3>
        <Box
          style={{
            display: 'flex',
            gap: '1rem',
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: 20
          }}
        >
          <Typography>
            Card Type:- <span>{formData.cardtype}</span>
          </Typography>
          <PhotoProvider>
            <PhotoView src={formData['Payment_Proof'].preview}>
              <img
                src={formData['Payment_Proof'].preview}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '5px',
                  border: '1px solid lightgrey'
                }}
              />
            </PhotoView>
          </PhotoProvider>
          <TextField
            disabled
            name="name"
            label="Name"
            variant="outlined"
            className="w-full sm:w-[48%]"
            value={formData.name}
          />
          <TextField
            disabled
            name="email"
            label="Email"
            variant="outlined"
            className="w-full sm:w-[48%]"
            value={formData.email}
          />

          <TextField
            disabled
            name="mobileNumber"
            label="Mobile Number"
            variant="outlined"
            className="w-full sm:w-[48%]"
            value={formData.mobileNumber}
          />

          <TextField
            disabled
            name="pincode"
            label="Pin Code"
            variant="outlined"
            className="w-full sm:w-[48%]"
            value={formData.pincode}
          />
          <TextField
            disabled
            name="address"
            label="Address"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={formData.address}
            required
          />
          <TextField
            sx={{ width: '49%', marginRight: '1%' }}
            disabled
            name="aadhar"
            label="Aadhar No"
            variant="outlined"
            value={formData.aadhar}
          />
          <TextField
            sx={{ width: '49%', marginLeft: '1%' }}
            disabled
            name="pancard"
            label="Pan No"
            variant="outlined"
            value={formData.pancard}
          />
          <TextField
            disabled
            name="amount"
            label="amount"
            variant="outlined"
            className="w-full sm:w-[48%]"
            value={formData.amount}
          />
        </Box>
      </Box>

      <div className="flex justify-between mt-10">
        <Button variant="contained" color="inherit" onClick={prevStep}>
          Back
        </Button>
        <Button type="submit" onClick={handleSubmit}>
          Next
        </Button>{' '}
      </div>
    </div>
  );
};

export default Summary;

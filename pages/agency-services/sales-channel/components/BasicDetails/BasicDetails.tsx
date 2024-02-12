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
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox
} from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import { CREATE_CARD_USER } from '@/apollo/queries/auth';
import { LoadingButton } from '@mui/lab';
import Document from '../Documents/Document';
import SignatureCanvas from 'react-signature-canvas';

const PersonalInfoForm = () => {
  const signatureCanvasRef = useRef(null);

  const clearSignature = () => {
    signatureCanvasRef.current.clear();
  };

  // const saveSignature = () => {
  //   const signatureImage = signatureCanvasRef.current.toDataURL();
  //   console.log('Signature Image:', signatureImage);
  // };

  const [createCardUser] = useMutation(CREATE_CARD_USER);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    pancard: '',
    fssi: '',
    gst: '',
    address: '',
    metaData: ''
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
    if (formData.pancard.length !== 10) {
      toast.error('Enter Valid Pan No');
      return;
    }

    if (!formData.fssi) {
      toast.error('Enter FSSI No');
      return;
    }

    if (!formData.gst) {
      toast.error('Enter GST No');
      return;
    }

    if (!formData.address) {
      toast.error('Enter Address');
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
          name: '',
          email: '',
          mobileNumber: '',
          fssi: '',
          address: '',
          metaData: '',
          gst: '',
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
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              [theme.breakpoints.down('sm')]: {
                display: 'block',
                paddingInline: 1
              }
            }}
          >
            <Box sx={{ paddingTop: 2 }}>
              <Typography fontSize={18}>Select Type of Role</Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="CNF"
                    control={<Radio />}
                    label="CNF"
                  />
                  <FormControlLabel value="DB" control={<Radio />} label="DB" />
                  <FormControlLabel value="SS" control={<Radio />} label="SS" />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{ paddingTop: 2 }}>
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
            <Box sx={{ paddingTop: 2 }}>
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
                name="pancard"
                label="Pan No"
                variant="outlined"
                value={formData.pancard}
                onChange={handleInputChange}
              />
            </Box>

            <Box sx={{ paddingTop: 2 }}>
              <TextField
                sx={{ width: '49%', marginRight: '1%' }}
                required
                name="fssi"
                label="FSSI No"
                variant="outlined"
                value={formData.fssi}
                onChange={handleInputChange}
              />
              <TextField
                sx={{ width: '49%', marginLeft: '1%' }}
                required
                name="gst"
                label="GST No"
                variant="outlined"
                value={formData.gst}
                onChange={handleInputChange}
              />
            </Box>
            <Box sx={{ paddingY: 2 }}>
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
            </Box>
          </Box>
          <Box>
            <Document />
          </Box>

          <FormControlLabel
            required
            control={<Checkbox />}
            label="Accept Terms and Conditions "
          />

          <Box sx={{ border: 1 }}>
            <SignatureCanvas
              ref={signatureCanvasRef}
              penColor="white"
              canvasProps={{
                width: 500,
                height: 200,
                className: 'sigCanvas'
              }}
            />
          </Box>
          <Button onClick={clearSignature}>Clear Signature</Button>
          {/* <button onClick={saveSignature}>Save Signature</button> */}

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
        </Box>
      </Card>
    </>
  );
};

export default PersonalInfoForm;

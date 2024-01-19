import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  TextField,
  Box
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const steps = [{ label: 'Payment Proof', fields: ['Payment_Proof'] }];

const Documents = ({ nextStep, prevStep, formData: initialFormData }: any) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(
    initialFormData || {
      PaymentProof: { file: null, preview: null },
      Amount: ''
    }
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAmountChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log('formData', formData);
  const handleUpload = (field, file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const filePreview = event.target.result;

      setFormData({
        ...formData,
        [field]: {
          file: file,
          preview: filePreview,
          isPDF: file.type === 'application/pdf'
        }
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const isStepComplete = () => {
    return !!formData['Payment_Proof']?.file;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep(formData);
  };

  const getStepContent = () => {
    const currentStep = steps[activeStep];
    return (
      <Box className="flex flex-col sm:flex-row justify-between mt-10">
        {currentStep.fields.map((field, index) => (
          <Box
            key={index}
            className="flex flex-col justify-center items-center flex-wrap"
          >
            {formData[field] && formData[field].file ? (
              <Box className="border-2 rounded-lg w-52 h-52 my-2 justify-items-center flex justify-center items-center">
                {formData[field].isPDF ? (
                  <embed
                    src={formData[field].preview}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <img
                    src={formData[field].preview}
                    alt={field}
                    className="rounded-lg w-full h-full"
                  />
                )}
              </Box>
            ) : (
              <Box sx={{}}>
                <UploadFileIcon style={{ fontSize: 70 }} />
                <Typography fontSize={20}>No Document</Typography>
              </Box>
            )}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 3
              }}
            >
              <label htmlFor={`file-upload-${field}`}>
                <Button
                  variant="contained"
                  component="span"
                  sx={{
                    color: 'white',
                    textAlign: 'center',
                    padding: '10px 15px',
                    boxShadow: 0,
                    minWidth: '13rem'
                  }}
                >
                  Upload Payment Proof
                </Button>
              </label>
              <input
                id={`file-upload-${field}`}
                type="file"
                accept={'image/*,.pdf'}
                onChange={(e) => handleUpload(field, e.target.files[0])}
                style={{ display: 'none' }}
              />
            </Box>
            <Box sx={{ marginTop: 1 }}>
              <TextField
                name="amount"
                label="Amount"
                variant="outlined"
                value={formData.amount}
                onChange={handleAmountChange}
              />
            </Box>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Container>
      <Typography
        fontSize={30}
        fontWeight={600}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Payment Details
      </Typography>

      <Box>
        <Typography>{getStepContent()}</Typography>
      </Box>
      <Box sx={{ marginTop: 1 }}>
        <Button onClick={activeStep === 0 ? prevStep : handleBack}>Back</Button>

        <Button onClick={handleSubmit} disabled={!isStepComplete()}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default Documents;

'use client';

import { useState } from 'react';
import BasicDetails from '../BasicDetails/BasicDetails';
import MoreDetails from '../MoreDetails/MoreDetails';
import Summary from '../Confirmation/Summary';
import CardUi from '../cardUI/cardUI';
import CardPayment from '../CardPayment/CardPayment';
import { green } from '@mui/material/colors';
import { Box, Card } from '@mui/material';

const steps = [
  {
    label: 'CardUi',
    component: CardUi
  },
  {
    label: 'Basic Info',
    component: BasicDetails
  },
  {
    label: 'Payment',
    component: CardPayment
  },
  {
    label: 'Confirmation',
    component: Summary
  }
];

const StepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [completedSteps, setCompletedSteps] = useState([]);

  const CurrentStep = steps[step].component;

  const nextStep = (data: any) => {
    setFormData({ ...formData, ...data });
    setCompletedSteps([...completedSteps, step]);
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Box sx={{}}>
      <CurrentStep
        style={{ display: 'flex' }}
        nextStep={nextStep}
        prevStep={prevStep}
        formData={formData}
      />
    </Box>
  );
};

export default StepForm;

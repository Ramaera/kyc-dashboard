import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import CardUi from './components/cardUI/cardUI';
import {
  Box,
  Card,
  Container,
  Hidden,
  Typography,
  Button
} from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useState } from 'react';
import StepForm from './components/Stepper/StepForm';
function index() {
  const [showStepper, setShowStepper] = useState(false);

  const handleApplyCardClick = () => {
    setShowStepper(true);
  };

  return (
    <ProtectedSSRoute>
      <Head>
        <title>Agency Services</title>
      </Head>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '20%', padding: 2 }}>
          <Card sx={{ height: '100%', padding: 2 }}>
            <Button
              variant="contained"
              component="label"
              onClick={handleApplyCardClick}
            >
              Apply My Card
            </Button>
          </Card>
        </Box>

        {showStepper && (
          <Box
            sx={{
              width: '80%',

              padding: 2
            }}
          >
            <StepForm />
          </Box>
        )}
      </Box>

      <Footer />
    </ProtectedSSRoute>
  );
}

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default index;

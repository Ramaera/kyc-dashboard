import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import CardUi from './components/cardUI/cardUI';
import {
  Box,
  Card,
  Container,
  Hidden,
  Typography,
  Button,
  useTheme
} from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useState } from 'react';
// import StepForm from './components/Stepper/StepForm';
import BasicDetails from './components/BasicDetails/BasicDetails';
import UserTable from './components/UserTable';
import { useRouter } from 'next/router';
function index() {
  const [currentPage, setCurrentPage] = useState(true);
  const [showStepper, setShowStepper] = useState(currentPage);
  const [showTable, setshowTable] = useState(!currentPage);
  // const router = useRouter();

  const handleShowTableClick = () => {
    setshowTable(true);
    setShowStepper(false);
  };

  const handleApplyCardClick = () => {
    setShowStepper(true);
    setshowTable(false);
  };
  const theme = useTheme();

  return (
    <ProtectedSSRoute>
      <Head>
        <title>Agency Services</title>
      </Head>
      <Box
        sx={{
          display: 'flex',
          [theme.breakpoints.down('sm')]: {
            display: 'block'
          }
        }}
      >
        <Box
          sx={{
            width: '25%',
            padding: 2,
            [theme.breakpoints.down('sm')]: {
              width: '100%'
            }
          }}
        >
          <Card sx={{ height: '100%', padding: 4 }}>
            <Button
              variant="contained"
              component="label"
              onClick={handleApplyCardClick}
            >
              Create #myCard User Profile
            </Button>
            <Button
              sx={{ marginTop: 2 }}
              variant="contained"
              component="label"
              onClick={handleShowTableClick}
            >
              Users Applied
            </Button>
          </Card>
        </Box>
        {showTable && (
          <Box
            sx={{
              width: '75%',

              padding: 2,
              [theme.breakpoints.down('sm')]: {
                width: '100%'
              }
            }}
          >
            <UserTable />
          </Box>
        )}

        {showStepper && (
          <Box
            sx={{
              width: '80%',

              padding: 2,
              [theme.breakpoints.down('sm')]: {
                width: '100%'
              }
            }}
          >
            <BasicDetails />
          </Box>
        )}
      </Box>

      <Footer />
    </ProtectedSSRoute>
  );
}

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default index;

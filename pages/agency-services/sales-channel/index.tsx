import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
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
import BasicDetails from './components/BasicDetails/BasicDetails';

function index() {
  const theme = useTheme();

  return (
    <ProtectedSSRoute>
      <Head>
        <title>Agency Services</title>
      </Head>

      <Box padding={2} textAlign={'center'}>
        <Typography fontSize={30} fontWeight={600}>
          Sales Channel
        </Typography>
      </Box>
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
            width: '75%',
            padding: 2,
            [theme.breakpoints.down('sm')]: {
              width: '100%'
            }
          }}
        >
          <BasicDetails />
        </Box>

        <Box
          sx={{
            width: '25%',
            padding: 2,
            [theme.breakpoints.down('sm')]: {
              width: '100%'
            }
          }}
        >
          <Card sx={{ height: '100%', padding: 2 }}>TERMS CONDITIONS</Card>
        </Box>
      </Box>

      <Footer />
    </ProtectedSSRoute>
  );
}

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default index;

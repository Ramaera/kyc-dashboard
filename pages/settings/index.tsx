import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  Typography
} from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useState } from 'react';

function index() {
  const [currentButton, setCurrentButton] = useState('');
  return (
    <ProtectedSSRoute>
      <Head>
        <title>Settings</title>
      </Head>
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Card variant="outlined">
          <CardHeader
            title={'SETTINGS'}
            sx={{
              ml: 2,
              textTransform: 'uppercase'
            }}
          />
          <Divider />
          <Container style={{ padding: '2rem' }}>
            <Link href="settings/change">
              <Button variant="contained">Change Password</Button>
            </Link>
            <Button
              variant="contained"
              onClick={() => {
                setCurrentButton((val) => (val === 'nominee' ? '' : 'nominee'));
              }}
              sx={{ ml: 2 }}
            >
              Request a Nominee Change
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setCurrentButton((val) => (val === 'support' ? '' : 'support'));
              }}
              sx={{ ml: 2 }}
            >
              Support
            </Button>
            {currentButton === 'nominee' && (
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  marginTop: 2,
                  marginBottom: 2
                }}
                gutterBottom
              >
                To change nominee Please Contact Us on 0120-4152818
              </Typography>
            )}
            {currentButton === 'support' && (
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  marginTop: 2,
                  marginBottom: 2
                }}
                gutterBottom
              >
                Please Contact Us on 0120-4152818
              </Typography>
            )}
          </Container>
        </Card>
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}
index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default index;

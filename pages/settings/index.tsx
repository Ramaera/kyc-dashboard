import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useState } from 'react';

function index() {
  const theme = useTheme();
  const [currentButton, setCurrentButton] = useState('');
  const [supportText, setSupportText] = useState('');
  return (
    <ProtectedSSRoute>
      <Head>
        <title>Settings</title>
      </Head>
      <Container maxWidth={false} sx={{ mt: 2 }}>
        <Card variant="outlined">
          <CardHeader
            title={'SETTINGS'}
            sx={{
              ml: 2,
              textTransform: 'uppercase'
            }}
          />
          <Divider />
          <Box
            sx={{
              padding: '2rem',
              display: 'flex',
              gap: 2,
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
              }
            }}
          >
            <Link href="settings/change">
              <Button variant="contained">Change Password</Button>
            </Link>
            <Button
              variant="contained"
              onClick={() => {
                setCurrentButton((val) => (val === 'nominee' ? '' : 'nominee'));
              }}
            >
              Request a Nominee Change
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setCurrentButton((val) => (val === 'support' ? '' : 'support'));
              }}
            >
              Support
            </Button>
          </Box>
          <Box sx={{ marginBottom: 4, marginX: 4 }}>
            {currentButton === 'nominee' && (
              <>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    marginTop: 2,
                    marginBottom: 2
                  }}
                  gutterBottom
                >
                  To change nominee Please Contact Us on 0120-4152818
                </Typography>
              </>
            )}
            {currentButton === 'support' && (
              <Box>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    marginTop: 2,
                    marginBottom: 2
                  }}
                  gutterBottom
                >
                  Please Contact Us on 0120-4152818
                </Typography>
                <TextField
                  label="Type your queries here"
                  multiline
                  rows={8}
                  value={supportText}
                  onChange={(e) => {
                    setSupportText(e.target.value);
                  }}
                  sx={{
                    width: '50%',
                    [theme.breakpoints.down('sm')]: {
                      width: '100%'
                    }
                  }}
                />
                <br />
                <Button
                  variant="contained"
                  sx={{ marginTop: 4 }}
                  disabled={!supportText}
                >
                  Submit
                </Button>
              </Box>
            )}
          </Box>
        </Card>
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}
index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default index;

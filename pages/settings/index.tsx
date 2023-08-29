import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Button, Card, CardHeader, Container, Divider } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';

function index() {
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
            <Button variant="contained" sx={{ ml: 2 }}>
              Request a Nominee Change
            </Button>
          </Container>
        </Card>
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}
index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default index;

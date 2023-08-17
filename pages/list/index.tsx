import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import Head from 'next/head';
import { Container } from '@mui/material';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import UserTable from './components/UserTable';

function index() {
  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC User</title>
      </Head>
      <Container sx={{ mt: 2 }} maxWidth="lg">
        <UserTable />
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default index;

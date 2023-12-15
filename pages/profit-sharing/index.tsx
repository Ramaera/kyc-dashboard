import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import UserTable from './components/UserTable';

function index() {
  return (
    <ProtectedSSRoute>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Container sx={{ mt: 2 }} maxWidth={false}>
        <UserTable />
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default index;

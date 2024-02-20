import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
// import UserTable from './components/UserTable';
import OperationData from './components/OperationData';

function index() {
  return (
    <ProtectedSSRoute>
      <Head>
        <title>Project Operation Report </title>
      </Head>
      <OperationData />
      <Footer />
    </ProtectedSSRoute>
  );
}

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default index;

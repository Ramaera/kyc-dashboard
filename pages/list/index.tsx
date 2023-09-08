import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import Head from 'next/head';
import { Container } from '@mui/material';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import UserTable from './components/UserTable';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_USERS } from '@/apollo/queries/auth';
import { setAllTheUsers, gotData } from '@/state/slice/allUsersSlice';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

function index() {
  const [seed, setSeed] = useState(1);

  let usersList = useSelector((state: any) => state.allUsers.allTheUsers);

  const dispatch = useDispatch();
  const { data, refetch } = useQuery(GET_ALL_USERS);

  const reset = () => {
    setSeed(Math.random());
  };
  useEffect(() => {
    if (data && !usersList[0]) {
      dispatch(setAllTheUsers(data.getAllUser));
      dispatch(gotData(true));
    }
  }, [data]);

  const refetchTheData = () => {
    reset();
    refetch();
  };
  return (
    <ProtectedSSRoute>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Container sx={{ mt: 2 }} maxWidth="lg">
        <UserTable key={seed} refetchData={refetchTheData} />
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default index;

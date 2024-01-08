import { GET_ALL_AGENCY_USERS } from '@/apollo/queries/auth';
import Footer from '@/components/Footer';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import SidebarLayout from '@/layouts/SidebarLayout';
import { setAllTheUsers } from '@/state/slice/allUsersSlice';
import { useQuery } from '@apollo/client';
import { Container, Typography } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserTable from './components/UserTable';
import Loading from '@/components/Loading';

function DashboardTasks() {
  const dispatch = useDispatch();
  const foundUser = useSelector((state: any) => state.foundUser.foundUser);
  const agencyCode = useSelector((state: any) => state.user?.agencyCode);

  const { loading, error, data, refetch } = useQuery(GET_ALL_AGENCY_USERS, {
    variables: {
      agencyCode: agencyCode
    }
  });

  useEffect(() => {
    refetch();
  }, [foundUser]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    dispatch(setAllTheUsers(data.GetAllKycAgencyUser));
  }

  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Users</title>
      </Head>
      <PageTitleWrapper>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            textTransform: 'uppercase',
            marginTop: 1,
            marginBottom: 1
          }}
          gutterBottom
        >
          Member Dashboard
        </Typography>
      </PageTitleWrapper>
      <Container maxWidth={false}>
        <UserTable />
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}

DashboardTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;

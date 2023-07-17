import { GET_ALL_AGENCY_USERS } from '@/apollo/queries/auth';
import { GET_ALL_KYC_HANDLER } from '@/apollo/queries/updateUser';
import Footer from '@/components/Footer';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
  setAllKycHandlerList,
  setAllTheUsers
} from '@/state/slice/allUsersSlice';
import { useQuery } from '@apollo/client';
import { Container, Typography } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserTable from './components/UserTable';

function DashboardTasks() {
  const dispatch = useDispatch();
  const foundUser = useSelector((state) => state.foundUser.foundUser);
  const agencyCode = useSelector((state) => state.user.agencyCode);

  const [currentTab, setCurrentTab] = useState<string>('basicInfo');
  const tabs = [
    { value: 'basicInfo', label: 'Basic Info' },
    { value: 'payment', label: 'Payment' },
    { value: 'documents', label: 'Documents' },
    { value: 'nominee', label: 'Nominee' }
  ];
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const { loading, error, data, refetch } = useQuery(GET_ALL_AGENCY_USERS, {
    variables: {
      agencyCode: agencyCode
    }
  });
  const kycHandlersList = useQuery(GET_ALL_KYC_HANDLER);

  // const SetALLUSERS useSelector((state) => state.allUsers.allTheUsers)
  // console.log(useSelector((state) => state.allUsers.allTheUsers));
  useEffect(() => {
    refetch();
  }, [foundUser]);
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '90vh',
          alignItems: 'center'
        }}
      >
        <h2>Loading...</h2>
        <img src="" />
      </div>
    );
  }
  if (error) {
    return <h3>error</h3>;
  }
  if (data) {
    dispatch(setAllTheUsers(data.GetAllKycAgencyUser));
  }
  if (kycHandlersList.data) {
    // console.log('kycHandlersList', kycHandlersList.data.getAllKycHandler);
    dispatch(setAllKycHandlerList(kycHandlersList.data.getAllKycHandler));
  }

  //console.log(helloW);

  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Users</title>
      </Head>
      <PageTitleWrapper>
        <Typography
          variant="h3"
          component="h3"
          sx={{ textTransform: 'uppercase', marginTop: 2, marginBottom: 2 }}
          gutterBottom
        >
          Agency Dashboard
        </Typography>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <UserTable />
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}

DashboardTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;

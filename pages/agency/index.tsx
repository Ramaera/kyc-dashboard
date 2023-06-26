import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import { ChangeEvent, useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { GET_ALL_AGENCY_USERS } from '@/apollo/queries/auth';
import { GET_ALL_KYC_HANDLER } from '@/apollo/queries/updateUser';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAllTheUsers,
  setAllKycHandlerList
} from '@/state/slice/allUsersSlice';
import {
  Grid,
  Tab,
  Tabs,
  Container,
  Card,
  Box,
  useTheme,
  styled,
  Typography
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';

import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import RecentOrdersTable from '@/content/Management/Transactions/RecentOrdersTable';
import UserTable from './components/UserTable';
import PageHeader from '@/content/Dashboards/Kyc/PageHeader';

function DashboardTasks() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const foundUser = useSelector((state) => state.foundUser.foundUser);

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
      agencyCode: 'RIL36938'
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
        <Typography>All Users</Typography>
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

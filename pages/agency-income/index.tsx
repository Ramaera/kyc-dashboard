// import { GetAllUser } from '@/apollo/queries/auth';
// import { GET_ALL_KYC_HANDLER } from '@/apollo/queries/updateUser';
import Footer from '@/components/Footer';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
  setAllKycHandlerList,
  setAllTheUsers
} from '@/state/slice/allUsersSlice';
import { useQuery } from '@apollo/client';
import { Container } from '@mui/material';
import Head from 'next/head';
import { useDispatch } from 'react-redux';

import Loading from '@/components/Loading';
import PageHeader from '@/content/Dashboards/Kyc/PageHeader';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import UserTable from './components/UserTable';

function DashboardTasks() {
  // const dispatch = useDispatch();
  // const foundUser = useSelector((state: any) => state.foundUser.foundUser);
  // const { loading, error, data } = useQuery(GetAllUser);
  // const kycHandlersList = useQuery(GET_ALL_KYC_HANDLER);

  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <h3>error</h3>;
  // }
  // if (data) {
  //   // console.log('all users', data.getAllUser);
  //   dispatch(setAllTheUsers(data.getAllUser));
  // }
  // if (kycHandlersList) {

  //   // console.log('kycHandlersList', kycHandlersList.data.getAllKycHandler);
  //   dispatch(setAllKycHandlerList(kycHandlersList.data.getAllKycHandler));
  // }

  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Users</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
        {/* // todo place filters here */}
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

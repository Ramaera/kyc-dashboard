import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import { ChangeEvent, useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { GET_ALL_USERS } from '@/apollo/queries/auth';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';

import {
  Grid,
  Tab,
  Tabs,
  Container,
  Card,
  Box,
  useTheme,
  styled
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';

import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import RecentOrdersTable from '@/content/Management/Transactions/RecentOrdersTable';
import UserTable from './components/UserTable';
import { setAllTheUsersForList } from '@/state/slice/allUsersSlice';
// import PageHeader from '@/content/Dashboards/Kyc/PageHeader';

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      padding: 0 ${theme.spacing(2)};
      position: relative;
      bottom: -1px;

      .MuiTabs-root {
        height: 44px;
        min-height: 44px;
      }

      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          min-height: 4px;
          height: 4px;
          box-shadow: none;
          bottom: -4px;
          background: none;
          border: 0;

          &:after {
            position: absolute;
            left: 50%;
            width: 28px;
            content: ' ';
            margin-left: -14px;
            background: ${theme.colors.primary.main};
            border-radius: inherit;
            height: 100%;
          }
      }

      .MuiTab-root {
          &.MuiButtonBase-root {
              height: 44px;
              min-height: 44px;
              background: ${theme.colors.alpha.white[50]};
              border: 1px solid ${theme.colors.alpha.black[10]};
              border-bottom: 0;
              position: relative;
              margin-right: ${theme.spacing(1)};
              font-size: ${theme.typography.pxToRem(14)};
              color: ${theme.colors.alpha.black[80]};
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;

              .MuiTouchRipple-root {
                opacity: .1;
              }

              &:after {
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                bottom: 0;
                height: 1px;
                content: '';
                background: ${theme.colors.alpha.black[10]};
              }

              &:hover {
                color: ${theme.colors.alpha.black[100]};
              }
          }
          
          &.Mui-selected {
            color: ${theme.colors.alpha.black[100]};
            background: ${theme.colors.alpha.white[100]};
            border-bottom-color: ${theme.colors.alpha.white[100]};
            
            &:after {
              height: 0;
            }
          }
        }
        `
);

function index() {
  const dispatch = useDispatch();

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

  const getAllUser = useQuery(GET_ALL_USERS);

  // const SetALLUSERS useSelector((state) => state.allUsers.allTheUsers)
  // console.log(useSelector((state) => state.allUsers.allTheUsers));
  if (getAllUser.data) {
    dispatch(setAllTheUsersForList(getAllUser.data.getAllUser));
    // dispatch(setAllKycHandlerList(kycHandlersList.data.getAllKycHandler));
  }

  //console.log(helloW);

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

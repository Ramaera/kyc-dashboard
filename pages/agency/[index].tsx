import 'react-photo-view/dist/react-photo-view.css';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import { ChangeEvent, useEffect, useState } from 'react';
import PageHeader from '@/content/Dashboards/Kyc/PageHeader';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import {
  Grid,
  Tab,
  Tabs,
  Container,
  Card,
  Box,
  styled,
  useTheme
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import InfoTab from './Tabs/Info';
import DematTab from './Tabs/Demat';
import PaymentTab from './Tabs/Payment';
import Projects from './Tabs/Projects';
import DocumentTab from './Tabs/Documents';
import NomineeTab from './Tabs/Nominee';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useSelector, useDispatch } from 'react-redux';
import { setFoundUser } from '@/state/slice/foundUserSlice';

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

function DashboardTasks() {
  const router = useRouter();
  const theme = useTheme();
  const dispatch = useDispatch();
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);
  const { index } = router.query;
  const foundUser = usersList.find((user) => user?.id === index);
  useEffect(() => {
    if (foundUser) {
      dispatch(setFoundUser(foundUser));
    }
  }, []);

  const [currentTab, setCurrentTab] = useState<string>('basicInfo');

  const tabs = [
    { value: 'basicInfo', label: 'Basic Info' },
    { value: 'payment', label: 'Payment' },
    { value: 'projects', label: 'Projects' },
    { value: 'documents', label: 'Documents' },
    { value: 'nominee', label: 'Nominee' },
    { value: 'demat', label: 'Demat Account Details' }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Agency Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth={false}>
        <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </TabsContainerWrapper>
        <Card variant="outlined">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
          >
            {currentTab === 'basicInfo' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <InfoTab />
                </Box>
              </Grid>
            )}

            {currentTab === 'payment' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <PaymentTab />
                </Box>
              </Grid>
            )}
            {currentTab === 'projects' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <Projects />
                </Box>
              </Grid>
            )}

            {currentTab === 'documents' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <DocumentTab />
                </Box>
              </Grid>
            )}

            {currentTab === 'nominee' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <NomineeTab />
                </Box>
              </Grid>
            )}
            {currentTab === 'demat' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <DematTab />
                </Box>
              </Grid>
            )}
          </Grid>
        </Card>
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}

DashboardTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;

import Footer from '@/components/Footer';
import PageHeader from '@/content/Dashboards/Kyc/PageHeader';
import SidebarLayout from '@/layouts/SidebarLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
// import userData from '../data.json';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { setFoundUser } from '@/state/slice/foundUserSlice';
import { Box, Card, Container, Grid, Tab, Tabs, styled } from '@mui/material';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import StepForm from './components/Stepper/StepForm';
import CardUI from './components/cardUI/cardUI';
// import DocumentTab from './Tabs/Documents';
// import InfoTab from './Tabs/Info';
// import NomineeTab from './Tabs/Nominee';
// import PaymentTab from './Tabs/Payment';
// import Projects from './Tabs/Projects';

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
  const dispatch = useDispatch();
  // console.log(router?.query?.payment);
  //const usersList = userData;
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);
  //spread ... userList and add the updated user to itthen change it
  const { index } = router.query;
  const foundUser = usersList.find((user) => user.id === index);
  // console.log(foundUser.date_of_birth.length);
  useEffect(() => {
    if (foundUser) {
      dispatch(setFoundUser(foundUser));
    }
  }, []);

  // console.log('foundUser [index]', foundUser);

  const [currentTab, setCurrentTab] = useState<string>('cardui');

  const tabs = [
    { value: 'cardui', label: 'Cards' }
    //{ value: 'payment', label: 'Payment' },
    // { value: 'projects', label: 'Projects' },
    // { value: 'documents', label: 'Documents' },
    // { value: 'nominee', label: 'Nominee' },
    // { value: 'demat', label: 'Demat Account Details' }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  useEffect(() => {
    router.query.payment && setCurrentTab('projects');
  }, []);

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
            {currentTab === 'cardui' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <CardUI />
                </Box>
              </Grid>
            )}

            {/* {currentTab === 'payment' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <PaymentTab />
                </Box>
              </Grid>
            )}
            {currentTab === 'upgradeKyc' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <ToAdvance />
                </Box>
              </Grid>
            )}
            {currentTab === 'projects' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <Projects to={router.query.payment} />
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
            )} */}
          </Grid>
        </Card>
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}

DashboardTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;

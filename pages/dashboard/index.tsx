import Footer from '@/components/Footer';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import PageHeader from '@/content/Dashboards/Kyc/PageHeader';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Box, Card, Container, Grid, styled, Tab, Tabs } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DematTab from './Tabs/Demat';
import DocumentTab from './Tabs/Documents';
import GetAgency from './Tabs/GetAgency';
import InfoTab from './Tabs/Info';
import NomineeTab from './Tabs/Nominee';
import PaymentTab from './Tabs/Payment';
import ToAdvance from './Tabs/ToAdvance';

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }
      
  `
);

function DashboardTasks() {
  const user = useSelector((state: any) => state.user?.data);
  const [currentTab, setCurrentTab] = useState<string>('basicInfo');
  const upgradeToAdvance = useSelector(
    (state: any) => state.foundUser.toAdvance
  );
  const mobile = useMediaQuery('(max-width:600px)');

  /*   const tabsAdvance = [
    { value: 'basicInfo', label: 'Basic Info' },
    { value: 'payment', label: 'Payment' },
    { value: 'documents', label: 'Documents' },
    { value: 'nominee', label: 'Nominee' },
    { value: 'demat', label: 'Demat Account Details' },
    { value: 'getAgency', label: 'KYC Agency' }
  ]; */
  const tabs = [
    { value: 'basicInfo', label: 'Basic Info' },
    { value: 'payment', label: 'Payment' },
    { value: 'upgradeKyc', label: 'Upgrade KYC' },
    { value: 'documents', label: 'Documents' },
    { value: 'nominee', label: 'Nominee' },
    { value: 'demat', label: 'Demat Account Details' },
    { value: 'getAgency', label: 'KYC Agency' }
  ];
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  useEffect(() => {
    if (upgradeToAdvance) {
      setCurrentTab('upgradeKyc');
    }
  }, [upgradeToAdvance]);

  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            textColor="primary"
            visibleScrollbar={true}
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab
                style={{ fontSize: mobile ? 12 : 14 }}
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
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
            {currentTab === 'upgradeKyc' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <ToAdvance />
                </Box>
              </Grid>
            )}
            {currentTab === 'getAgency' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <GetAgency />
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

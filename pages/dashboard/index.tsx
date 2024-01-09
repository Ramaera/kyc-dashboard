import Countdown from '@/components/Countdown';
import Footer from '@/components/Footer';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import PageHeader from '@/content/Dashboards/Kyc/PageHeader';
import SidebarLayout from '@/layouts/SidebarLayout';

import {
  Box,
  Button,
  Card,
  Container,
  Dialog,
  // Dialog,
  Grid,
  Paper,
  styled,
  Tab,
  Tabs,
  useTheme
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DematTab from './Tabs/Demat';
import DocumentTab from './Tabs/Documents';
import DSC from './Tabs/DSC';
import InfoTab from './Tabs/Info';
import NomineeTab from './Tabs/Nominee';
import PaymentTab from './Tabs/Payment';

const TabsContainerWrapper = styled(Box)(
  () => `
      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }
      
  `
);

function DashboardTasks() {
  const theme = useTheme();
  // const user = useSelector((state: any) => state.user?.data);
  const [currentTab, setCurrentTab] = useState<string>('basicInfo');
  const [open, setOpen] = useState<boolean>(true);

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
    { value: 'documents', label: 'Documents' },
    { value: 'nominee', label: 'Nominee' },
    { value: 'demat', label: 'Demat Account Details' },
    { value: 'dsc', label: 'DSC' }
  ];
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  useEffect(() => {
    if (upgradeToAdvance) {
      setCurrentTab('upgradeKyc');
    }
  }, [upgradeToAdvance]);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    var countDownDate = new Date('Dec 22, 2023 23:59:59').getTime();
    // console.log(countDownDate);
    var now = new Date().getTime();
    if (countDownDate > now) {
      setOpen(true);
    }
  }, []);
  setTimeout(function () {
    setOpen(false);
  }, 10000);
  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth={false}>
        <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant={mobile ? 'fullWidth' : 'scrollable'}
            textColor="primary"
            visibleScrollbar={true}
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab
                style={{ fontSize: mobile ? 8 : 14 }}
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
                <Box
                  p={4}
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      padding: 1
                    }
                  }}
                >
                  <PaymentTab />
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
                <Box
                  p={4}
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      padding: 1
                    }
                  }}
                >
                  <DematTab />
                </Box>
              </Grid>
            )}
            {currentTab === 'dsc' && (
              <Grid item xs={12}>
                <Box p={4}>
                  <DSC />
                </Box>
              </Grid>
            )}
          </Grid>
        </Card>
        <Dialog onClose={handleClose} open={open}>
          <Box zIndex={1000}></Box>

          <Grid component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 2,
                p: 1,
                mx: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'visible'
              }}
            >
              <Countdown />

              <Button
                color="error"
                onClick={handleClose}
                fullWidth
                variant="outlined"
                sx={{ mt: 0, mb: 2 }}
              >
                Cancel
              </Button>
            </Box>
          </Grid>
        </Dialog>
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}

DashboardTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;

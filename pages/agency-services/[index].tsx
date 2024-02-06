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
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  styled,
  useTheme
} from '@mui/material';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import CardUI from './components/cardUI/cardUI';
import { useQuery } from '@apollo/client';
import { FIND_CARD_OF_A_USER } from '@/apollo/queries/auth';
import CardRamaera from './components/CardRamaera';
import CardBenefits from './components/CardPayment/components/cardBenefits';
import PaymentDetails from './components/CardPayment/components/paymentDetails';
import UploadCardPayment from './components/CardPayment/components/uploadCardPayment';
import toast, { Toaster } from 'react-hot-toast';

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

function DashboardTasks(props: any) {
  const router = useRouter();
  const { index } = router.query;

  const changeTab = (tabName) => {
    // console.log('HHHHEHHH', tabName);
    setCurrentTab(tabName);
  };

  const [selectedTab, setSelectedTab] = useState(
    index.toString().split('&')[1]
  );
  const cardIndex = index.toString().split('&')[0];
  const [currentTab, setCurrentTab] = useState<string>(selectedTab);
  const [currentSubTab, setCurrentSubTab] = useState('card_0');
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);
  const foundUser = usersList.find((user) => user.id === cardIndex);
  const theme = useTheme();
  // console.log('currentTab', currentTab);
  const dispatch = useDispatch();

  const tabs = [
    { value: 'cardui', label: 'Cards' },
    { value: 'viewcard', label: 'View Card' }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const handleSubTabsChange = (event, newValue) => {
    setCurrentSubTab(newValue);
  };
  const { data, refetch } = useQuery(FIND_CARD_OF_A_USER, {
    variables: { userId: cardIndex }
  });
  const CardsOfAUser = data;
  console.log('CardsOfAUser', CardsOfAUser?.findCardOfaUser);

  useEffect(() => {
    refetch();
  }, [currentTab]);

  useEffect(() => {
    if (foundUser) {
      dispatch(setFoundUser(foundUser));
    }
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
                <Box>
                  <CardUI
                    changeTab={changeTab}
                    currentTab={currentTab}
                    cardId={cardIndex}
                  />
                </Box>
              </Grid>
            )}
            {currentTab === 'viewcard' && (
              <>
                {CardsOfAUser?.findCardOfaUser?.length > 0 ? (
                  <Grid item xs={12}>
                    <Box p={4}>
                      <Tabs
                        value={currentSubTab}
                        variant="scrollable"
                        scrollButtons="auto"
                        textColor="primary"
                        indicatorColor="primary"
                        onChange={handleSubTabsChange}
                      >
                        {CardsOfAUser?.findCardOfaUser?.map((card, index) => (
                          <Tab
                            key={`card_${index}`}
                            label={`card-${index + 1}`}
                            value={`card_${index}`}
                          />
                        ))}
                      </Tabs>
                      {CardsOfAUser?.findCardOfaUser?.map((card, index) => (
                        <div key={`card_content_${index}`}>
                          {currentSubTab === `card_${index}` && (
                            <Box
                              sx={
                                {
                                  // padding: 5
                                }
                              }
                            >
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between'
                                }}
                              >
                                <Box sx={{ display: 'flex' }}>
                                  <CardRamaera
                                    key={`card_ramaera_${index}`}
                                    id={card?.id}
                                    type={card?.cardType}
                                    cardNumber={card?.cardNumber}
                                    expiry={card?.cardValidity}
                                  />
                                  <CardBenefits
                                    key={`card_benefits_${index}`}
                                    id={card?.id}
                                    type={card?.cardType}
                                    amountYouGet={card?.cardValue}
                                    validUpto={card?.cardValidity}
                                    redeemAmount={card?.maxDiscount}
                                  />
                                </Box>
                                <Box
                                  sx={{
                                    display: 'flex'
                                  }}
                                >
                                  <Typography sx={{ fontSize: 20 }}>
                                    Card Status:
                                  </Typography>
                                  <Typography
                                    marginLeft={1}
                                    sx={{ fontSize: 20 }}
                                  >
                                    {card?.isActive === true
                                      ? 'Active'
                                      : 'Not Active'}
                                  </Typography>
                                </Box>
                              </Box>
                              <Box
                                marginTop={1}
                                sx={{
                                  display: 'flex',
                                  [theme.breakpoints.down('sm')]: {
                                    flexDirection: 'column'
                                  }
                                }}
                              >
                                <Box sx={{}}>
                                  <PaymentDetails docStatus={undefined} />
                                </Box>
                                <Box
                                  sx={{
                                    marginLeft: 10,
                                    [theme.breakpoints.down('sm')]: {
                                      marginLeft: 0
                                    }
                                  }}
                                >
                                  <UploadCardPayment
                                    key={`card_payment_${index}`}
                                    cardId={card?.id}
                                    cardNumber={card?.cardNumber}
                                    cardPaymentDocuments={card.Documents}
                                  />
                                </Box>
                              </Box>
                            </Box>
                          )}
                        </div>
                      ))}
                    </Box>
                  </Grid>
                ) : (
                  <Box>
                    <Typography>No card </Typography>
                  </Box>
                )}
              </>
            )}
          </Grid>
        </Card>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            success: {
              duration: 5000
            }
          }}
        />
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}

DashboardTasks.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardTasks;

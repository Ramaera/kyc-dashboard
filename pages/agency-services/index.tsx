import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import CardUi from './components/cardUI/cardUI';
import {
  Box,
  Card,
  Container,
  Hidden,
  Typography,
  Button,
  useTheme
} from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import { useEffect, useState } from 'react';
// import StepForm from './components/Stepper/StepForm';
import BasicDetails from './components/BasicDetails/BasicDetails';
import UserTable from './components/UserTable';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { CARD_USERS_DETAIL } from '@/apollo/queries/auth';
import { useSelector } from 'react-redux';
function index() {
  const [currentPage, setCurrentPage] = useState(true);
  const [showStepper, setShowStepper] = useState(currentPage);
  const [showTable, setshowTable] = useState(!currentPage);
  // console.log('showTable', showTable);
  const [users, setUsers] = useState([]);
  const agencyCode = useSelector(
    (state: any) => state.user?.agencyCode?.agencyCode
  );
  // console.log('agencyCode', agencyCode);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const cardUserData = useQuery(CARD_USERS_DETAIL, {
    variables: { agencyCode: agencyCode }
  });

  useEffect(() => {
    if (cardUserData) {
      setUsers(cardUserData.data?.findCardHoldersInAgency);
    }
  }, [cardUserData]);
  // console.log('esdrfcghvbjnk', agencyCode);
  // const router = useRouter();

  const handleShowTableClick = () => {
    setshowTable(true);
    setShowStepper(false);
  };

  const handleApplyCardClick = () => {
    setShowStepper(true);
    setshowTable(false);
  };
  const theme = useTheme();

  return (
    <ProtectedSSRoute>
      <Head>
        <title>Agency Services</title>
      </Head>

      <Box padding={2} textAlign={'center'}>
        <Typography fontSize={30} fontWeight={600}>
          #MyCard
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          [theme.breakpoints.down('sm')]: {
            display: 'block'
          }
        }}
      >
        <Box
          sx={{
            width: '25%',
            padding: 2,
            [theme.breakpoints.down('sm')]: {
              width: '100%'
            }
          }}
        >
          <Card sx={{ height: '100%', padding: 2 }}>
            <Button
              variant={!showTable ? 'contained' : 'outlined'}
              component="label"
              onClick={handleApplyCardClick}
              sx={{ width: '100%' }}
            >
              Create #myCard User
            </Button>
            <Button
              sx={{ marginTop: 2, width: '100%' }}
              variant={showTable ? 'contained' : 'outlined'}
              component="label"
              onClick={handleShowTableClick}
            >
              Users Applied
            </Button>
          </Card>
        </Box>
        {showTable && (
          <Box
            sx={{
              width: '75%',

              padding: 2,
              [theme.breakpoints.down('sm')]: {
                width: '100%'
              }
            }}
          >
            <UserTable user={users} />
          </Box>
        )}

        {showStepper && (
          <Box
            sx={{
              width: '80%',

              padding: 2,
              [theme.breakpoints.down('sm')]: {
                width: '100%'
              }
            }}
          >
            <BasicDetails agencyCode={agencyCode} onAddUser={addUserHandler} />
          </Box>
        )}
      </Box>

      <Footer />
    </ProtectedSSRoute>
  );
}

index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default index;

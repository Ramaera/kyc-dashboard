import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Box, Card, CardHeader, Container, Divider, Grid } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import PaymentTab from './Tabs/Payment';
import { useDispatch, useSelector } from 'react-redux';
import {
  gotData,
  setAllTheUsers,
  setTotalAgraAmount,
  setTotalHajipurAmount
} from '@/state/slice/allUsersSlice';
import { useEffect } from 'react';
import { GET_ALL_USERS } from '@/apollo/queries/auth';
import { useQuery } from '@apollo/client';
import Loading from '@/components/Loading';

function index() {
  const router = useRouter();
  const dispatch = useDispatch();
  let title =
    router.query.index.charAt(0).toUpperCase() + router.query.index.slice(1);

  let usersList = useSelector((state: any) => state.allUsers.allTheUsers);

  const getAllUser = useQuery(GET_ALL_USERS, {
    variables: {
      skip: 0,
      take: 5000
    }
  });

  if (getAllUser.data && !usersList[0]) {
    dispatch(setAllTheUsers(getAllUser.data.getAllUser));
    dispatch(gotData(true));
  }

  const setProjectAmount = async () => {
    let hajipurAmount = 0;
    let agraAmount = 0;
    if (usersList[0]) {
      await usersList.map((user) => {
        user?.documents.map((doc) => {
          doc.title.includes('hajipur') && (hajipurAmount += doc.amount);
          doc.title.includes('agra') && (agraAmount += doc.amount);
        });
      });
      await dispatch(setTotalHajipurAmount(hajipurAmount));
      await dispatch(setTotalAgraAmount(agraAmount));
    }
  };

  useEffect(() => {
    setProjectAmount();
  }, [usersList]);

  if (!usersList[0]) {
    return <Loading />;
  }
  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Dashboard</title>
      </Head>

      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Card variant="outlined">
          <CardHeader
            title={title}
            sx={{
              ml: 2,
              textTransform: 'uppercase'
            }}
          />
          <Divider sx={{ mb: 2 }} />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
          >
            <Grid item xs={12}>
              <Box px={4}>
                <PaymentTab title={title} />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}
index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default index;

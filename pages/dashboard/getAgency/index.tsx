import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
  Box,
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme
} from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import Agency from './Agency';
import { useSelector } from 'react-redux';

function index() {
  const theme = useTheme();
  const agencyCode = useSelector((state: any) => state.user?.agencyCode);

  const agencyCodeValue = agencyCode?.agencyCode;
  const agencyCreatedDate = agencyCode?.createdAt?.slice(0, 10);
  const agencyValidationPeriod = 1;

  const agencyExpireDate = new Date(agencyCreatedDate);
  agencyExpireDate.setFullYear(
    agencyExpireDate.getFullYear() + agencyValidationPeriod
  );

  return (
    <ProtectedSSRoute>
      <Head>
        <title>KYC Dashboard</title>
      </Head>

      <Container maxWidth={false} sx={{ mt: 2 }}>
        {agencyCodeValue && (
          <Card variant="outlined" sx={{ marginBottom: 1 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 1,
                [theme.breakpoints.down('sm')]: {
                  flexDirection: 'column'
                }
              }}
            >
              <Typography fontWeight={'bold'} padding={1}>
                Agency Code : {agencyCodeValue}
              </Typography>
              <Typography fontWeight={'bold'} padding={1}>
                Agency Created : {agencyCreatedDate}
              </Typography>
              {/* <Typography fontWeight={'bold'} padding={1}>
                Agency Validation : {agencyValidationPeriod} Year
              </Typography>
              <Typography fontWeight={'bold'} padding={1}>
                Agency Expire On: {agencyExpireDate.toISOString().slice(0, 10)}
              </Typography> */}
            </Box>
          </Card>
        )}

        <Card variant="outlined">
          {!agencyCodeValue && (
            <CardHeader
              title={'GET AGENCY'}
              sx={{
                ml: 2,
                textTransform: 'uppercase'
              }}
            />
          )}

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
          >
            <Grid item xs={12}>
              <Box px={4} pb={2}>
                <Agency />
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

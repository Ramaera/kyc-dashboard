import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Hidden, Typography } from '@mui/material';
import Head from 'next/head';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppSelector } from '@/hooks';

function index() {
  const user = useAppSelector((state) => state.user?.data);

  return (
    <ProtectedSSRoute>
      <Head>
        <title>Shares Status</title>
      </Head>

      <Container maxWidth={false} sx={{ mt: 2 }}>
        <Typography variant="h4" sx={{ my: 2 }}>
          Shares Status
        </Typography>
        {user?.shareHoldingType.length === 0 ? (
          <Typography color="white" fontSize={28} fontWeight="800">
            Share not allotted yet
          </Typography>
        ) : (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Investment</TableCell>
                  <TableCell>Allotted Share</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user?.shareHoldingType?.map((item, index) => (
                  <TableRow>
                    <TableCell>
                      {item?.InvestmentType === 'ADVANCE_KYC_SHARE'
                        ? '30% Net Profit Sharing Share'
                        : item?.InvestmentType === 'COMMON_KYC_SHARE'
                        ? 'Basic Subscriber'
                        : item?.InvestmentType}
                    </TableCell>
                    <TableCell>
                      {item?.allotedShare ? item?.allotedShare : 'Null'}
                    </TableCell>
                    <TableCell>
                      {item?.status === 'NOT_ALLOTED_YET'
                        ? 'Not Allotted Yet'
                        : item?.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
      <Footer />
    </ProtectedSSRoute>
  );
}
index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default index;

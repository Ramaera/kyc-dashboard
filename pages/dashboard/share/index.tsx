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
                  <Hidden smDown>
                    <TableCell>Investment</TableCell>
                    <TableCell style={{ padding: '0 0 0 2rem' }}>
                      Allotted Share
                    </TableCell>
                    <TableCell>Status</TableCell>
                  </Hidden>
                </TableRow>
              </TableHead>
              <TableBody>
                {user?.shareHoldingType?.map((item, index) => (
                  <TableRow>
                    <Hidden smDown>
                      <TableCell> {item.InvestmentType}</TableCell>
                      <TableCell style={{ padding: '0 0 0 2rem' }}>
                        {item.allotedShare ? item.allotedShare : 'Null'}
                      </TableCell>
                      <TableCell>{item.status}</TableCell>
                    </Hidden>
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

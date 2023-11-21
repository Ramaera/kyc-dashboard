import React, { useState, useRef, useEffect } from 'react';
import SidebarLayout from '@/layouts/SidebarLayout';
// import { Box, useTheme } from '@mui/material';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import {
  Box,
  Container,
  useTheme,
  Card,
  Button,
  Divider,
  CardHeader,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';
import Head from 'next/head';
import moment, { Moment } from 'moment';

const index = () => {
  const theme = useTheme();
  const [currentSelectedButton, setCurrentSelectedButton] =
    useState<string>('kyc');
  const [weekButton, setWeekButton] = useState<string>('current');

  const tableRef = useRef(null);

  const [currentWeekStart, setCurrentWeekStart] = useState<Moment>(moment());
  const [currentWeekEnd, setCurrentWeekEnd] = useState<Moment>(moment());

  useEffect(() => {
    var currentDate = moment();
    var weekStart = currentDate.clone().startOf('isoWeek').subtract(2, 'days');
    var weekEnd = weekStart.clone().add(6, 'days');
    setCurrentWeekStart(weekStart);
    setCurrentWeekEnd(weekEnd);

    console.log('week', weekStart.format(), weekEnd);
  }, []);

  return (
    <>
      <ProtectedSSRoute>
        <Head>
          <title>Star Of The Week</title>
        </Head>
        <Container sx={{ mt: 2 }} maxWidth={false}>
          <Card>
            <Box
              mx={2}
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',

                [theme.breakpoints.down('sm')]: {
                  flexDirection: 'column'
                }
              }}
            >
              <Box
                my={5}
                mx={2}
                display={'flex'}
                gap={2}
                sx={{
                  [theme.breakpoints.down('sm')]: {
                    display: 'flex',
                    flexDirection: 'column'
                  }
                }}
              >
                {' '}
                <Button
                  onClick={() => setCurrentSelectedButton('kyc')}
                  variant={
                    currentSelectedButton.includes('kyc')
                      ? 'contained'
                      : 'outlined'
                  }
                  sx={{ textTransform: 'uppercase', padding: 2 }}
                >
                  kyc
                </Button>
              </Box>
              <Box
                my={5}
                mx={2}
                display={'flex'}
                gap={2}
                sx={{
                  [theme.breakpoints.down('sm')]: {
                    display: 'flex',
                    flexDirection: 'column'
                  }
                }}
              >
                {' '}
                <Button
                  onClick={() => setCurrentSelectedButton('hajipur')}
                  variant={
                    currentSelectedButton.includes('hajipur')
                      ? 'contained'
                      : 'outlined'
                  }
                  sx={{ textTransform: 'uppercase', padding: 2 }}
                >
                  hajipur
                </Button>
              </Box>
              <Box
                my={5}
                mx={2}
                display={'flex'}
                gap={2}
                sx={{
                  [theme.breakpoints.down('sm')]: {
                    display: 'flex',
                    flexDirection: 'column'
                  }
                }}
              >
                {' '}
                <Button
                  onClick={() => setCurrentSelectedButton('agra')}
                  variant={
                    currentSelectedButton.includes('agra')
                      ? 'contained'
                      : 'outlined'
                  }
                  sx={{ textTransform: 'uppercase', padding: 2 }}
                >
                  agra
                </Button>
              </Box>
            </Box>
          </Card>
          <Box
            my={5}
            mx={2}
            display={'flex'}
            justifyContent={'center'}
            gap={2}
            sx={{
              [theme.breakpoints.down('sm')]: {
                display: 'flex',
                flexDirection: 'column'
              }
            }}
          >
            <Button
              onClick={() => setWeekButton('beforePrevious')}
              variant={
                weekButton.includes('beforePrevious') ? 'contained' : 'outlined'
              }
              sx={{ textTransform: 'uppercase', padding: 2 }}
            >
              {currentWeekStart.clone().subtract(14, 'days').format('DD MMM')} -
              {currentWeekEnd.clone().subtract(14, 'days').format('DD MMM')}
            </Button>
            <Button
              onClick={() => setWeekButton('previous')}
              variant={
                weekButton.includes('previous') ? 'contained' : 'outlined'
              }
              sx={{ textTransform: 'uppercase', padding: 2 }}
            >
              {currentWeekStart.clone().subtract(7, 'days').format('DD MMM')} -
              {currentWeekEnd.clone().subtract(7, 'days').format('DD MMM')}
            </Button>
            <Button
              onClick={() => setWeekButton('current')}
              variant={
                weekButton.includes('current') ? 'contained' : 'outlined'
              }
              sx={{ textTransform: 'uppercase', padding: 2 }}
            >
              {currentWeekStart.format('DD MMM')} -{' '}
              {currentWeekEnd.format('DD MMM')}
            </Button>
          </Box>
          <TableContainer>
            <Table ref={tableRef}>
              <TableHead>
                <TableRow>
                  <TableCell>S.No.</TableCell>

                  <TableCell align="center">Agency Code</TableCell>
                  <TableCell align="center">Agency Owner Name</TableCell>
                  <TableCell>No. Of Approved User</TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </Container>
      </ProtectedSSRoute>
    </>
  );
};
index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default index;

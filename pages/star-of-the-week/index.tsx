import React, { useState, useRef, useEffect } from 'react';
import { STAR_OF_THE_WEEK } from '@/apollo/queries/auth';
import SidebarLayout from '@/layouts/SidebarLayout';
// import { Box, useTheme } from '@mui/material';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import Confetti from 'react-confetti';

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
  TableBody,
  Typography,
  colors
} from '@mui/material';
import Head from 'next/head';
import moment, { Moment } from 'moment';
import { useQuery } from '@apollo/client';

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

    // console.log('week', weekStart.format(), weekEnd);
  }, []);
  const beforepreviousWeekStartDate = currentWeekStart
    .clone()
    .subtract(14, 'days');
  const beforepreviousWeekEndDate = currentWeekEnd.clone().subtract(14, 'days');
  const previousWeekStartDate = currentWeekStart.clone().subtract(7, 'days');
  const previousWeekEndDate = currentWeekEnd.clone().subtract(7, 'days');
  const currentWeekStartDate = currentWeekStart;
  const currentWeekEndDate = currentWeekEnd;
  // console.log('-->', currentWeekStartDate);
  const { data, error, loading } = useQuery(STAR_OF_THE_WEEK, {
    variables: {
      EndOfTheWeek: weekButton.includes('current')
        ? currentWeekEndDate
        : weekButton.includes('previous')
        ? previousWeekEndDate
        : weekButton.includes('beforePrevious')
        ? beforepreviousWeekEndDate
        : currentWeekEndDate,
      startOfTheWeek: weekButton.includes('current')
        ? currentWeekStartDate
        : weekButton.includes('previous')
        ? previousWeekStartDate
        : weekButton.includes('beforePrevious')
        ? beforepreviousWeekStartDate
        : currentWeekStartDate
    }
  });
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
                    flexDirection: 'column',
                    marginY: '10px'
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
                    flexDirection: 'column',
                    marginY: '10px'
                  }
                }}
              >
                {' '}
                <Button
                  // onClick={() => setCurrentSelectedButton('hajipur')}
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
                    flexDirection: 'column',
                    marginY: '10px'
                  }
                }}
              >
                {' '}
                <Button
                  // onClick={() => setCurrentSelectedButton('agra')}
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
            <Divider />
            <Typography mx={2} mt={2} fontSize={24}>
              Weeks
            </Typography>
            <Box
              my={2}
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
              <Button
                onClick={() => setWeekButton('beforePrevious')}
                variant={
                  weekButton.includes('beforePrevious')
                    ? 'contained'
                    : 'outlined'
                }
                sx={{ textTransform: 'uppercase', padding: 2 }}
              >
                {currentWeekStart.clone().subtract(14, 'days').format('DD MMM')}{' '}
                -{currentWeekEnd.clone().subtract(14, 'days').format('DD MMM')}
              </Button>
              <Button
                onClick={() => setWeekButton('previous')}
                variant={
                  weekButton.includes('previous') ? 'contained' : 'outlined'
                }
                sx={{ textTransform: 'uppercase', padding: 2 }}
              >
                {currentWeekStart.clone().subtract(7, 'days').format('DD MMM')}{' '}
                -{currentWeekEnd.clone().subtract(7, 'days').format('DD MMM')}
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
            <Divider />

            <TableContainer>
              <Table ref={tableRef}>
                <TableHead>
                  <TableRow>
                    <TableCell>S.No.</TableCell>
                    <TableCell align="center">Agency Code</TableCell>
                    <TableCell align="center">Agency Owner Name</TableCell>
                    <TableCell align="center">No. Of Approved User</TableCell>
                  </TableRow>
                </TableHead>
                {/* {
                  <TableBody>
                    {data?.starOfTheWeek?.map((item, index) => (
                      <React.Fragment key={index}>
                        {index === 0 && (
                          <Confetti
                            numberOfPieces={150}
                            width={1000}
                            height={1000}
                          />
                        )}
                        <TableRow>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell align="center">
                            {item.agencyCode}
                          </TableCell>
                          <TableCell align="center">
                            {item.agencyOwnerName}
                          </TableCell>
                          <TableCell align="center">
                            {item.users.length}
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                } */}
                <TableBody>
                  {data?.starOfTheWeek?.map((item, index) => (
                    <TableRow
                      key={index}
                      style={{
                        background:
                          index === 0
                            ? 'linear-gradient(90deg, rgba(147,85,31,1) 0%, rgba(162,133,41,1) 40%, rgba(145,88,7,1) 100%)'
                            : ''
                      }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell align="center">{item.agencyCode}</TableCell>
                      <TableCell align="center">
                        {item.agencyOwnerName}
                      </TableCell>
                      <TableCell align="center">{item.users.length}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                {/* <TableBody>
                  {data?.starOfTheWeek?.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>

                      <TableCell align="center">{item.agencyCode}</TableCell>
                      <TableCell align="center">
                        {item.agencyOwnerName}
                      </TableCell>
                      <TableCell align="center">{item.users.length}</TableCell>
                    </TableRow>
                  ))}
                </TableBody> */}
              </Table>
            </TableContainer>
          </Card>
        </Container>
      </ProtectedSSRoute>
    </>
  );
};
index.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default index;

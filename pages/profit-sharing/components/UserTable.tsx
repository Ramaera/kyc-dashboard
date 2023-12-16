import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { ALL_KYC_USERS } from '@/apollo/queries/auth';
import Loading from '@/components/Loading';
import { useQuery } from '@apollo/client';
import { Toaster } from 'react-hot-toast';
import UsersData from './Users5%ProfitData';

const UserTable = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const tableRef = useRef(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(100);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [allUsers, setAllUsers] = useState([]);
  const [currentSelectedButton, setCurrentSelectedButton] =
    useState<string>('totalBasic');
  const [usersList, setUsersList] = useState([]);

  const allKycUsers = useQuery(ALL_KYC_USERS, {
    variables: {
      skip: 0,
      take: 5000,
      input: {
        searchTerm: 'BASIC'
      }
    }
  });

  const checkDemat = (user) => {
    let status = 'APPROVED';
    user?.documents?.map((doc) => {
      if (doc.title.includes('demat')) {
        status = doc.status;
      }
    });
    return status;
  };

  useEffect(() => {
    if (allKycUsers.data || UsersData) {
      const fetchedUsers = allKycUsers?.data?.allKycUser
        .filter(
          (user) => user.kyc === 'APPROVED' && checkDemat(user) === 'APPROVED'
        )
        .slice(0, 3000);

      const categortyData = currentSelectedButton.includes('totalBasic')
        ? fetchedUsers
        : currentSelectedButton.includes('totalAvdance')
        ? UsersData
        : fetchedUsers;

      setAllUsers(categortyData);
      setTotalPages(Math.ceil(categortyData?.length / limit));
      setUsersList(categortyData.slice(0, limit));
    }
  }, [allKycUsers.data, UsersData, limit, currentSelectedButton]);

  const handlePageChange = (selectedPage) => {
    const startIndex = (selectedPage - 1) * limit;
    const endIndex = startIndex + limit;
    setUsersList(allUsers.slice(startIndex, endIndex));
    setCurrentPage(selectedPage);
  };

  const filteredUsers = usersList;

  if (!usersList[0]) {
    return <Loading />;
  }

  return (
    <>
      <Card>
        <Box
          mx={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column'
            }
          }}
        >
          <Box
            my={2}
            display={'flex'}
            gap={2}
            sx={{
              [theme.breakpoints.down('sm')]: {
                display: 'flex',
                flexDirection: 'column'
              }
            }}
          >
            <Box
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
                variant={
                  currentSelectedButton === 'totalBasic'
                    ? 'contained'
                    : 'outlined'
                }
                sx={{ textTransform: 'uppercase', padding: 2 }}
                onClick={() => {
                  setCurrentSelectedButton('totalBasic');
                }}
              >{`3% Profit Sharing Ramaera`}</Button>

              <Button
                variant={
                  currentSelectedButton === 'totalAvdance'
                    ? 'contained'
                    : 'outlined'
                }
                sx={{ textTransform: 'uppercase', padding: 2 }}
                onClick={() => {
                  setCurrentSelectedButton('totalAvdance');
                }}
              >{`5% Profit Sharing Ramaera`}</Button>
            </Box>
          </Box>
        </Box>

        {(currentSelectedButton.includes('totalAvdance') ||
          currentSelectedButton.includes('totalBasic')) && (
          <CardHeader
            sx={{
              [theme.breakpoints.down('sm')]: {
                width: '85vw'
              }
            }}
            action={
              <Box
                display={'flex'}
                gap={'20px'}
                sx={{
                  [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column-reverse'
                  }
                }}
              ></Box>
            }
            title={matches ? 'DASHBOARD' : ''}
          />
        )}

        <Divider />

        {(currentSelectedButton.includes('totalAvdance') ||
          currentSelectedButton.includes('totalBasic')) && (
          <Box
            p={2}
            gap={2}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
              }
            }}
          >
            <Box fontWeight="bold" color="text.primary">
              Total Record : {filteredUsers?.length}
            </Box>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                [theme.breakpoints.down('sm')]: {
                  flexDirection: 'column'
                }
              }}
            >
              <Stack spacing={2}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  color="primary"
                  onChange={(event, selectedPage) =>
                    handlePageChange(selectedPage)
                  }
                />
              </Stack>
              <Box width={80} display={'flex'} gap={'10px'}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Rows</InputLabel>
                  <Select
                    value={limit}
                    onChange={(e) => {
                      if (e.target.value === 5000) {
                        setCurrentPage(1);
                      }
                      setLimit(e.target.value);
                    }}
                    label="Rows"
                    fullWidth
                  >
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={5000}>All</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        )}

        {/* 3% Profit sharing data */}
        {currentSelectedButton.includes('totalBasic') && (
          <>
            <TableContainer>
              <Table ref={tableRef}>
                <TableHead>
                  <TableRow>
                    <TableCell>S.No.</TableCell>
                    <TableCell>PW ID</TableCell>
                    <TableCell>Name</TableCell>{' '}
                    <TableCell align="center">createdAt</TableCell>
                    <TableCell align="center">Membership</TableCell>
                    <TableCell align="center">KYC Status</TableCell>
                    <TableCell align="center">Demat</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers?.map((user, index) => {
                    console.log('user', user);
                    if (!user) {
                      return;
                    }
                    return (
                      <TableRow hover key={user?.id}>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            align="center"
                            noWrap
                            width={30}
                          >
                            {index + 1}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                            width={100}
                          >
                            {user?.pw_id}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            noWrap
                          ></Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                            width={200}
                          >
                            {user?.name === 'NULL' ? '' : user?.name}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            align="center"
                            noWrap
                          >
                            {user?.createdAt?.slice(0, 10)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            align="center"
                            noWrap
                          >
                            {user?.membership}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            align="center"
                            noWrap
                          >
                            {user?.kyc}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            align="center"
                            noWrap
                          >
                            {checkDemat(user)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        {/* 5% Profit sharing data */}
        {currentSelectedButton.includes('totalAvdance') && (
          <>
            <TableContainer>
              <Table ref={tableRef}>
                <TableHead>
                  <TableRow>
                    <TableCell>S.No.</TableCell>
                    <TableCell>PW ID</TableCell>
                    <TableCell>Name</TableCell>{' '}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers?.map((user, index) => {
                    console.log('user', user);
                    if (!user) {
                      return;
                    }
                    return (
                      <TableRow hover key={user?.id}>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            align="center"
                            noWrap
                            width={30}
                          >
                            {index + 1}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                            width={100}
                          >
                            {user?.pw_id}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            noWrap
                          ></Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                            width={200}
                          >
                            {user?.name === 'NULL' ? '' : user?.name}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        <Toaster position="bottom-center" reverseOrder={false} />
      </Card>
    </>
  );
};

UserTable.propTypes = {
  usersList: PropTypes.array.isRequired
};

UserTable.defaultProps = {
  usersList: []
};

export default UserTable;

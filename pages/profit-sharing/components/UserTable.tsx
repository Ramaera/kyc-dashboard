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
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import PropTypes from 'prop-types';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ALL_KYC_USERS, SEARCH_USERS } from '@/apollo/queries/auth';
import Loading from '@/components/Loading';
import variables from '@/config/variables';
import { User } from '@/models/user';
import { useLazyQuery, useQuery } from '@apollo/client';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

interface Filters {
  membership?: 'BASIC';
}

const applyFilters = (users: User[], filters: Filters): any => {
  return users.filter((user) => {
    let matches = true;

    if (user.role === variables.role.ADMIN) {
      matches = false;
    }

    // if ((filters.membership && user?.membership) !== filters.membership) {
    //   matches = false;
    // }

    // if (user?.kyc !== 'APPROVED') {
    //   matches = false;
    // }

    // if (checkDemat(user) !== 'APPROVED') {
    //   matches = false;
    // }

    return matches;
  });
};

const checkDemat = (user) => {
  let status = 'APPROVED';
  user.documents.map((doc) => {
    if (doc.title.includes('demat')) {
      status = doc.status;
    }
  });
  return status;
};

const UserTable = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const tableRef = useRef(null);
  const [page, setPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5000);
  const [searchText, setSearchText] = useState('');
  const [kycList, setKycList] = useState<string | null>();
  const [currentSelectedButton, setCurrentSelectedButton] =
    useState<string>('totalBasic');

  const [searchTextInput, setSearchTextInput] = useState('');
  const allKycUsers = useQuery(ALL_KYC_USERS, {
    variables: {
      skip: page * limit,
      take: limit,
      input: {
        searchTerm: 'BASIC'
      }
    }
  });

  const [search, { data }] = useLazyQuery(SEARCH_USERS, {
    variables: {
      searchTerm: searchText
    }
  });

  let _numbers = useSelector((state: any) => state.allUsers.totalNumbers);
  let _usersList = [];
  const [usersList, setUsersList] = useState([]);
  const [numbers, setNumbers] = useState({
    totalBasic: 0
  });

  const users = allKycUsers?.data?.allKycUser
    .filter(
      (user) => user.kyc === 'APPROVED' && checkDemat(user) === 'APPROVED'
    )
    .slice(0, 3000);

  useEffect(() => {
    if (allKycUsers.data) {
      setUsersList(users);
      _usersList = users;
    }
  }, [allKycUsers]);

  useEffect(() => {
    setNumbers({
      totalBasic: _numbers.totalBasicSubscribers
    });
  }, [_numbers]);
  const [filters, setFilters] = useState<Filters>({});

  useEffect(() => {
    if (currentSelectedButton.includes('totalBasic')) {
      search();
    }
  }, [searchText]);

  useEffect(() => {
    if (!data?.searchUsers[0]) {
      // toast.error('Not Found');
    } else if (data?.searchUsers[0]) {
      // setUsersList(data.searchUsers);
    }
  }, [data?.searchUsers]);

  const filteredUsers = usersList;

  useEffect(() => {
    setLimit(100);
    setSearchText('');
    setSearchTextInput('');
  }, [currentSelectedButton]);

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
                  currentSelectedButton === 'totalAvdance'
                    ? 'contained'
                    : 'outlined'
                }
                sx={{ textTransform: 'uppercase', padding: 2 }}
                onClick={() => {
                  setCurrentSelectedButton('totalAvdance');
                }}
              >{`5% Profit Sharing Ramaera`}</Button>
              <Button
                variant={
                  currentSelectedButton === 'totalBasic'
                    ? 'contained'
                    : 'outlined'
                }
                sx={{ textTransform: 'uppercase', padding: 2 }}
                onClick={() => {
                  setCurrentSelectedButton('totalBasic');
                  // handleMembershipChange(variables.membership.BASIC);
                }}
              >{`3% Profit Sharing Ramaera`}</Button>
            </Box>
          </Box>
        </Box>

        {(currentSelectedButton.includes('totalAvdance') ||
          currentSelectedButton.includes('totalBasic')) && (
          <CardHeader
            sx={{
              [theme.breakpoints.down('sm')]: {
                width: '85vw'
                // overflow: 'hidden'
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
              >
                <Box
                  display={'flex'}
                  gap={'10px'}
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      flexDirection: 'column',
                      width: '82.5vw'
                    }
                  }}
                >
                  <TextField
                    fullWidth
                    label="Search"
                    variant="outlined"
                    value={searchTextInput}
                    onChange={(e) => {
                      setSearchTextInput(e.target.value);
                    }}
                  />
                  <Button
                    variant="contained"
                    onClick={() => {
                      setSearchText(searchTextInput);
                    }}
                  >
                    Search
                  </Button>
                </Box>
              </Box>
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
              Total Record : {filteredUsers.length}
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
                  count={Math.ceil(
                    currentSelectedButton.includes('Basic') &&
                      numbers.totalBasic / limit
                  )}
                  page={currentPage}
                  color="primary"
                  onChange={(event, selectedPage) => {
                    setCurrentPage(selectedPage);
                    setPage(selectedPage - 1);
                    setSearchText('');
                    setSearchTextInput('');
                  }}
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
        {(currentSelectedButton.includes('totalAvdance') ||
          currentSelectedButton.includes('totalBasic')) && (
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
                  {filteredUsers.map((user, index) => {
                    console.log('user', user);
                    if (
                      user?.membership === kycList

                      // user?.kyc !== 'APPROVED' &&
                      // checkDemat(user) !== 'APPROVED'
                    ) {
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
                            {user?.createdAt.slice(0, 10)}
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
                            {user?.membership === 'NOT_INITIALIZED'
                              ? 'NOT STARTED'
                              : user?.membership}
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
                            {user?.kyc === 'NOT_INITIALIZED'
                              ? 'NOT STARTED'
                              : user?.kyc}
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
                            {checkDemat(user) === 'NOT_RECIEVED'
                              ? 'NOT RECEIVED'
                              : checkDemat(user)}
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

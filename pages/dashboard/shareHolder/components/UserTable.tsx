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
import { SHARE_HOLDER, SHARE_HOLDER_MEMBERSHIP } from '@/apollo/queries/auth';
import { Console } from 'console';

const projectChecker = (user, project) => {
  let status = 'NOT ENROLLED';
  user?.map((doc) => {
    if (doc.title === project) {
      status = doc.status;
    }
  });
  return status;
};

interface Filters {
  demat?:
    | 'all'
    | 'APPROVED'
    | 'NOT_RECIEVED'
    | 'ONGOING'
    | 'REJECTED'
    | 'SUBMITTED';
  status?: 'all' | 'NOT STARTED' | 'APPROVED' | 'PENDING' | 'REJECTED';
  hajipur?: 'all' | 'NOT ENROLLED' | 'APPROVED' | 'PENDING';
  agra?: 'all' | 'NOT ENROLLED' | 'APPROVED' | 'PENDING';
  membership?: 'all' | 'ADVANCE' | 'BASIC';
}

const applyFilters = (users: User[], filters: Filters): any => {
  return users.filter((user) => {
    let matches = true;
    /*  if (
      !user?.name?.toLowerCase().includes(searchText) &&
      !user?.pw_id?.toLowerCase().includes(searchText)
    ) {
      matches = false;
    } */
    if (user.role === variables.role.ADMIN) {
      matches = false;
    }
    if ((filters.membership && user?.membership) !== filters.membership) {
      matches = false;
    }
    if ((filters.status && user?.kyc) !== filters.status) {
      matches = false;
    }
    if (
      filters.hajipur &&
      projectChecker(user?.documents, 'hajipur_project_payment') !==
        filters.hajipur
    ) {
      matches = false;
    }
    if (filters.demat && checkDemat(user) !== filters.demat) {
      matches = false;
    }
    if (
      filters.agra &&
      projectChecker(user?.documents, 'agra_project_payment') !== filters.agra
    ) {
      matches = false;
    }

    return matches;
  });
};

/* const applyPagination = (
  users: User[],
  page: number,
  limit: number
): User[] => {
  return users.slice(page * limit, page * limit + limit);
}; */

const checkDemat = (user) => {
  let status = 'NOT_RECIEVED';
  user?.documents?.map((doc) => {
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
  const [limit, setLimit] = useState<number>(100);
  const [searchText, setSearchText] = useState('');
  const [kycList, setKycList] = useState<string | null>();
  const [searchProjectName, setSearchProjectName] = useState('');
  const [currentSelectedButton, setCurrentSelectedButton] =
    useState<string>('totalKYC');

  const shareholderdata = useQuery(SHARE_HOLDER, {
    variables: { searchProject: 'Hajipur' }
  });

  const shareholderMemberData = useQuery(SHARE_HOLDER_MEMBERSHIP, {
    variables: { searchMembership: 'BASIC' }
  });

  useEffect(() => {
    if (currentSelectedButton.includes('totalBasic')) {
      setSearchProjectName('BASIC');
    }
    if (currentSelectedButton.includes('totalAvdance')) {
      setSearchProjectName('ADVANCE');
    }
  }, []);

  // console.log('searchProjectName', searchProjectName);

  // console.log('shareholderMemberData', shareholderMemberData.data);

  // console.log('shareholderdata', shareholderdata?.data?.searchShareHolding);

  const [searchTextInput, setSearchTextInput] = useState('');
  const allKycUsers = useQuery(ALL_KYC_USERS, {
    variables: {
      skip: page * limit,
      take: limit,
      input: {
        searchTerm: currentSelectedButton.includes('totalAvdance')
          ? 'ADVANCE'
          : currentSelectedButton.includes('totalBasic')
          ? 'BASIC'
          : 'ADVANCE'
      }
    }
  });

  const allHajipurHolder = useQuery(SHARE_HOLDER, {
    variables: {
      //   skip: page * limit,
      //   take: limit,
      input: { searchProject: 'Hajipur' }
    }
  });

  console.log('allHajipurHolder', allHajipurHolder);

  const [search, { data }] = useLazyQuery(SEARCH_USERS, {
    variables: {
      searchTerm: searchText
    }
  });

  let _numbers = useSelector((state: any) => state.allUsers.totalNumbers);
  let _usersList = [];
  const [usersList, setUsersList] = useState([]);
  let _usersHajipurList = [];
  const [usersHajipurList, setUsersHajipurList] = useState([]);
  const [numbers, setNumbers] = useState({
    totalKYC: 0,
    totalAdvance: 0,
    totalBasic: 0
  });

  useEffect(() => {
    if (allKycUsers.data) {
      setUsersList(allKycUsers.data.allKycUser);
      _usersList = allKycUsers.data.allKycUser;
    }
  }, [allKycUsers]);

  useEffect(() => {
    if (allHajipurHolder.data) {
      setUsersHajipurList(allHajipurHolder.data.searchShareHolding);
      _usersHajipurList = allHajipurHolder.data.searchShareHolding;
    }
  }, [allHajipurHolder]);

  useEffect(() => {
    setNumbers({
      totalKYC: _numbers.totalSubscribers,
      totalAdvance: _numbers.totalAdvanceSubscribers,
      totalBasic: _numbers.totalBasicSubscribers
    });
  }, [_numbers]);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });
  useEffect(() => {
    if (
      currentSelectedButton.includes('totalAvdance') ||
      currentSelectedButton.includes('totalBasic')
    ) {
      search();
    }
  }, [searchText]);

  useEffect(() => {
    if (!data?.searchUsers[0]) {
      // toast.error('Not Found');
    } else if (data?.searchUsers[0]) {
      setUsersList(data.searchUsers);
    }
  }, [data?.searchUsers]);
  const filteredUsers = applyFilters(usersList, filters);

  const filteredUsersHajipur = applyFilters(usersHajipurList, filters);
  // const paginatedUsers = applyPagination(filteredUsers, page, limit);

  useEffect(() => {
    setLimit(100);
    setSearchText('');
    setSearchTextInput('');
  }, [currentSelectedButton]);

  const membership = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'ADVANCE',
      name: 'ADVANCE'
    },
    {
      id: 'BASIC',
      name: 'BASIC'
    }
  ];
  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'NOT_INITIALIZED',
      name: 'Not Started'
    },
    {
      id: 'REJECTED',
      name: 'Rejected'
    },
    {
      id: 'ONGOING',
      name: 'Ongoing'
    },
    {
      id: 'APPROVED',
      name: 'Approved'
    }
  ];
  const deamtOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'NOT_RECIEVED',
      name: 'Not Recieved'
    },
    {
      id: 'REJECTED',
      name: 'Rejected'
    },
    {
      id: 'PENDING',
      name: 'Pending'
    },
    {
      id: 'APPROVED',
      name: 'Approved'
    }
  ];
  const hajipurOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'NOT ENROLLED',
      name: 'Not Enrolled'
    },
    {
      id: 'APPROVED',
      name: 'Approved'
    },
    {
      id: 'PENDING',
      name: 'Pending'
    }
  ];
  const agraOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'NOT ENROLLED',
      name: 'Not Enrolled'
    },
    {
      id: 'APPROVED',
      name: 'Approved'
    },
    {
      id: 'PENDING',
      name: 'Pending'
    }
  ];

  /* const handleProjectChange = (e) => {
    setKycList(e);
  }; */
  const handleMembershipChange = (val) => {
    let value = null;

    if (val !== 'all') {
      value = val;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      membership: value
    }));
  };
  const handleStatusChange = (e) => {
    let value = null;

    if (e !== 'all') {
      value = e;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };
  const handleHajipurChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      hajipur: value
    }));
  };
  const handleAgraChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      agra: value
    }));
  };
  /*   const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  }; */

  const handleDematChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      demat: value
    }));
  };

  const handleLimitChange = (
    event: ChangeEvent<HTMLInputElement | any>
  ): void => {
    setLimit(
      parseInt(event.target.value === 'All' ? 5000 : event.target.value)
    );
  };

  const censorMe = (txt) => {
    if (!txt || txt == 'NULL') {
      return '';
    }
    let text = txt.slice(0, 4) + txt.slice(-4, txt.length);
    let regex = /(?<!^).(?!$)/g;
    let w = text;
    return w.replace(regex, '*');
  };

  let index = -1;

  if (!usersList[0]) {
    return <Loading />;
  }
  // console.log('filteredUsersHajipur', filteredUsersHajipur);
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
            <Button
              variant={
                currentSelectedButton.includes('total')
                  ? 'contained'
                  : 'outlined'
              }
              sx={{ textTransform: 'uppercase', padding: 2 }}
              onClick={() => {
                setCurrentSelectedButton((val) =>
                  val.includes('total') ? '' : 'total'
                );
                handleMembershipChange('');
                handleStatusChange('all');
              }}
            >
              {`Total Share Holder: ` + numbers.totalKYC}
            </Button>

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
                onClick={() => {
                  setCurrentSelectedButton((val) =>
                    val.includes('totalBasic') ? 'total' : 'totalBasic'
                  );
                  handleMembershipChange(variables.membership.BASIC);
                }}
              >{`BASIC SHARE HOLDER : ${numbers.totalBasic}`}</Button>
              <Button
                variant={
                  currentSelectedButton === 'totalAvdance'
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => {
                  setCurrentSelectedButton((val) =>
                    val.includes('totalAvdance') ? 'total' : 'totalAvdance'
                  );
                  handleMembershipChange(variables.membership.ADVANCE);
                }}
              >{`30% NET PROFIT SHARE PARTNER: ${numbers.totalAdvance}`}</Button>
              <Button
                variant={
                  currentSelectedButton === 'totalHajipur'
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => {
                  setCurrentSelectedButton((val) =>
                    val.includes('totalHajipur') ? 'total' : 'totalHajipur'
                  );
                  handleMembershipChange(variables.membership.ADVANCE);
                }}
              >
                HAJIPUR SHARE HOLDER
              </Button>
            </Box>
          </Box>
        </Box>

        {(currentSelectedButton.includes('totalAvdance') ||
          currentSelectedButton.includes('totalBasic') ||
          currentSelectedButton.includes('totalHajipur')) && (
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
                <Box
                  display={'flex'}
                  gap={'10px'}
                  sx={{
                    width: '480px',
                    [theme.breakpoints.down('sm')]: {
                      flexDirection: 'column',
                      width: '82.5vw'
                    }
                  }}
                >
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Demat Status</InputLabel>
                    <Select
                      sx={{
                        bgcolor: filters.demat && '#8c7cf040'
                      }}
                      value={filters.demat || 'all'}
                      onChange={handleDematChange}
                      label="Deat"
                      autoWidth
                    >
                      {deamtOptions.map((statusOption) => (
                        <MenuItem key={statusOption.id} value={statusOption.id}>
                          {statusOption.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>KYC Status</InputLabel>
                    <Select
                      value={filters.status || 'all'}
                      onChange={(e) => handleStatusChange(e.target.value)}
                      label="Status"
                      autoWidth
                    >
                      {statusOptions.map((statusOption) => (
                        <MenuItem key={statusOption.id} value={statusOption.id}>
                          {statusOption.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Hajipur </InputLabel>
                    <Select
                      value={filters.hajipur || 'all'}
                      onChange={handleHajipurChange}
                      label="Status"
                      autoWidth
                    >
                      {hajipurOptions.map((statusOption) => (
                        <MenuItem key={statusOption.id} value={statusOption.id}>
                          {statusOption.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Agra </InputLabel>
                    <Select
                      value={filters.agra || 'all'}
                      onChange={handleAgraChange}
                      label="Status"
                      autoWidth
                    >
                      {agraOptions.map((statusOption) => (
                        <MenuItem key={statusOption.id} value={statusOption.id}>
                          {statusOption.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            }
            title={matches ? 'DASHBOARD' : ''}
          />
        )}

        <Divider />

        {/* {(currentSelectedButton.includes('totalAvdance') ||
          currentSelectedButton.includes('totalBasic')) && (
          <Box
            p={2}
            gap={2}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(
                  (currentSelectedButton.includes('Avdance') &&
                    numbers.totalAdvance / limit) ||
                    (currentSelectedButton.includes('Basic') &&
                      numbers.totalBasic / limit)
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
        )} */}

        {(currentSelectedButton.includes('totalAvdance') ||
          currentSelectedButton.includes('totalBasic') ||
          currentSelectedButton.includes('totalHajipur')) && (
          <Box
            p={2}
            gap={2}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(
                  (currentSelectedButton.includes('Avdance') &&
                    numbers.totalAdvance / limit) ||
                    (currentSelectedButton.includes('Basic') &&
                      numbers.totalBasic / limit)
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
        )}
        {/* =========== BASIC AND ADVANCE  ===================*/}
        {(currentSelectedButton.includes('totalAvdance') ||
          currentSelectedButton.includes('totalBasic')) && (
          <TableContainer>
            <Table ref={tableRef}>
              <TableHead>
                <TableRow>
                  <TableCell>S.No.</TableCell>
                  <TableCell>PW ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Membership </TableCell>
                  <TableCell align="center">Investment Type</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => {
                  if (user?.membership === kycList) {
                    return;
                  }
                  index += 1;
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
                        >
                          {/* {format(user?.orderDate, 'MMMM dd yyyy')} */}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                          width={150}
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
                          width={100}
                          noWrap
                        >
                          {censorMe(user?.father_or_husband_name)}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {censorMe(user?.mobile_number)}
                        </Typography>
                      </TableCell>

                      <TableCell align="right">
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
                          width="120px"
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {checkDemat(user) === 'NOT_RECIEVED'
                            ? 'NOT RECEIVED'
                            : checkDemat(user)}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {projectChecker(
                            user?.documents,
                            'hajipur_project_payment'
                          )}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {projectChecker(
                            user?.documents,
                            'agra_project_payment'
                          )}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {currentSelectedButton.includes('totalHajipur') && (
          <TableContainer>
            <Table ref={tableRef}>
              <TableHead>
                <TableRow>
                  <TableCell>S.No.</TableCell>
                  <TableCell>PW ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Membership </TableCell>
                  <TableCell align="center">Investment Type</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {shareholderdata?.data?.searchShareHolding?.map((user) => { */}
                {filteredUsersHajipur?.map((user) => {
                  if (!user) {
                    return;
                  }
                  index += 1;
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
                          {user?.user?.pw_id}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          noWrap
                        >
                          {/* {format(user?.orderDate, 'MMMM dd yyyy')} */}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                          width={150}
                        >
                          {user?.user?.name}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {user?.user?.membership}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          width={100}
                          noWrap
                        >
                          {user?.InvestmentType}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {user?.status}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
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

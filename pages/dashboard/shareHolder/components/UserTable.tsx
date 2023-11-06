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
import { useEffect, useRef, useState } from 'react';
import { SEARCH_USERS } from '@/apollo/queries/auth';
import Loading from '@/components/Loading';
import { User } from '@/models/user';
import { shareHoldingType } from '@/models/user';

import { useLazyQuery, useQuery } from '@apollo/client';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {
  SHARE_HOLDER,
  SHARE_HOLDER_MEMBERSHIP,
  TOTAL_SHARE_HOLDERS
} from '@/apollo/queries/auth';

interface Filters {
  status?: 'all' | 'TRANSFERRED' | 'UNDER_PROCESS' | 'NOT_ALLOTED_YET';
}

const applyFilters = (users: shareHoldingType[], filters: Filters): any => {
  return users.filter((user) => {
    let matches = true;

    if ((filters?.status && user?.status) !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const UserTable = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const tableRef = useRef(null);
  const [page, setPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(100);
  const [searchText, setSearchText] = useState('');
  const [currentSelectedButton, setCurrentSelectedButton] =
    useState<string>('totalShareHolder');

  const [searchTextInput, setSearchTextInput] = useState('');

  const totalShareHolderData = useQuery(TOTAL_SHARE_HOLDERS, {
    variables: {
      skip: page * limit,
      take: limit
    }
  });

  const allShareHolder = useQuery(SHARE_HOLDER_MEMBERSHIP, {
    variables: {
      skip: page * limit,
      take: limit,
      input: {
        searchMembership: currentSelectedButton.includes('totalAdvance')
          ? 'ADVANCE'
          : currentSelectedButton.includes('totalBasic')
          ? 'BASIC'
          : 'ADVANCE'
      }
    }
  });

  const allHajipurHolder = useQuery(SHARE_HOLDER, {
    variables: {
      skip: page * limit,
      take: limit,
      input: {
        searchProject:
          currentSelectedButton.includes('totalHajipur') && 'Hajipur'
      }
    }
  });

  const [search, { data }] = useLazyQuery(SEARCH_USERS, {
    variables: {
      searchTerm: searchText
    }
  });

  let _allShareHolder = useSelector(
    (state: any) => state.allShareHolder?.allNumberShareHolder
  );

  let _usersList = [];
  const [usersList, setUsersList] = useState([]);
  let _usersTotalList = [];
  const [totalShareUserList, setTotalShareUserList] = useState([]);
  let _usersAllList = [];
  const [allShareUserList, setAllShareUserList] = useState([]);

  let _usersHajipurList = [];
  const [usersHajipurList, setUsersHajipurList] = useState([]);
  const [numbers, setNumbers] = useState({
    totalShareHolder: 0,
    totalAdvance: 0,
    totalBasic: 0,
    totalHajipur: 0
  });

  useEffect(() => {
    if (totalShareHolderData.data) {
      setTotalShareUserList(totalShareHolderData.data.TotalShareholders);
      _usersTotalList = totalShareHolderData.data.TotalShareholders;
    }
  }, [totalShareHolderData]);

  useEffect(() => {
    if (allShareHolder.data) {
      setAllShareUserList(allShareHolder.data.searchShareHolding);
      _usersAllList = allShareHolder.data.searchShareHolding;
    }
  }, [allShareHolder]);

  useEffect(() => {
    if (allHajipurHolder.data) {
      setUsersHajipurList(allHajipurHolder.data.searchShareHolding);
      _usersHajipurList = allHajipurHolder.data.searchShareHolding;
    }
  }, [allHajipurHolder]);

  useEffect(() => {
    setNumbers({
      totalShareHolder: _allShareHolder?.TotalShareholders,
      totalAdvance: _allShareHolder?.TotalAdvanceShareHolder,
      totalBasic: _allShareHolder?.TotalBasicShareHolder,
      totalHajipur: _allShareHolder?.TotalHajipurShareHolder
    });
  }, [_allShareHolder]);

  const [filters, setFilters] = useState<Filters>({
    status: null
  });
  useEffect(() => {
    if (
      currentSelectedButton.includes('totalShareHolder') ||
      currentSelectedButton.includes('totalAdvance') ||
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

  const filteredUsersTotal = applyFilters(totalShareUserList, filters);

  // const filteredUsersTotal = totalShareUserList;
  const filteredUsersAll = applyFilters(allShareUserList, filters);
  const filteredUsersHajipur = applyFilters(usersHajipurList, filters);

  useEffect(() => {
    setLimit(100);
    setSearchText('');
    setSearchTextInput('');
    setCurrentPage(1);
    filters.status = null;
  }, [currentSelectedButton]);

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'TRANSFERRED',
      name: 'TRANSFERRED'
    },
    {
      id: 'UNDER_PROCESS',
      name: 'UNDER PROCESS'
    },
    {
      id: 'NOT_ALLOTED_YET',
      name: 'NOT ALLOTED YET'
    }
  ];

  const handleStatusChange = (e) => {
    let value = null;
    if (e !== 'all') {
      value = e;
      setLimit(5000);
    } else {
      setLimit(100);
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  let index = -1;

  if (!totalShareUserList[0]) {
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
            <Button
              variant={
                currentSelectedButton.includes('totalShareHolder')
                  ? 'contained'
                  : 'outlined'
              }
              sx={{ textTransform: 'uppercase', padding: 2 }}
              onClick={() => {
                setCurrentSelectedButton('totalShareHolder');
                handleStatusChange('all');
              }}
            >
              TOTAL SHARE HOLDER
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
                  setCurrentSelectedButton('totalBasic');
                }}
              >
                BASIC SHARE HOLDER
              </Button>
              <Button
                variant={
                  currentSelectedButton === 'totalAdvance'
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => {
                  setCurrentSelectedButton('totalAdvance');
                }}
              >
                30% NET PROFIT SHARE PARTNER
              </Button>
              <Button
                variant={
                  currentSelectedButton === 'totalHajipur'
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => {
                  setCurrentSelectedButton('totalHajipur');
                }}
              >
                HAJIPUR SHARE HOLDER
              </Button>
            </Box>
          </Box>
        </Box>
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
            >
              {/* <Box
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
              </Box> */}
              <Box
                display={'flex'}
                gap={'10px'}
                sx={{
                  width: '180px',
                  [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column',
                    width: '50vw'
                  }
                }}
              >
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={filters.status || 'all'}
                    onChange={(e) => {
                      handleStatusChange(e.target.value);
                    }}
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
              </Box>
            </Box>
          }
          title={matches ? 'SHARE HOLDER' : ''}
        />
        <Divider />

        <Box
          p={2}
          gap={2}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {filters.status === null ? (
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(
                    (currentSelectedButton.includes('totalShareHolder') &&
                      numbers.totalShareHolder / limit) ||
                      (currentSelectedButton.includes('Advance') &&
                        numbers.totalAdvance / limit) ||
                      (currentSelectedButton.includes('Basic') &&
                        numbers.totalBasic / limit) ||
                      (currentSelectedButton.includes('Hajipur') &&
                        numbers.totalHajipur / limit)
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
          ) : (
            <>
              {currentSelectedButton.includes('totalShareHolder') && (
                <Box fontWeight="bold" color="text.primary">
                  Number of Share Holders: {filteredUsersTotal.length}
                </Box>
              )}
              {(currentSelectedButton.includes('totalAdvance') ||
                currentSelectedButton.includes('totalBasic')) && (
                <Box fontWeight="bold" color="text.primary">
                  Number of Share Holders: {filteredUsersAll.length}
                </Box>
              )}
              {currentSelectedButton.includes('totalHajipur') && (
                <Box fontWeight="bold" color="text.primary">
                  Number of Share Holders: {filteredUsersHajipur.length}
                </Box>
              )}
            </>
          )}
        </Box>

        {/* TOTAL SHARE HOLDER */}
        {currentSelectedButton.includes('totalShareHolder') && (
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
                  <TableCell align="center">Shares</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsersTotal?.map((user) => {
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
                        ></Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                          minWidth={150}
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
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {user?.allotedShare}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {/* =========== BASIC AND ADVANCE  ===================*/}
        {(currentSelectedButton.includes('totalAdvance') ||
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
                  <TableCell align="center">Shares</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsersAll.map((user) => {
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
                          minWidth={150}
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
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {user?.allotedShare}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {/* HAJIPUR */}
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
                  <TableCell align="center">Shares</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
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
                        ></Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                          minWidth={150}
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
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {user?.allotedShare}
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
  totalShareUserList: PropTypes.array.isRequired
};

UserTable.defaultProps = {
  totalShareUserList: []
};

export default UserTable;

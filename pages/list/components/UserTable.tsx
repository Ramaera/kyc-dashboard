import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import PropTypes from 'prop-types';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import Loading from '@/components/Loading';
import variables from '@/config/variables';
import { User } from '@/models/user';
import { useSelector } from 'react-redux';
import CachedIcon from '@mui/icons-material/Cached';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_USERS } from '@/apollo/queries/auth';

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

    if (
      filters.agra &&
      projectChecker(user?.documents, 'agra_project_payment') !== filters.agra
    ) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  users: User[],
  page: number,
  limit: number
): User[] => {
  return users.slice(page * limit, page * limit + limit);
};

const UserTable = ({ refetchData }) => {
  const theme = useTheme();
  const tableRef = useRef(null);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(100);
  const [searchText, setSearchText] = useState('');
  const [searchTextInput, setSearchTextInput] = useState('');
  // const debouncedValue = useDebounce<string>(searchText, 250);

  const [search, { data }] = useLazyQuery(SEARCH_USERS, {
    variables: {
      searchTerm: searchText
    }
  });

  let _usersList = useSelector((state: any) => state.allUsers.allTheUsers);
  const [usersList, setUsersList] = useState(_usersList);
  const [numbers, setNumbers] = useState({
    totalKYC: 0,
    totalAdvance: 0,
    totalBasic: 0
  });
  const [filters, setFilters] = useState<Filters>({
    status: null,
    hajipur: null,
    agra: null
  });
  const [kycList, setKycList] = useState<string | null>();
  const [currentSelectedButton, setCurrentSelectedButton] =
    useState<string>('');
  useEffect(() => {
    search();
  }, [searchText]);

  useEffect(() => {
    if (data) {
      setUsersList(data.searchUsers);
    }
  }, [data]);
  const filteredUsers = applyFilters(usersList, filters);
  const paginatedUsers = applyPagination(filteredUsers, page, limit);

  const checkTotal = () => {
    let totalKyc = 0;
    let totalAdvance = 0;
    let totalBasic = 0;
    usersList.map((user) => {
      if (user.role === variables.role.ADMIN) {
        return;
      }
      if (user.role !== variables.role.ADMIN) {
        totalKyc += 1;
      }
      if (user.membership === variables.membership.ADVANCE) totalAdvance += 1;
      if (user.membership === variables.membership.BASIC) totalBasic += 1;
    });
    setNumbers({
      ...numbers,
      totalKYC: totalKyc,
      totalAdvance: totalAdvance,
      totalBasic: totalBasic
    });
  };

  useEffect(() => {
    checkTotal();
  }, [usersList]);

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
  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (
    event: ChangeEvent<HTMLInputElement | any>
  ): void => {
    setLimit(parseInt(event.target.value === 'All' ? -1 : event.target.value));
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
              {`Total Subscribers: ` + numbers.totalKYC}
            </Button>
            {currentSelectedButton.includes('total') && (
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
                  onClick={() => {
                    setCurrentSelectedButton((val) =>
                      val.includes('totalAvdance') ? 'total' : 'totalAvdance'
                    );
                    handleMembershipChange(variables.membership.ADVANCE);
                  }}
                >{`ADVANCE SHARE HOLDER : ${numbers.totalAdvance}`}</Button>
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
              </Box>
            )}
          </Box>
          <Box
            sx={{ cursor: 'pointer' }}
            onClick={refetchData}
            my={4}
            ml={'auto'}
          >
            <CachedIcon />
          </Box>
        </Box>

        {(currentSelectedButton.includes('totalAvdance') ||
          currentSelectedButton.includes('totalBasic')) && (
          <CardHeader
            action={
              <Box display={'flex'} gap={'20px'}>
                <Box display={'flex'} gap={'10px'}>
                  <TextField
                    fullWidth
                    label="Search"
                    variant="outlined"
                    value={searchTextInput}
                    onChange={(e) => {
                      setSearchTextInput(e.target.value);
                      if (e.target.value === '') {
                        setUsersList(_usersList);
                      }
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
                  width={480}
                  display={'flex'}
                  gap={'10px'}
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      display: 'none'
                    }
                  }}
                >
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
            title="DASHBOARD"
          />
        )}
        <Divider />

        {(currentSelectedButton.includes('totalAvdance') ||
          currentSelectedButton.includes('totalBasic')) && (
          <Box p={2} gap={2} display={'flex'} justifyContent={'flex-end'}>
            <TablePagination
              component="div"
              count={filteredUsers.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[20, 100, 200, 'All']}
            />
            {/*  <DownloadTableExcel
              filename={'KYC_LIST'}
              sheet={'KYC_LIST'}
              currentTableRef={tableRef.current}
            >
              <LoadingButton variant="contained">Download</LoadingButton>
            </DownloadTableExcel> */}
          </Box>
        )}
        {(currentSelectedButton.includes('totalAvdance') ||
          currentSelectedButton.includes('totalBasic')) && (
          <TableContainer>
            <Table ref={tableRef}>
              <TableHead>
                <TableRow>
                  <TableCell>S.No.</TableCell>
                  <TableCell>PW ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Father's Name</TableCell>
                  <TableCell align="center">Moibile No.</TableCell>
                  {/* <TableCell align="center">Email</TableCell> */}
                  <TableCell align="center">KYC Status</TableCell>
                  <TableCell align="center">Demat</TableCell>
                  <TableCell align="center">Hajipur Project</TableCell>
                  <TableCell align="center">Agra Project</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedUsers.map((user) => {
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
                      <TableCell>
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
                      <TableCell align="right">
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
                      {/*  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {censorMe(user?.email)}
                    </Typography>
                  </TableCell> */}
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
                      <TableCell align="right">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {censorMe(user?.demat_account)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
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
                      <TableCell align="right">
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

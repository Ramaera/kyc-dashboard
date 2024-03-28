import { GetUser } from '@/apollo/queries/auth';
import variables from '@/config/variables';
import { User } from '@/models/user';
import { setOrUpdateAgencyUsersFilters } from '@/state/slice/filtersSlice';
import { useQuery } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Avatar,
  Box,
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
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useDispatch, useSelector } from 'react-redux';
import sortObjectsArray from 'sort-objects-array';
import { useDebounce } from 'usehooks-ts';

interface Filters {
  status?:
    | 'all'
    | 'APPROVED'
    | 'NOT_INITIALIZED'
    | 'ONGOING'
    | 'REJECTED'
    | 'SUBMITTED';
  demat?:
    | 'all'
    | 'APPROVED'
    | 'NOT_RECIEVED'
    | 'ONGOING'
    | 'REJECTED'
    | 'SUBMITTED';
  membership?: 'all' | 'BASIC' | 'ADVANCE';
}

const checkDemat = (user) => {
  let status = 'NOT_RECIEVED';
  user.documents.map((doc) => {
    if (doc.title.includes('demat')) {
      status = doc.status;
    }
  });
  return status;
};

const checkProjectPaymentAmount = (docs) => {
  let status = [];
  let finalStatus = 0;

  docs.map((doc) => {
    if (
      doc.title.includes('project') &&
      doc.status === variables.status.APPROVED
    ) {
      status.push(doc.amount);
      finalStatus += doc.amount;
    }
  });

  return finalStatus;
};

const numberOfProjectsEnrolledIn = (docs) => {
  let numberOfProjects = 0;

  if (
    docs.find(
      (doc) =>
        doc.title.includes('hajipur') &&
        doc.status === variables.status.APPROVED
    )
  ) {
    numberOfProjects += 1;
  }
  if (
    docs.find(
      (doc) =>
        doc.title.includes('agra') && doc.status === variables.status.APPROVED
    )
  ) {
    numberOfProjects += 1;
  }
  if (
    docs.find(
      (doc) =>
        doc.title.includes('hyderabad') &&
        doc.status === variables.status.APPROVED
    )
  ) {
    numberOfProjects += 1;
  }
  if (
    docs.find(
      (doc) =>
        doc.title.includes('fundingreplacement') &&
        doc.status === variables.status.APPROVED
    )
  ) {
    numberOfProjects += 1;
  }

  return numberOfProjects;
};

const applyFilters = (users: User[], filters: Filters, searchTexts): User[] => {
  let searchText = searchTexts.toLowerCase();
  return users.filter((user) => {
    let matches = true;

    if (
      !user?.name?.toLowerCase().includes(searchText) &&
      !user?.rm_id?.toLowerCase().includes(searchText) &&
      !user?.email?.toLowerCase().includes(searchText) &&
      !user?.mobile_number?.toLowerCase().includes(searchText) &&
      !user?.pw_id?.toLowerCase().includes(searchText)
    ) {
      matches = false;
    }

    if (filters.status && user?.kyc !== filters.status) {
      matches = false;
    }
    if (filters.membership && user?.membership !== filters.membership) {
      matches = false;
    }
    if (filters.demat && checkDemat(user) !== filters.demat) {
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
const UserTable = () => {
  const router = useRouter();
  let persistedFilters = useSelector(
    (state: any) => state.filters.agencyUsersFilters
  );
  const dispatch = useDispatch();
  const tableRefAll = useRef(null);
  const tableRef = useRef(null);

  const theme = useTheme();
  const [usersList, setUsersList] = useState(
    useSelector((state: any) => state?.allUsers?.allTheUsers)
  );
  const [sortByName, setSortByName] = useState(true);
  const [sortByPWID, setSortByPWID] = useState(true);
  /*   const [sortByCreatedAt, setSortByCreatedAt] = useState(true);
  const [sortByUpdatedAt, setSortByUpdatedAt] = useState(true); */
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);
  const [searchText, setSearchText] = useState('');
  const debouncedValue = useDebounce<string>(searchText, 400);
  const [filters, setFilters] = useState<Filters>({});
  const agencyCode = useSelector((state: any) => state.user?.agencyCode);

  const agencyCodeValue = agencyCode?.agencyCode;
  const agencyCreatedDate = agencyCode?.createdAt?.slice(0, 10);

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'NOT_INITIALIZED',
      name: 'Not Initialized'
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

  const membershipOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'BASIC',
      name: 'Basic'
    },

    {
      id: 'ADVANCE',
      name: 'Advance'
    }
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

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

  const handleMembershipChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      membership: value
    }));
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
    router.push(`?page=${newPage}`);
  };

  useEffect(() => {
    const { page } = router.query;
    if (page) {
      setPage(parseInt(page as string, 10));
    }
  }, []);

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const avatarFetch = (userData) => {
    let photoUrl = '';
    userData?.documents?.forEach((doc) => {
      if (doc.title === 'avatar') {
        photoUrl = doc.url;
      }
    });
    return photoUrl;
  };

  const filteredUsers = applyFilters(usersList, filters, debouncedValue);
  const paginatedUsers = applyPagination(filteredUsers, page, limit);

  const sortName = () => {
    let order = 'desc';
    if (sortByName) {
      order = '';
    }
    let sorted = sortObjectsArray(usersList, 'name', { order: order });
    setUsersList(sorted);
    setSortByName(!sortByName);
  };
  const sortPWID = () => {
    let order = 'desc';
    if (sortByPWID) {
      order = '';
    }
    let sorted = sortObjectsArray(usersList, 'pw_id', { order: order });
    setUsersList(sorted);
    setSortByPWID(!sortByPWID);
  };

  useEffect(() => {
    setFilters(persistedFilters);
  }, []);
  useEffect(() => {
    dispatch(setOrUpdateAgencyUsersFilters(filters));
  }, [filters]);

  return (
    <>
      <Card>
        <CardHeader
          sx={{
            [theme.breakpoints.down('sm')]: {
              display: 'flex',
              flexDirection: 'column'
            }
          }}
          action={
            <Box
              display={'flex'}
              gap={'20px'}
              sx={{
                [theme.breakpoints.down('sm')]: {
                  flexDirection: 'column'
                }
              }}
            >
              <Box display={'flex'} gap={'10px'}>
                <TextField
                  fullWidth
                  label="Search"
                  variant="outlined"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />
              </Box>
              <Box>
                <LoadingButton
                  sx={{ py: '14px' }}
                  variant="contained"
                  disabled={
                    !filters?.membership && !filters?.status && !filters?.demat
                  }
                  onClick={() => {
                    setFilters({});
                  }}
                >
                  Clear Filters
                </LoadingButton>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                  [theme.breakpoints.down('sm')]: {
                    justifyContent: 'space-between'
                  }
                }}
              >
                <Box width={'120px'}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Share Holder Type</InputLabel>
                    <Select
                      value={filters.membership || 'all'}
                      onChange={handleMembershipChange}
                      label="Share Holder Type"
                      autoWidth
                    >
                      {membershipOptions.map((statusOption) => (
                        <MenuItem key={statusOption.id} value={statusOption.id}>
                          {statusOption.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box width={'120px'}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>KYC Status</InputLabel>
                    <Select
                      value={filters.status || 'all'}
                      onChange={handleStatusChange}
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
                <Box width={'120px'}>
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
                </Box>
              </Box>
            </Box>
          }
          title="Users List"
        />

        <Divider />
        <TableContainer>
          <Table ref={tableRef}>
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>KYC Created On</TableCell>

                <TableCell>Photo</TableCell>
                <TableCell sx={{ cursor: 'pointer' }} onClick={sortName}>
                  Name{sortByName ? '⬇' : '⬆'}
                </TableCell>
                {/* <TableCell align="right">KYC Score</TableCell> */}
                <TableCell sx={{ cursor: 'pointer' }} onClick={sortPWID}>
                  PWID{sortByPWID ? '⬇' : '⬆'}
                </TableCell>
                <TableCell>RMID</TableCell>
                <TableCell>KYC Status</TableCell>
                <TableCell>Projects Enrolled</TableCell>
                <TableCell>Project Enrolled Amount</TableCell>
                <TableCell>Demat Status</TableCell>
                <TableCell>Share Holder Type</TableCell>
                <TableCell>Mobile No.</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedUsers.map((user, index) => {
                const serialNumber = page * limit + index + 1;
                return (
                  <Link href={'agency/' + user?.id}>
                    <TableRow hover key={user?.id} sx={{ cursor: 'pointer' }}>
                      {/* <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isUserSelected}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                          handleSelectOneUser(event, user?.id)
                        }
                        value={isUserSelected}
                      />
                    </TableCell> */}
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
                          {serialNumber}
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          color:
                            agencyCreatedDate < user.createdAt.slice(0, 10) &&
                            'green'
                        }}
                      >
                        <Typography width={90}>
                          {agencyCreatedDate < user.createdAt.slice(0, 10)
                            ? 'After Agency'
                            : 'Before Agency'}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Avatar alt="Avatar" src={`${avatarFetch(user)}`} />
                        {/* <Typography variant="body2" color="text.secondary" noWrap>
                        {format(user?.orderDate, 'MMMM dd yyyy')}
                      </Typography> */}
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          width="120px"
                          gutterBottom
                          noWrap
                        >
                          {user?.name}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          width="100px"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {user?.pw_id}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          width="120px"
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {user?.rm_id}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            color:
                              user?.kyc === 'APPROVED'
                                ? 'green'
                                : user?.kyc === 'REJECTED'
                                ? 'red'
                                : user?.kyc === 'ONGOING'
                                ? 'orange'
                                : 'white'
                          }}
                          variant="body1"
                          fontWeight="bold"
                          width="150px"
                          color="text.success"
                          gutterBottom
                          noWrap
                        >
                          {user?.kyc}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          width="120px"
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {numberOfProjectsEnrolledIn(user.documents)}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          width="120px"
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {checkProjectPaymentAmount(user.documents)}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          width="120px"
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {checkDemat(user) || (
                            <span style={{ color: 'red' }}>NOT RECIEVED</span>
                          )}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          textAlign="center"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          width="150px"
                          noWrap
                        >
                          {user?.membership}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          width="100px"
                          noWrap
                        >
                          {user?.mobile_number}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {user?.email}
                        </Typography>
                      </TableCell>
                      {/* <TableCell align="left">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {changeDate(
                            format(new Date(user?.createdAt), 'MM/dd/yyyy')
                          )}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {changeDate(
                            format(new Date(user?.updatedAt), 'MM/dd/yyyy')
                          )}
                        </Typography>
                      </TableCell> 
                       <TableCell align="right">
                      {getStatusLabel(user?.status)}
                    </TableCell> 
                     <TableCell align="right">
                      <Tooltip title="Edit Order" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.primary.lighter
                            },
                            color: theme.palette.primary.main
                          }}
                          color="inherit"
                          size="small"
                        >
                          <EditTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Order" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.error.lighter
                            },
                            color: theme.palette.error.main
                          }}
                          color="inherit"
                          size="small"
                        >
                          <DeleteTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell> */}
                    </TableRow>
                  </Link>
                );
              })}
            </TableBody>
          </Table>
          {/* <Table sx={{ display: 'none' }} ref={tableRefAll}> 
            <TableHead>
              <TableRow>
                <TableCell sx={{ cursor: 'pointer' }} onClick={sortName}>
                  Name{sortByName ? '⬇' : '⬆'}
                </TableCell>
                <TableCell sx={{ cursor: 'pointer' }} onClick={sortPWID}>
                  PWID{sortByPWID ? '⬇' : '⬆'}
                </TableCell>
                <TableCell>RMID</TableCell>
                <TableCell>KYC Status</TableCell>
                <TableCell>Projects Enrolled</TableCell>
                <TableCell>Project Enrolled Amount</TableCell>
                <TableCell>Demat Status</TableCell>
                <TableCell>Share Holder Type</TableCell>
                <TableCell>Mobile No.</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => {
                return (
                  <Link href={'agency/' + user?.id}>
                    <TableRow hover key={user?.id} sx={{ cursor: 'pointer' }}>
                    

                      <TableCell>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          width="120px"
                          gutterBottom
                          noWrap
                        >
                          {user?.name}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          width="100px"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {user?.pw_id}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          width="120px"
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {user?.rm_id}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            color:
                              user?.kyc === 'APPROVED'
                                ? 'green'
                                : user?.kyc === 'REJECTED'
                                ? 'red'
                                : user?.kyc === 'ONGOING'
                                ? 'orange'
                                : 'white'
                          }}
                          variant="body1"
                          fontWeight="bold"
                          width="150px"
                          color="text.success"
                          gutterBottom
                          noWrap
                        >
                          {user?.kyc}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          width="120px"
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {numberOfProjectsEnrolledIn(user.documents)}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          width="120px"
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {checkProjectPaymentAmount(user.documents)}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          width="120px"
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {checkDemat(user) || (
                            <span style={{ color: 'red' }}>NOT RECIEVED</span>
                          )}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          textAlign="center"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          width="150px"
                          noWrap
                        >
                          {user?.membership}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          width="100px"
                          noWrap
                        >
                          {user?.mobile_number}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {user?.email}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </Link>
                );
              })}
            </TableBody>
          </Table> */}
        </TableContainer>
        <Box p={2} gap={2} display={'flex'} justifyContent={'flex-end'}>
          <TablePagination
            component="div"
            count={filteredUsers.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 20, 50, 200, 1000]}
          />
          <DownloadTableExcel
            filename={'data'}
            sheet={'data'}
            currentTableRef={tableRef.current}
          >
            <LoadingButton variant="contained">
              Download Current Data
            </LoadingButton>
          </DownloadTableExcel>
          {/*  <DownloadTableExcel
            filename={'data'}
            sheet={'data'}
            currentTableRef={tableRefAll.current}
          >
            <LoadingButton variant="contained">Download All Data</LoadingButton>
          </DownloadTableExcel> */}
        </Box>
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

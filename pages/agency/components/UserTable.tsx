import { ChangeEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  TextField,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Table,
  TableBody,
  TableCell,
  Avatar,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  Button,
  MenuItem,
  Typography,
  CardHeader
} from '@mui/material';
import { User } from '@/models/user';
import Link from 'next/link';
import sortObjectsArray from 'sort-objects-array';
import JsonSearch from 'search-array';

interface Filters {
  status?:
    | 'all'
    | 'APPROVED'
    | 'NOT_INITIALIZED'
    | 'ONGOING'
    | 'REJECTED'
    | 'SUBMITTED';
  membership?: 'all' | 'BASIC' | 'ADVANCE';
}

const applyFilters = (users: User[], filters: Filters): User[] => {
  return users.filter((user) => {
    let matches = true;

    if (filters.status && user.kyc !== filters.status) {
      matches = false;
    }
    if (filters.membership && user.membership !== filters.membership) {
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
  const initialusersList = useSelector(
    (state: any) => state.allUsers.allTheUsers
  );
  const initialKycHandlerList = useSelector(
    (state: any) => state.allUsers.allKycHandlerList
  );
  const [usersList, setUsersList] = useState(
    useSelector((state: any) => state.allUsers.allTheUsers)
  );
  const [sortByName, setSortByName] = useState(true);
  const [sortByPWID, setSortByPWID] = useState(true);
  /*   const [sortByCreatedAt, setSortByCreatedAt] = useState(true);
  const [sortByUpdatedAt, setSortByUpdatedAt] = useState(true); */
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState<Filters>({});

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
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const avatarFetch = (userData) => {
    let photoUrl = '';
    userData.documents.forEach((doc) => {
      if (doc.title === 'avatar') {
        photoUrl = doc.url;
      }
    });
    return photoUrl;
  };

  const filteredUsers = applyFilters(usersList, filters);
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
  /*   const sortCreatedAt = () => {
    let order = 'desc';
    if (sortByCreatedAt) {
      order = '';
    }
    let sorted = sortObjectsArray(usersList, 'createdAt', { order: order });
    setUsersList(sorted);
    setSortByCreatedAt(!sortByCreatedAt);
  }; */
  /*   const sortUpdatedAt = () => {
    let order = 'desc';
    if (sortByUpdatedAt) {
      order = '';
    }
    let sorted = sortObjectsArray(usersList, 'updatedAt', { order: order });
    setUsersList(sorted);
    setSortByUpdatedAt(!sortByUpdatedAt);
  }; */
  const searcher = new JsonSearch(usersList, {
    indice: {
      pw_id: 'pw_id',
      rm_id: 'rm_id',
      email: 'email',
      name: 'name',
      kyc: 'kyc',
      mobile_number: 'mobile_number'
    }
  });
  const handlerNameCheck = (handlerId) => {
    let kychandlerName;
    initialusersList.map((user) => {
      if (user.id === handlerId) {
        kychandlerName = user.name;
      }
    });
    return kychandlerName;
  };

  const kycHandlerCheck = (id) => {
    let handlers;
    initialKycHandlerList.map((kyc) => {
      if (id === kyc.userId) {
        handlers = handlerNameCheck(kyc.handlerId);
      }
    });
    return handlers;
  };

  useEffect(() => {
    setUsersList(searcher.query(searchText));
    // console.log(searchText);
  }, [searchText]);
  return (
    <>
      <Card>
        <CardHeader
          action={
            <Box display={'flex'} gap={'20px'}>
              <Box display={'flex'} gap={'10px'}>
                <TextField
                  fullWidth
                  label="Search"
                  variant="outlined"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    if (!e.target.value) {
                      setUsersList(initialusersList);
                      setSearchText('');
                    }
                  }}
                />
                {/*  <Button
                  onClick={() => {
                    setUsersList(initialusersList);
                    setSearchText('');
                  }}
                  variant="outlined"
                  sx={{ ml: 2 }}
                >
                  Clear
                </Button> */}
              </Box>
              <Box width={'150px'}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Membership Type</InputLabel>
                  <Select
                    value={filters.membership || 'all'}
                    onChange={handleMembershipChange}
                    label="Membership"
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
              <Box width={'150px'}>
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
            </Box>
          }
          title="Partners List"
        />

        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
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
                <TableCell>KYC Handler</TableCell>
                <TableCell>Membership</TableCell>
                <TableCell>Mobile No.</TableCell>
                <TableCell>Email</TableCell>
                {/* <TableCell sx={{ cursor: 'pointer' }} onClick={sortCreatedAt}>
                  Created{sortByCreatedAt ? '⬇' : '⬆'}
                </TableCell>
                <TableCell sx={{ cursor: 'pointer' }} onClick={sortUpdatedAt}>
                  Updated{sortByUpdatedAt ? '⬇' : '⬆'}
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedUsers.map((user) => {
                return (
                  <Link href={'agency/user/' + user.id}>
                    <TableRow hover key={user.id} sx={{ cursor: 'pointer' }}>
                      {/* <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isUserSelected}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                          handleSelectOneUser(event, user.id)
                        }
                        value={isUserSelected}
                      />
                    </TableCell> */}

                      <TableCell>
                        <Avatar alt="Avatar" src={`${avatarFetch(user)}`} />
                        {/* <Typography variant="body2" color="text.secondary" noWrap>
                        {format(user.orderDate, 'MMMM dd yyyy')}
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
                          {user.name}
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
                          {user.pw_id}
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
                          {user.rm_id}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            color:
                              user.kyc === 'APPROVED'
                                ? 'green'
                                : user.kyc === 'REJECTED'
                                ? 'red'
                                : user.kyc === 'ONGOING'
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
                          {user.kyc}
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
                          {kycHandlerCheck(user.id)}
                        </Typography>
                      </TableCell>

                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          width="80px"
                          noWrap
                        >
                          {user.membership}
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
                          {user.mobile_number}
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
                          {user.email}
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
                            format(new Date(user.createdAt), 'MM/dd/yyyy')
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
                            format(new Date(user.updatedAt), 'MM/dd/yyyy')
                          )}
                        </Typography>
                      </TableCell> 
                       <TableCell align="right">
                      {getStatusLabel(user.status)}
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
        </TableContainer>
        <Box p={2}>
          <TablePagination
            component="div"
            count={filteredUsers.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25, 30]}
          />
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

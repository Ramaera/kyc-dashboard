import { GET_ALL_USERS } from '@/apollo/queries/auth';
import Loading from '@/components/Loading';
import variables from '@/config/variables';
import { User } from '@/models/user';
import { setAllTheUsers, gotData } from '@/state/slice/allUsersSlice';
import { useQuery } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import PropTypes from 'prop-types';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useDispatch, useSelector } from 'react-redux';

interface Filters {
  status?: 'all' | 'NOT STARTED' | 'APPROVED' | 'PENDING' | 'REJECTED';
  membership?: 'all' | 'ADVANCE' | 'BASIC';
}

const applyPagination = (
  users: User[],
  page: number,
  limit: number
): User[] => {
  return users.slice(page * limit, page * limit + limit);
};

const UserTable = ({ title }) => {
  const theme = useTheme();
  const tableRef = useRef(null);
  const [page, setPage] = useState<number>(0);
  const [currentSelectedButton, setCurrentSelectedButton] =
    useState<string>('');
  const _numbers = useSelector((state: any) => state.allUsers.totalNumbers);
  const [numbers, setNumbers] = useState({
    total: 0,
    pending: 0,
    completed: 0
  });

  const [limit, setLimit] = useState<number>(20);
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);
  const dispatch = useDispatch();

  /*  const getAllUser = useQuery(GET_ALL_USERS, {
    variables: {
      skip: 0,
      take: 5000
    }
  }); */
  /* 
  if (getAllUser.data && !usersList[0]) {
    dispatch(setAllTheUsers(getAllUser.data.getAllUser));
    dispatch(gotData(true));
  }
 */
  const checkProject = (docs, projectTitle) => {
    let statuses = [];

    docs.map((doc) => {
      doc.title.includes(projectTitle.toLowerCase()) &&
        statuses.push(doc?.status);
    });
    if (
      statuses.includes(variables.status.PENDING) ||
      statuses.includes(variables.status.ONGOING)
    ) {
      return variables.status.ONGOING;
    } else if (statuses.includes(variables.status.REJECTED)) {
      return variables.status.REJECTED;
    } else {
      return variables.status.APPROVED;
    }
  };

  const applyFilters = (users: User[], filters: Filters): any => {
    return users.filter((user) => {
      let matches = true;
      if (user.role === variables.role.ADMIN) {
        matches = false;
      }
      if (
        !user?.documents.find((doc) =>
          doc.title.toLowerCase().includes(title.toLowerCase())
        )
      ) {
        matches = false;
      }
      if (
        filters.status &&
        checkProject(user?.documents, title.toLowerCase()) !== filters.status
      ) {
        matches = false;
      }
      if ((filters.membership && user?.membership) !== filters.membership) {
        matches = false;
      }

      return matches;
    });
  };

  const [filters, setFilters] = useState<Filters>({
    status: null,
    membership: null
  });
  const filteredUsers = applyFilters(usersList, filters);
  const paginatedUsers = applyPagination(filteredUsers, page, limit);

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
  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value === 'All' ? -1 : event.target.value));
  };

  const censorMe = (text) => {
    if (!text) {
      return text;
    }
    let regex = /(?<!^).(?!$)/g;
    let w = text;
    return w.replace(regex, '*');
  };

  const checkTotal = () => {
    let total = 0;
    let pending = 0;
    let completed = 0;
    usersList.map((user) => {
      if (user.role === variables.role.ADMIN) {
        return;
      } else {
        let totalProject = 0;
        let totalPending = 0;
        let totalCompleted = 0;
        user?.documents.map((doc) => {
          if (doc.title.toLowerCase().includes(title.toLowerCase())) {
            totalProject = +1;
          }
          if (
            doc.title.toLowerCase().includes(title.toLowerCase()) &&
            (doc.status === variables.status.PENDING ||
              doc.status === variables.status.ONGOING ||
              doc.status === variables.status.NOT_INITIALIZED ||
              doc.status === variables.status.REJECTED)
          ) {
            totalPending += 1;
          }
          if (
            doc.title.toLowerCase().includes(title.toLowerCase()) &&
            doc.status === variables.status.APPROVED
          ) {
            totalCompleted += 1;
          }
        });
        if (totalProject) {
          total += 1;
        }
        if (totalPending) {
          pending += 1;
        } else if (totalCompleted) {
          completed += 1;
        }
      }
    });
    setNumbers({
      ...numbers,
      pending: pending,
      completed: completed
    });
  };

  useEffect(() => {
    checkTotal();
  }, [usersList]);

  useEffect(() => {
    setNumbers((val) => ({
      ...val,
      total: _numbers[`total${title}Subscribers`]
    }));
  }, [_numbers]);

  if (!usersList[0]) {
    return <Loading />;
  }
  return (
    <>
      <Card sx={{ mb: 4 }}>
        <Box mx={2}>
          <Box my={2} display={'flex'} gap={2} flexDirection={'column'}>
            <Button
              variant={
                currentSelectedButton.includes('total')
                  ? 'contained'
                  : 'outlined'
              }
              sx={{
                textTransform: 'uppercase',
                width: '490px',
                [theme.breakpoints.down('sm')]: {
                  width: '100%'
                }
              }}
              onClick={() => {
                setCurrentSelectedButton((val) =>
                  val.includes('total') ? '' : 'total'
                );
                handleMembershipChange('');
                handleStatusChange('all');
              }}
            >
              {/* {`Total ${title} : ` + filteredUsers.length} */}
              {`Total Enrolled ${title} : ${numbers.total}`}
            </Button>

            {currentSelectedButton.includes('total') && (
              <Box display={'flex'} gap={2}>
                <Button
                  variant={
                    currentSelectedButton === 'totalAdvance'
                      ? 'contained'
                      : 'outlined'
                  }
                  onClick={() => {
                    setCurrentSelectedButton((val) =>
                      val.includes('totalAdvance') ? 'total' : 'totalAdvance'
                    );
                    handleMembershipChange(variables.membership.ADVANCE);
                  }}
                >{`ADVANCE SHARE HOLDER LIST`}</Button>
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
                >{`BASIC SHARE HOLDER LIST`}</Button>
              </Box>
            )}
          </Box>
          <Box my={2} display={'flex'} gap={2} flexDirection={'column'}>
            <Button
              variant={
                currentSelectedButton.includes('pending')
                  ? 'contained'
                  : 'outlined'
              }
              sx={{
                textTransform: 'uppercase',
                width: '490px',
                [theme.breakpoints.down('sm')]: {
                  width: '100%'
                }
              }}
              onClick={() => {
                setCurrentSelectedButton((val) =>
                  val.includes('pending') ? '' : 'pending'
                );
                handleMembershipChange('');
                handleStatusChange(variables.status.ONGOING);
              }}
            >
              {`${title} pending  : ${numbers.pending}`}
            </Button>
            {currentSelectedButton.includes('pending') && (
              <Box display={'flex'} gap={2}>
                <Button
                  variant={
                    currentSelectedButton === 'pendingAdvance'
                      ? 'contained'
                      : 'outlined'
                  }
                  onClick={() => {
                    setCurrentSelectedButton((val) =>
                      val.includes('pendingAdvance')
                        ? 'pending'
                        : 'pendingAdvance'
                    );
                    handleMembershipChange(variables.membership.ADVANCE);
                  }}
                >{`ADVANCE SHARE HOLDER LIST`}</Button>
                <Button
                  variant={
                    currentSelectedButton === 'pendingBasic'
                      ? 'contained'
                      : 'outlined'
                  }
                  onClick={() => {
                    setCurrentSelectedButton((val) =>
                      val.includes('pendingBasic') ? 'pending' : 'pendingBasic'
                    );
                    handleMembershipChange(variables.membership.BASIC);
                  }}
                >{`BASIC SHARE HOLDER LIST`}</Button>
              </Box>
            )}
          </Box>
          <Box my={2} display={'flex'} gap={2} flexDirection={'column'}>
            <Button
              variant={
                currentSelectedButton.includes('completed')
                  ? 'contained'
                  : 'outlined'
              }
              sx={{
                textTransform: 'uppercase',
                width: '490px',
                [theme.breakpoints.down('sm')]: {
                  width: '100%'
                }
              }}
              onClick={() => {
                setCurrentSelectedButton((val) =>
                  val.includes('completed') ? '' : 'completed'
                );
                handleMembershipChange('');
                handleStatusChange(variables.status.APPROVED);
              }}
            >
              {`${title} Completed  : ${numbers.completed}`}
            </Button>
            {currentSelectedButton.includes('completed') && (
              <Box display={'flex'} gap={2}>
                <Button
                  variant={
                    currentSelectedButton === 'completedAdvance'
                      ? 'contained'
                      : 'outlined'
                  }
                  onClick={() => {
                    setCurrentSelectedButton((val) =>
                      val.includes('completedAdvance')
                        ? 'completed'
                        : 'completedAdvance'
                    );
                    handleMembershipChange(variables.membership.ADVANCE);
                  }}
                >{`ADVANCE SHARE HOLDER LIST`}</Button>
                <Button
                  variant={
                    currentSelectedButton === 'completedBasic'
                      ? 'contained'
                      : 'outlined'
                  }
                  onClick={() => {
                    setCurrentSelectedButton((val) =>
                      val.includes('completedBasic')
                        ? 'completed'
                        : 'completedBasic'
                    );
                    handleMembershipChange(variables.membership.BASIC);
                  }}
                >{`BASIC SHARE HOLDER LIST`}</Button>
              </Box>
            )}
          </Box>
        </Box>
        <Divider />
        {(currentSelectedButton.includes('Advance') ||
          currentSelectedButton.includes('Basic')) && (
          <>
            <CardHeader
              action={
                <Box display={'flex'} gap={'20px'}>
                  <Box
                    width={480}
                    display={'flex'}
                    gap={'10px'}
                    sx={{
                      [theme.breakpoints.down('sm')]: {
                        width: '100%'
                      }
                    }}
                  >
                    {/* <FormControl   variant="outlined">
                      <InputLabel>KYC Status</InputLabel>
                      <Select
                        value={filters.status || 'all'}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        label="Status"
                        autoWidth
                      >
                        {statusOptions.map((statusOption) => (
                          <MenuItem
                            key={statusOption.id}
                            value={statusOption.id}
                          >
                            {statusOption.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl> */}
                    {/*  <FormControl variant="outlined"  >
                  <InputLabel>Share Holder Type</InputLabel>
                  <Select
                    value={filters.membership || 'all'}
                    onChange={handleMembershipChange}
                    label="Project"
                    autoWidth
                  >
                    {membership.map((statusOption) => (
                      <MenuItem key={statusOption.id} value={statusOption.id}>
                        {statusOption.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
                  </Box>
                </Box>
              }
              title={title.toUpperCase() + ' LIST'}
            />
            <Divider />
          </>
        )}
        {(currentSelectedButton.includes('Advance') ||
          currentSelectedButton.includes('Basic')) && (
          <TableContainer>
            <Table ref={tableRef}>
              <TableHead>
                <TableRow>
                  <TableCell>S.No.</TableCell>
                  <TableCell>PW ID</TableCell>
                  <TableCell>Share Holder Type</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Father's Name</TableCell>
                  <TableCell align="center">Moibile No.</TableCell>
                  {/* <TableCell align="center">Email</TableCell> */}
                  <TableCell align="center">Enrollment Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedUsers.map((user, index) => {
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
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                          width={100}
                        >
                          {user?.membership}
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
                          {user?.name}
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
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          noWrap
                        >
                          {checkProject(user?.documents, title)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {(currentSelectedButton.includes('Advance') ||
          currentSelectedButton.includes('Basic')) && (
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
            <DownloadTableExcel
              filename={title ? title + '_KYC' : 'PROJECT_KYC'}
              sheet={title ? title + '_KYC' : 'PROJECT_KYC'}
              currentTableRef={tableRef.current}
            >
              <LoadingButton variant="contained">Download</LoadingButton>
            </DownloadTableExcel>
          </Box>
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

import {
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
  Typography,
  useTheme
} from '@mui/material';
import PropTypes from 'prop-types';
import { ChangeEvent, useRef, useState } from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
/* import BulkActions from '../../src/content/Management/Transactions/BulkActions';
 */
import { User } from '@/models/user';
import { LoadingButton } from '@mui/lab';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

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
    if ((filters.membership && user?.membership) !== filters.membership) {
      matches = false;
    }
    if ((filters.status && user?.kyc) !== filters.status) {
      matches = false;
    }
    if (
      filters.hajipur &&
      projectChecker(user.documents, 'hajipur_project_payment') !==
        filters.hajipur
    ) {
      matches = false;
    }

    if (
      filters.agra &&
      projectChecker(user.documents, 'agra_project_payment') !== filters.agra
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

/* const applyFilters = (users: User[], filters: Filters): User[] => {
  return users.filter((user) => {
    let matches = true;

    if (filters.status && user?.kyc !== filters.status) {
      matches = false;
    }
    if (filters.membership && user.membership !== filters.membership) {
      matches = false;
    }

    return matches;
  });
};
 */
const UserTable = () => {
  const theme = useTheme();
  const router = useRouter();
  const tableRef = useRef(null);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);
  const [usersList, setUsersList] = useState(
    useSelector((state: any) => state.allUsers.allTheUsers)
  );

  const [filters, setFilters] = useState<Filters>({
    status: null,
    hajipur: null,
    agra: null
  });
  const filteredUsers = applyFilters(usersList, filters);
  const paginatedUsers = applyPagination(filteredUsers, page, limit);

  const [kycList, setKycList] = useState<string | null>();

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
  const handleMembershipChange = (e) => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      membership: value
    }));
  };
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

  let index = -1;

  if (!usersList[0]) {
    router.push('/dashboard');
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '90vh',
          alignItems: 'center'
        }}
      >
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <Card>
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
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box m={1} width={150} display={'flex'}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>KYC Membership</InputLabel>
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
            </FormControl>
            {/*  <LoadingButton
              style={{ marginRight: 10 }}
              variant="contained"
              color={kycList ? 'secondary' : 'primary'}
              onClick={() => {
                setKycList(null);
              }}
            >
              ALL
            </LoadingButton>
            <LoadingButton
              style={{ marginRight: 10 }}
              variant="contained"
              color={kycList === 'ADVANCE' ? 'primary' : 'secondary'}
              onClick={() => {
                setKycList('ADVANCE');
              }}
            >
              ADVANCE
            </LoadingButton>
            <LoadingButton
              variant="contained"
              color={kycList === 'BASIC' ? 'primary' : 'secondary'}
              onClick={() => {
                setKycList('BASIC');
              }}
            >
              BASIC
            </LoadingButton> */}
          </Box>
          <Box m={2}>
            <DownloadTableExcel
              filename={kycList ? kycList + '_KYC' : 'ALL_KYC'}
              sheet={kycList ? kycList + '_KYC' : 'ALL_KYC'}
              currentTableRef={tableRef.current}
            >
              <LoadingButton variant="contained">Download</LoadingButton>
            </DownloadTableExcel>
          </Box>
        </Box>
        <Divider />
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
                <TableCell align="center">Hajipur Project</TableCell>
                <TableCell align="center">Agra Project</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedUsers.map((user) => {
                if (user.membership === kycList) {
                  return;
                }
                index += 1;
                return (
                  <TableRow hover key={user.id}>
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
                        {user.pw_id}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {/* {format(user.orderDate, 'MMMM dd yyyy')} */}
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
                        {user.name}
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
                        {censorMe(user.father_or_husband_name)}
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
                        {censorMe(user.mobile_number)}
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
                        {censorMe(user.email)}
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
                        {projectChecker(
                          user.documents,
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
                        {projectChecker(user.documents, 'agra_project_payment')}
                      </Typography>
                    </TableCell>
                  </TableRow>
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
            rowsPerPageOptions={[20, 100, 200, 'All']}
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

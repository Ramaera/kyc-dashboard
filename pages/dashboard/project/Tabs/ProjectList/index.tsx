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
import { User } from '@/models/user';
import { LoadingButton } from '@mui/lab';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import variables from '@/config/variables';

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
  const router = useRouter();
  const tableRef = useRef(null);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);
  const [usersList, setUsersList] = useState(
    useSelector((state: any) => state.allUsers.allTheUsers)
  );

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
      if (
        !user.documents.find((doc) =>
          doc.title.toLowerCase().includes(title.toLowerCase())
        )
      ) {
        matches = false;
      }
      if (user.role === variables.role.ADMIN) {
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
                <FormControl variant="outlined" fullWidth>
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
                </FormControl>
              </Box>
            </Box>
          }
          title={title.toUpperCase() + ' LIST'}
        />
        <Divider />
        {/*   <Typography variant="h4" textTransform={'uppercase'}>
          {`Total ${title} Subscribers`}:
        </Typography> 
        <Divider />*/}

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

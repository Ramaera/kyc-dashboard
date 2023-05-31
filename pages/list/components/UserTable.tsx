import { ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Typography,
  useTheme,
  CardHeader
} from '@mui/material';

/* import BulkActions from '../../src/content/Management/Transactions/BulkActions';
 */
import Label from '@/components/Label';
import Header from '@/layouts/SidebarLayout/Header';
import SidebarLayout from '@/layouts/SidebarLayout';
import { User, UserStatus } from '@/models/user';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import SidebarMenu from '@/layouts/SidebarLayout/Sidebar/SidebarMenu';
import { useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';

interface UserTableProps {
  className?: string;
  usersList: any[];
}

interface Filters {
  status?: UserStatus;
}

/* const applyFilters = (users: User[], filters: Filters): User[] => {
  return users.filter((user) => {
    let matches = true;

    if (filters.status && user.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
}; */

const applyPagination = (
  users: User[],
  page: number,
  limit: number
): User[] => {
  return users.slice(page * limit, page * limit + limit);
};

const UserTable = () => {
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const selectedBulkActions = selectedUsers.length > 0;
  const [kycList, setKycList] = useState('ADVANCE');
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'rejected',
      name: 'Rejected'
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

  const handleSelectAllUsers = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedUsers(
      event.target.checked ? usersList.map((user) => user.id) : []
    );
  };

  const handleSelectOneUser = (
    _event: ChangeEvent<HTMLInputElement>,
    userId: string
  ): void => {
    if (!selectedUsers.includes(userId)) {
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedUsers((prevSelected) =>
        prevSelected.filter((id) => id !== userId)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  // const filteredUsers = applyFilters(usersList, filters);
  // const paginatedUsers = applyPagination(filteredUsers, page, limit);
  const selectedSomeUsers =
    selectedUsers.length > 0 && selectedUsers.length < usersList.length;
  const selectedAllUsers = selectedUsers.length === usersList.length;
  const theme = useTheme();
  const censorMe = (text) => {
    if (!text) {
      return text;
    }
    let regex = /(?<!^).(?!$)/g;
    let w = text;
    return w.replace(regex, '*');
  };
  const projectChecker = (user, project) => {
    let status = 'NOT ENROLLED';
    user.map((doc) => {
      if (doc.title === project) {
        console.log(doc.status);
        status = doc.status;
      }
    });
    return status;
  };

  let index = -1;
  return (
    <>
      <Card>
        {!selectedBulkActions && (
          <CardHeader
            action={
              <Box width={150}>
                {/* <FormControl fullWidth variant="outlined">
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
                </FormControl> */}
              </Box>
            }
            title="KYC LIST"
          />
        )}
        <Divider />

        <Box m={2}>
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
          </LoadingButton>
        </Box>
        <Divider />
        <TableContainer>
          <Table>
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
              {usersList.map((user) => {
                if (user.membership === kycList) {
                  return;
                }
                const isUserSelected = selectedUsers.includes(user.id);
                index += 1;
                return (
                  <TableRow hover key={user.id} selected={isUserSelected}>
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
                          : user.kyc}
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

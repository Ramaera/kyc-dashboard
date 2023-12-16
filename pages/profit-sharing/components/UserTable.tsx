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
import { ALL_KYC_USERS } from '@/apollo/queries/auth';
import Loading from '@/components/Loading';
import { useQuery } from '@apollo/client';
import { Toaster } from 'react-hot-toast';
import UsersData from './Users5%ProfitData';

const UserTable = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const tableRef = useRef(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(100);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [allUsers, setAllUsers] = useState([]);
  const [currentSelectedButton, setCurrentSelectedButton] =
    useState<string>('threePercentProfit');
  const [usersList, setUsersList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const allKycUsers = useQuery(ALL_KYC_USERS, {
    variables: {
      skip: 0,
      take: 5000,
      input: {
        searchTerm: 'BASIC'
      }
    }
  });

  const checkDemat = (user) => {
    let status = 'APPROVED';
    user?.documents?.map((doc) => {
      if (doc.title.includes('demat')) {
        status = doc.status;
      }
    });
    return status;
  };

  const handleSearchInput = (searchValue) => {
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    if (allKycUsers.data || UsersData) {
      const fetchedUsers = allKycUsers?.data?.allKycUser
        .filter(
          (user) => user.kyc === 'APPROVED' && checkDemat(user) === 'APPROVED'
        )
        .slice(0, 3000);

      const filteredData = currentSelectedButton.includes('threePercentProfit')
        ? fetchedUsers
        : currentSelectedButton.includes('fivePercentProfit')
        ? UsersData
        : fetchedUsers;

      const categortyData = filteredData?.filter(
        (user) =>
          user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.pw_id?.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setAllUsers(categortyData);
      setTotalPages(Math.ceil(categortyData?.length / limit));
      setUsersList(categortyData?.slice(0, limit));
    }
  }, [allKycUsers.data, UsersData, limit, currentSelectedButton, searchTerm]);

  const handlePageChange = (selectedPage) => {
    const startIndex = (selectedPage - 1) * limit;
    const endIndex = startIndex + limit;
    setUsersList(allUsers.slice(startIndex, endIndex));
    setCurrentPage(selectedPage);
  };

  const handleButtonClick = () => {
    setSearchValue('');
    handleSearchInput('');
    setCurrentPage(1);
  };

  const filteredUsers = usersList;

  if (!usersList) {
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
                  currentSelectedButton === 'threePercentProfit'
                    ? 'contained'
                    : 'outlined'
                }
                sx={{ textTransform: 'uppercase', padding: 2 }}
                onClick={() => {
                  setCurrentSelectedButton('threePercentProfit');
                  handleButtonClick();
                }}
              >{`3% Profit Sharing Ramaera`}</Button>

              <Button
                variant={
                  currentSelectedButton === 'fivePercentProfit'
                    ? 'contained'
                    : 'outlined'
                }
                sx={{ textTransform: 'uppercase', padding: 2 }}
                onClick={() => {
                  setCurrentSelectedButton('fivePercentProfit');
                  handleButtonClick();
                }}
              >{`5% Profit Sharing Ramaera`}</Button>
            </Box>
          </Box>
        </Box>

        {(currentSelectedButton.includes('fivePercentProfit') ||
          currentSelectedButton.includes('threePercentProfit')) && (
          <CardHeader
            action={
              <Box
                display={'flex'}
                gap={'20px'}
                px={2}
                sx={{
                  [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column-reverse',
                    gap: 0,
                    padding: 0
                  }
                }}
              >
                <Box
                  // my={2}
                  display={'flex'}
                  gap={2}
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      display: 'flex',
                      flexDirection: 'row',
                      width: '82.5vw'
                    }
                  }}
                >
                  <TextField
                    fullWidth
                    label="Search"
                    variant="outlined"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    onClick={() => handleSearchInput(searchValue)}
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

        {(currentSelectedButton.includes('fivePercentProfit') ||
          currentSelectedButton.includes('threePercentProfit')) && (
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
              Total Record : {filteredUsers?.length}
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
                  count={totalPages}
                  page={currentPage}
                  color="primary"
                  onChange={(event, selectedPage) =>
                    handlePageChange(selectedPage)
                  }
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

        {/* 3% Profit sharing data */}
        {currentSelectedButton.includes('threePercentProfit') && (
          <>
            <TableContainer>
              <Table ref={tableRef}>
                <TableHead>
                  <TableRow>
                    <TableCell>S.No.</TableCell>
                    <TableCell>PW ID</TableCell>
                    <TableCell>Name</TableCell>{' '}
                    {/* <TableCell align="center">createdAt</TableCell> */}
                    <TableCell align="center">Membership</TableCell>
                    <TableCell align="center">KYC Status</TableCell>
                    <TableCell align="center">Demat</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers?.map((user, index) => {
                    console.log('user', user);
                    if (!user) {
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
                        {/* <TableCell align="center">
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            align="center"
                            noWrap
                          >
                            {user?.createdAt?.slice(0, 10)}
                          </Typography>
                        </TableCell> */}
                        <TableCell align="center">
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            align="center"
                            noWrap
                          >
                            {user?.membership}
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
                            {user?.kyc}
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
                            {checkDemat(user)}
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

        {/* 5% Profit sharing data */}
        {currentSelectedButton.includes('fivePercentProfit') && (
          <>
            <TableContainer>
              <Table ref={tableRef}>
                <TableHead>
                  <TableRow>
                    <TableCell>S.No.</TableCell>
                    <TableCell>PW ID</TableCell>
                    <TableCell>Name</TableCell>{' '}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers?.map((user, index) => {
                    console.log('user', user);
                    if (!user) {
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

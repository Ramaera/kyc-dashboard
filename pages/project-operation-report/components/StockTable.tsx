import {
  Box,
  Button,
  Card,
  CardHeader,
  Dialog,
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
import { LoadingButton } from '@mui/lab';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import React from 'react';
// import AllUserTable from './AllUserTable';

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
  hyderabad?: 'all' | 'NOT ENROLLED' | 'APPROVED' | 'PENDING';
  membership?: 'all' | 'ADVANCE' | 'BASIC';
}

const StockTable = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const tableRef = useRef(null);
  const [page, setPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(100);
  const [allData, setAllData] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [kycList, setKycList] = useState<string | null>();
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [poNumber, setCurrentPONumber] = useState('');

  const handleRowClick = (index, poName) => {
    setSelectedRowIndex((prevIndex) => (prevIndex === index ? null : index));
    setCurrentPONumber(poName);
  };
  const [currentSelectedButton, setCurrentSelectedButton] =
    useState<string>('');

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

  //   useEffect(() => {
  //     const fetchsubData = async () => {
  //       try {
  //         const response = await fetch(
  //           `https://erp.ramaera.com/api/resource/Purchase Order/${poNumber}`,
  //           {
  //             headers: {
  //               Authorization: `token ${process.env.NEXT_PUBLIC_ERP_TOKEN}`
  //             }
  //           }
  //         );
  //         if (!response.ok) {
  //           console.log('err');
  //           throw new Error('Network response was not ok');
  //         }
  //         const data = await response.json();
  //         const data3 = data.data;
  //         // setSubItemData(data3);
  //         // setUserData(data);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     fetchsubData();
  //   }, [poNumber]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://erp.ramaera.com/api/resource/Stock Balance',
          {
            headers: {
              Authorization: `token ${process.env.NEXT_PUBLIC_ERP_TOKEN}`
            }
          }
        );
        if (!response.ok) {
          console.log('err');
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const data2 = data.data;
        console.log('data', data2);

        // setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //     if (allKycUsers.data) {
  //       setUsersList(allKycUsers.data.allKycUser);
  //       _usersList = allKycUsers.data.allKycUser;
  //     }
  //   }, [allKycUsers]);

  //   useEffect(() => {
  //     setNumbers({
  //       totalKYC: _numbers.totalSubscribers,
  //       totalAdvance: _numbers.totalAdvanceSubscribers,
  //       totalBasic: _numbers.totalBasicSubscribers
  //     });
  //   }, [_numbers]);
  const [filters, setFilters] = useState<Filters>({
    status: null,
    hajipur: null,
    agra: null,
    hyderabad: null
  });
  //   useEffect(() => {
  //     if (
  //       currentSelectedButton.includes('totalAvdance') ||
  //       currentSelectedButton.includes('totalBasic')
  //     ) {
  //       search();
  //     }
  //   }, [searchText]);

  //   useEffect(() => {
  //     if (!data?.searchUsers[0]) {
  //       // toast.error('Not Found');
  //     } else if (data?.searchUsers[0]) {
  //       setUsersList(data.searchUsers);
  //     }
  //   }, [data?.searchUsers]);
  //   const filteredUsers = applyFilters(usersList, filters);

  const handleLimitChange = (
    event: ChangeEvent<HTMLInputElement | any>
  ): void => {
    setLimit(
      parseInt(event.target.value === 'All' ? 5000 : event.target.value)
    );
  };

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
            >
              {`Purchase Orders`}
            </Button>
          </Box>
        </Box>
        <Divider />
        {
          <>
            <TableContainer>
              <Table ref={tableRef}>
                <TableHead>
                  <TableRow>
                    <TableCell>S.No.</TableCell>
                    <TableCell>Purchase Date</TableCell>
                    <TableCell>Purchase Order Number</TableCell>
                    <TableCell>Supplier Name</TableCell>
                    <TableCell>Bill Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {map((data, index) => (
                    <React.Fragment>
                      <TableRow
                        onClick={() => handleRowClick(index, data?.name)}
                        key={index}
                      >
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                            width={50}
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
                            width={150}
                          >
                            {data?.transaction_date}
                          </Typography>
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
                            {data?.name}
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
                            {data?.supplier_name}
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
                            ₹ {data?.grand_total}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      {selectedRowIndex === index && (
                        <TableRow>
                          <TableCell colSpan={5}>
                            <Table>
                              <TableHead>
                                <TableRow
                                  style={{ backgroundColor: '#7063C0' }}
                                >
                                  <TableCell>S.No.</TableCell>
                                  <TableCell>Items</TableCell>
                                  <TableCell>Qty</TableCell>
                                  <TableCell>Price</TableCell>
                                  <TableCell>Total</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {subItem?.items?.map((details, index) => (
                                  <TableRow>
                                    <TableCell>
                                      <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                        width={10}
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
                                        width={300}
                                      >
                                        {details.description}
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
                                        {details.qty} {details.uom}
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
                                        ₹ {details.rate}
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
                                        ₹ {details.amount}
                                      </Typography>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))} */}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        }
        <Toaster position="bottom-center" reverseOrder={false} />
      </Card>
    </>
  );
};

// UserTable.propTypes = {
//   usersList: PropTypes.array.isRequired
// };

// UserTable.defaultProps = {
//   usersList: []
// };

export default StockTable;

import { GET_ALL_USERS } from '@/apollo/queries/auth';
import Loading from '@/components/Loading';
import { useQuery } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { Toaster } from 'react-hot-toast';

const projectChecker = (user, project) => {
  let status = 'NOT ENROLLED';
  user?.map((doc) => {
    if (doc.title === project) {
      status = doc.status;
    }
  });
  return status;
};

const checkDemat = (user) => {
  let status = 'NOT_RECIEVED';
  user.documents.map((doc) => {
    if (doc.title.includes('demat')) {
      status = doc.status;
    }
  });
  return status;
};

const AllUserTable = () => {
  const tableRef = useRef(null);
  const [usersList, setUsersList] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const getAllUser = useQuery(GET_ALL_USERS, {
    variables: {
      skip: 0,
      take: 10000
    }
  });

  useEffect(() => {
    if (getAllUser?.data?.getAllUser) {
      setUsersList(getAllUser.data.getAllUser);
    }
  }, [getAllUser]);

  const censorMe = (txt) => {
    if (!txt || txt == 'NULL') {
      return '';
    }
    let text = txt.slice(0, 4) + txt.slice(-4, txt.length);
    let regex = /(?<!^).(?!$)/g;
    let w = text;
    return w.replace(regex, '*');
  };

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'data',
    sheet: 'data'
  });

  const refreshAndDownload = () => {
    setRefresh(2423);
    onDownload();
  };

  if (!usersList[0]) {
    return <Loading />;
  }

  return (
    <>
      <Card>
        <>
          <TableContainer>
            <Table key={refresh} ref={tableRef} sx={{ display: 'none' }}>
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
                  <TableCell align="center">Hyderabad Project</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersList.map((user, index) => {
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
                      <TableCell align="center">
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
                      <TableCell align="center">
                        <Typography
                          width="120px"
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          noWrap
                        >
                          {checkDemat(user) === 'NOT_RECIEVED'
                            ? 'NOT RECEIVED'
                            : checkDemat(user)}
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
                          {projectChecker(
                            user?.documents,
                            'hajipur_project_payment'
                          )}
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
                          {projectChecker(
                            user?.documents,
                            'agra_project_payment'
                          )}
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
                          {projectChecker(
                            user?.documents,
                            'hyderabad_project_payment'
                          )}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            <Box p={2} gap={2} display={'flex'} justifyContent={'flex-end'}>
              <LoadingButton variant="contained" onClick={refreshAndDownload}>
                Download All Data
              </LoadingButton>
            </Box>
          </TableContainer>
        </>
        <Toaster position="bottom-center" reverseOrder={false} />
      </Card>
    </>
  );
};

AllUserTable.propTypes = {
  usersList: PropTypes.array.isRequired
};

AllUserTable.defaultProps = {
  usersList: []
};

export default AllUserTable;

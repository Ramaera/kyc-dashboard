import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import Link from 'next/link';
import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  CARD_USERS_DETAIL,
  FIND_CARD_OF_A_USER,
  SEND_VERIFICATION_EMAIL
} from '@/apollo/queries/auth';
import { useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';

const UserTable = ({ user }) => {
  const [sendVerificationEmail] = useMutation(SEND_VERIFICATION_EMAIL);
  const theme = useTheme();
  // const [selectedId, setSelectedId] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [emailUser, setEmailUser] = useState();

  // const [cardUsers, setCardUsers] = useState();

  // const agencyCode = useSelector(
  //   (state: any) => state.user?.agencyCode?.agencyCode
  // );
  // const cardUserData = useQuery(CARD_USERS_DETAIL, {
  //   variables: { agencyCode: agencyCode }
  // });
  // console.log('user', user);

  // useEffect(() => {
  //   if (cardUserData) {
  //     setCardUsers(cardUserData.data?.findCardHoldersInAgency);
  //   }
  // }, [cardUserData, user]);

  const viewCardButton = (id) => {
    const { data } = useQuery(FIND_CARD_OF_A_USER, {
      variables: { userId: id }
    });
    const cardlength = data?.findCardOfaUser;

    if (cardlength?.length > 0) {
      return true;
    }
  };

  const handleSendVerificationEmail = async (id, email) => {
    setLoading(true);
    try {
      await sendVerificationEmail({
        variables: {
          id: id
        }
      });
      setEmailUser(email);
      await handleVerifyEmail(id);
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleVerifyEmail = (id) => {
    setDisabled(id);
    setOpen(true);

    setTimeout(() => {
      setDisabled(null);
    }, 30000);
  };
  // console.log('user', user);

  useEffect(() => {}, []);
  return (
    <>
      <Card>
        <Box>
          <TableContainer
            sx={{
              borderLeft: '1px solid #2c3151'
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>E-Mail</TableCell>
                  <TableCell>Mobile </TableCell>
                  <TableCell>Email Verify</TableCell>
                  <TableCell>Apply For Card</TableCell>
                  <TableCell>View Card</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user?.map((item, index) => (
                  <>
                    <TableRow key={item?.id} hover sx={{ cursor: 'pointer' }}>
                      <TableCell sx={{ padding: '2px' }}>
                        <Typography
                          textAlign="center"
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          width={30}
                        >
                          {index + 1}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ padding: 1 }}>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          sx={{
                            [theme.breakpoints.down('sm')]: {
                              minWidth: 150
                            }
                          }}
                        >
                          {item?.name}
                        </Typography>
                      </TableCell>

                      <TableCell sx={{ padding: 1 }}>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          width="150px"
                          color="text.success"
                          gutterBottom
                          noWrap
                        >
                          {item?.email}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ padding: 1 }}>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                          width="100px"
                        >
                          {item?.mobileNumber}
                        </Typography>
                      </TableCell>

                      <TableCell
                        sx={{
                          padding: 1,
                          [theme.breakpoints.down('sm')]: {
                            minWidth: 150
                          }
                        }}
                      >
                        <LoadingButton
                          loading={isLoading}
                          onClick={() => {
                            handleSendVerificationEmail(item?.id, item?.email);
                          }}
                          disabled={disabled || item?.emailVerified}
                          variant="contained"
                          sx={{
                            fontSize: 10
                          }}
                        >
                          {item?.emailVerified ? 'Verified' : ' Verify Email'}
                        </LoadingButton>
                      </TableCell>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {'Verify Email?'}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            We have sent a verification email on {emailUser}
                            {/* <br /> */}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} autoFocus>
                            OK
                          </Button>
                        </DialogActions>
                      </Dialog>
                      <TableCell
                        sx={{
                          padding: 1,
                          [theme.breakpoints.down('sm')]: {
                            minWidth: 150
                          }
                        }}
                      >
                        <Link
                          href={'agency-services/' + `${item?.id}` + `&cardui`}
                        >
                          <Button variant="contained" sx={{ fontSize: 10 }}>
                            Apply #myCard
                          </Button>
                        </Link>
                      </TableCell>
                      <TableCell
                        sx={{
                          padding: 1,
                          [theme.breakpoints.down('sm')]: {
                            minWidth: 120
                          }
                        }}
                      >
                        <Link
                          href={
                            'agency-services/' + `${item?.id}` + `&viewcard`
                          }
                        >
                          <Button
                            disabled={
                              viewCardButton(item?.id) === true ? false : true
                            }
                            variant="contained"
                            sx={{
                              fontSize: 10
                            }}
                          >
                            View Card
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  </>
                ))}

                <Toaster position="bottom-center" reverseOrder={false} />
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </>
  );
};
export default UserTable;

import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const CardUserTable = ({ user }) => {
  const theme = useTheme();

  console.log('agencyCode', user);

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
                  <TableCell>Card Number</TableCell>
                  <TableCell>Card User</TableCell>
                  <TableCell>E-Mail</TableCell>
                  <TableCell>Card Type</TableCell>
                  <TableCell>Card Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user?.map((userItem, userIndex) => (
                  <React.Fragment key={userItem.id}>
                    {userItem?.myCard?.map((cardItem, cardIndex) => (
                      <TableRow
                        key={`${userItem?.id}-${cardIndex}`}
                        hover
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell sx={{ padding: '2px' }}>
                          <Typography
                            textAlign="center"
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            width={30}
                          >
                            {cardIndex + 1}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ padding: 1 }}>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            width="150px"
                          >
                            {cardItem?.cardNumber}
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
                            {userItem?.name}
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
                            {userItem?.email}
                          </Typography>
                        </TableCell>

                        <TableCell sx={{ padding: 1 }}>
                          <Typography
                            align="center"
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            width="100px"
                          >
                            {cardItem?.cardType}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ padding: 1 }}>
                          <Typography
                            align="center"
                            variant="body1"
                            fontWeight="bold"
                            // color="text.primary"
                            gutterBottom
                            width="100px"
                            color={cardItem?.isActive ? 'limegreen' : 'red'}
                          >
                            {cardItem?.isActive ? 'Active' : 'InActive'}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </>
  );
};
export default CardUserTable;

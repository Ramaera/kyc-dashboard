import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { CARD_USERS_DETAIL } from '@/apollo/queries/auth';
import { useSelector } from 'react-redux';

const UserTable = () => {
  const agencyCode = useSelector(
    (state: any) => state.user?.agencyCode?.agencyCode
  );
  const cardUserData = useQuery(CARD_USERS_DETAIL, {
    variables: { agencyCode: 'RLI1234' }
  });
  // console.log('data', cardUserData.data?.findCardHoldersInAgency, agencyCode);
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
                  <TableCell>Mobile Number</TableCell>
                  {/* <TableCell>Address</TableCell> */}
                  <TableCell>Pan No</TableCell>
                  <TableCell>Aadhar No</TableCell>
                  <TableCell>Apply</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cardUserData?.data?.findCardHoldersInAgency?.map(
                  (item, index) => (
                    <>
                      <TableRow key={item.id} hover sx={{ cursor: 'pointer' }}>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
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
                          >
                            {item.name}
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            width="100px"
                            color="text.success"
                            gutterBottom
                            noWrap
                          >
                            {item.email}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            width="80px"
                          >
                            {item.mobileNumber}
                          </Typography>
                        </TableCell>
                        {/* <TableCell>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap
                            width="80px"
                          ></Typography>
                        </TableCell> */}
                        <TableCell align="center">
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            width="100px"
                            color="text.success"
                            gutterBottom
                            noWrap
                          >
                            123456789012
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            width="100px"
                            color="text.success"
                            gutterBottom
                            noWrap
                          >
                            123456789012
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Link href={'agency-services/' + `${item.id}`}>
                            <Button variant="contained">Apply #myCard</Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    </>
                  )
                )}

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

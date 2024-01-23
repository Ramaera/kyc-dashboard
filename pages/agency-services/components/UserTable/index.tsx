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
import React from 'react';
import { Toaster } from 'react-hot-toast';

const UserTable = ({ formData }: any) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    formData;
  };
  const User = [
    {
      Name: 'dfghjkl'
    }
  ];

  console.log('Form Data in UserTable:', formData);

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
                  <TableCell>Address</TableCell>
                  <TableCell>Pan No</TableCell>
                  <TableCell>Aadhar No</TableCell>
                  <TableCell>Apply</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover sx={{ cursor: 'pointer' }}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      width={30}
                    >
                      1
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                    >
                      Kartikey Sharma
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
                      Kartikeysharma17@gmail.com
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
                      1234567890
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                      width="80px"
                    >
                      qwertyuiopasdfghjklzxcvbnm
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
                    {User.map((user) => (
                      <Link href={'agency-services/' + user?.id}>
                        <Button>Apply #myCard</Button>
                      </Link>
                    ))}
                  </TableCell>
                </TableRow>

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

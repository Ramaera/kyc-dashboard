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
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

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
  const [allUsersList, setAllUserList] = useState([]);
  const apiUrl = 'http://localhost:6768/card-holder-users/RLI1234';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(apiUrl);
        console.log(data);
        setAllUserList(data.data);
        // console.log(allUsersList);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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
                {allUsersList.map((data) => (
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
                        {data.name}
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
                        {data.email}
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
                        {data.mobileNumber}
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
                      <Link href={'agency-services/' + `${data.id}`}>
                        <Button>Apply #myCard</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
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

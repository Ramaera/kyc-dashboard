import { GET_USER_DETAILS, GET_DOCUMENT_DETAILS } from '@/apollo/queries/auth';
import { useQuery } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Table,
  Button,
  useTheme,
  Card,
  Box,
  TableContainer,
  Typography,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Link
} from '@mui/material';
import React from 'react';

const WalletHistoryRow = ({ item, index }) => {
  const userIdDetails = item?.metaData.map((list) => list.userId)[0];
  const documentIdDetails = item?.metaData.map((list) => list.documentId)[2];

  const getUserDetails = useQuery(GET_USER_DETAILS, {
    variables: {
      id: userIdDetails
    }
  });

  const { data, error, loading } = useQuery(GET_DOCUMENT_DETAILS, {
    variables: {
      id: documentIdDetails
    }
  });

  return (
    <>
      <TableRow sx={{ cursor: 'pointer' }}>
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
          >
            {item?.metaData?.map((list) => list?.timeStamp)}
          </Typography>
        </TableCell>

        <TableCell>
          {item.category === 'DEPOSIT_KYC' && (
            <Typography
              variant="body1"
              fontWeight="bold"
              color="text.primary"
              gutterBottom
              noWrap
            >
              Reward for completing KYC for PWID {''}
              {getUserDetails?.data?.getUserDetails?.pw_id}
            </Typography>
          )}
          {item.category === 'DEPOSIT_PROJECT' && (
            <Typography
              variant="body1"
              fontWeight="bold"
              color="text.primary"
              gutterBottom
              noWrap
            >
              Reward for Project{' '}
              {data?.getDocumentDetails?.title.includes('hajipur')
                ? data.getDocumentDetails.title.slice(0, 7).toUpperCase()
                : data?.getDocumentDetails?.title.includes('agra')
                ? data.getDocumentDetails.title.slice(0, 4).toUpperCase()
                : ''}{' '}
              for PWID {data?.getDocumentDetails?.user.pw_id}
            </Typography>
          )}
        </TableCell>

        <TableCell align="left">
          <Typography
            variant="body1"
            width="100px"
            fontWeight="bold"
            color="text.primary"
            noWrap
          >
            {item.type}
          </Typography>
        </TableCell>

        <TableCell>
          <Typography
            fontWeight="bold"
            width="100px"
            color={item.type === 'DEPOSIT' ? 'green' : 'red'}
            gutterBottom
            noWrap
          >
            {item.type === 'DEPOSIT' && '+ ₹ ' + item.amount}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            width="80px"
            noWrap
          >
            ₹ {item.finalBalance}
          </Typography>
        </TableCell>
      </TableRow>
    </>
  );
};

export default WalletHistoryRow;

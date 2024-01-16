import React from 'react';
import { LoadingButton } from '@mui/lab';
import Link from 'next/link';
import { Toaster, toast } from 'react-hot-toast';

import {
  Box,
  Card,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_ALL_PROJECT_REFERRAL } from '../../../src/apollo/queries/auth';

const CustomTable = ({
  projectName,
  data,
  walletTransferShowButton,
  isLoading,
  isDisable,
  handleTransferToWallet
}) => {
  const getAllProjectTransaction = useQuery(GET_ALL_PROJECT_REFERRAL);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>S.No.</TableCell>
          {walletTransferShowButton && (
            <TableCell>Transfer To Wallet</TableCell>
          )}
          <TableCell>Name</TableCell>
          <TableCell>PWID</TableCell>
          <TableCell>KYC Status</TableCell>
          <TableCell>Membership</TableCell>
          <TableCell>Invest Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((document, index) => (
          <TableRow hover key={document?.id} sx={{ cursor: 'pointer' }}>
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
            {walletTransferShowButton && (
              <TableCell>
                <LoadingButton
                  loading={isLoading[document.id]}
                  variant="contained"
                  sx={{
                    fontSize: 12,
                    cursor: 'unset',
                    padding: 1,
                    minWidth: 200
                  }}
                  disabled={
                    isDisable[document.id] ||
                    getAllProjectTransaction.data?.getAllProjectReferral.find(
                      (data) => data.documentId === document.id
                    )
                  }
                  onClick={() =>
                    handleTransferToWallet(
                      document,
                      document?.user?.id,
                      'project'
                    )
                  }
                >
                  Transfer Amount To Wallet
                </LoadingButton>
              </TableCell>
            )}
            <TableCell>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="text.primary"
                gutterBottom
                noWrap
              >
                {document?.user?.name === 'NULL' ? null : document?.user?.name}
              </Typography>
            </TableCell>
            <Link href="" scroll={false}>
              <TableCell
                align="left"
                onClick={() => {
                  toast.success(`PWID ${document.user.pw_id} Copied`);
                  navigator.clipboard.writeText(document.user.pw_id);
                }}
              >
                <Typography
                  variant="body1"
                  width="100px"
                  fontWeight="bold"
                  color="text.primary"
                  noWrap
                >
                  {document?.user?.pw_id === 'NULL'
                    ? null
                    : document?.user?.pw_id}
                </Typography>
              </TableCell>
            </Link>
            <TableCell>
              <Typography
                style={{
                  color:
                    document?.user?.kyc === 'APPROVED'
                      ? 'limegreen'
                      : document?.user?.kyc === 'REJECTED'
                      ? 'red'
                      : document?.user?.kyc === 'ONGOING'
                      ? 'orange'
                      : 'white'
                }}
                variant="body1"
                fontWeight="bold"
                width="100px"
                color="text.success"
                gutterBottom
                noWrap
              >
                {document?.user?.kyc}
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography
                variant="body1"
                fontWeight="bold"
                color="text.primary"
                gutterBottom
                width="80px"
                noWrap
              >
                {document?.user?.membership}
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
                {document?.amount}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
        <Toaster position="bottom-center" reverseOrder={false} />
      </TableBody>
    </Table>
  );
};

export default CustomTable;

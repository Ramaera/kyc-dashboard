import { ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Typography,
  CardHeader,
  Select,
  MenuItem
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
const UserTable = () => {
  return (
    <>
      <div>
        <Card
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
            flexDirection: 'column'
          }}
        >
          <div>
            <a href="ramaera.com/delete" target="_blank">
              <LoadingButton
                variant="contained"
                sx={{ marginTop: '20px', marginBottom: '20px', width: '150px' }}
              >
                Delete Account
              </LoadingButton>
            </a>
          </div>

          <div>
            <LoadingButton
              variant="contained"
              sx={{ marginTop: '20px', marginBottom: '20px', width: '150px' }}
            >
              Account
            </LoadingButton>
          </div>
        </Card>
      </div>
    </>
  );
};

export default UserTable;

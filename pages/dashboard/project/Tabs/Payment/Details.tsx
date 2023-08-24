import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';
import { AllProjectDetails, AllBankDetails } from './AllProjectData';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Details = ({ title }) => {
  const [isHidden, setHidden] = useState({ bank: false, project: false });
  let bankTitle = title + 'BankDetails';
  let projectTitle = title + 'ProjectDetails';
  const amountFromProject = `total${title}Amount`;
  const projectAmount = useSelector(
    (state: any) => state.allUsers[amountFromProject]
  );

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    }
  }));

  const diff = projectAmount / AllProjectDetails[projectTitle][0];
  const risedFundPer = diff * 100;

  return (
    <>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => setHidden({ ...isHidden, bank: !isHidden.bank })}
      >
        <Typography variant="h4" sx={{ my: 2 }}>
          Bank Detail &#8964;
        </Typography>
      </div>
      {isHidden.bank && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableBody>
              {AllBankDetails[bankTitle].map((bankData) => {
                return (
                  <TableRow
                    key={bankData.key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {bankData.key}
                    </TableCell>
                    <TableCell align="right">{bankData.info}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => setHidden({ ...isHidden, project: !isHidden.project })}
      >
        <Typography variant="h4" sx={{ my: 2, marginTop: 5 }}>
          Project Detail &#8964;
        </Typography>
      </div>
      {isHidden.project && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableBody>
              {AllProjectDetails[projectTitle].map((row) => {
                if (!row.key) {
                  return;
                }
                return (
                  <TableRow
                    key={row.key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.key}
                    </TableCell>
                    <TableCell align="right">
                      {row.key === 'Till Raised Fund'
                        ? projectAmount
                        : row.key === 'Remain Funding'
                        ? AllProjectDetails[projectTitle][0] - projectAmount
                        : row.info}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Box sx={{ flexGrow: 1, my: 2 }}>
        <Typography variant="h6">Total Funding Completed</Typography>
        <BorderLinearProgress variant="determinate" value={risedFundPer} />
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            display: 'flex',
            position: 'absolute',
            marginTop: '-20px',
            marginLeft: '50px',
            fontWeight: 'bold',
            color: 'white'
          }}
        >{`${Math.round(risedFundPer)}%`}</Typography>
      </Box>
    </>
  );
};

export default Details;

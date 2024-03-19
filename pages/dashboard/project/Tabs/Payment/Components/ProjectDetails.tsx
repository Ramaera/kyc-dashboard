import React from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import Image from 'next/image';
import { AllProjectDetails } from '../AllProjectData';

const ProjectDetails = ({
  title,
  phaseData,
  projectAmount,
  projectTitle,
  isHidden,
  setHidden,
  isEnrolled
}) => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          onClick={() => setHidden({ ...isHidden, project: !isHidden.project })}
        >
          <Typography
            variant="h4"
            sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: 12
              }
            }}
          >
            Project Details
          </Typography>
        </Button>

        <Typography
          variant="h4"
          sx={{
            [theme.breakpoints.down('sm')]: {
              fontSize: 12,
              textAlign: 'right'
            }
          }}
        >
          Enrollment Status :{' '}
          <span style={{ color: isEnrolled ? 'green' : 'red' }}>
            {isEnrolled ? 'Enrolled' : 'Not Enrolled'}
          </span>{' '}
        </Typography>
      </Box>
      {isHidden.project && (
        <>
          {title === 'Hajipur' && (
            <a
              href="https://kyc.ramaera.com/Docs/Spice_Project.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                style={{ transform: 'scale(0.75)' }}
                src="/images/pdf.png"
                alt="pdf"
                height={60}
                width={60}
              />
            </a>
          )}
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableBody>
                {AllProjectDetails[projectTitle].map((row) => {
                  if (!row.key) {
                    return;
                  }
                  return (
                    <TableRow
                      key={row.key}
                      sx={{
                        '&:last-child td, &:last-child th': {
                          border: 0
                        }
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.key}
                      </TableCell>
                      <TableCell align="right">
                        {row.key === 'Till Raised Fund'
                          ? projectAmount
                          : row.key === 'Remain Funding'
                          ? AllProjectDetails[projectTitle][0] - projectAmount
                          : row.key === 'Total Enrolled'
                          ? title.toLowerCase() === 'hyderabad'
                            ? projectAmount / 5000
                            : row.info
                          : row.key === 'Upcoming Enroll'
                          ? title.toLowerCase() === 'hyderabad'
                            ? (AllProjectDetails[projectTitle][0] -
                                projectAmount) /
                              5000
                            : row.info
                          : row.info}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {title.toLowerCase() === 'hyderabad' && (
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableBody>
                  {phaseData['Phase1'].map((row) => (
                    <TableRow>
                      <TableCell>{row.key}</TableCell>
                      <TableCell>{row.info}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
    </>
  );
};

export default ProjectDetails;

import {
  Box,
  LinearProgress,
  Typography,
  linearProgressClasses,
  styled
} from '@mui/material';
import React from 'react';
import { AllProjectDetails } from '../AllProjectData';

const FundingBar = ({ risedFundPer, projectAmount, projectTitle, title }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    }
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1, my: 2 }}>
        <Typography variant="h6" mb={2} textTransform={'uppercase'}>
          Total Funding Completed :{' '}
          {`₹ ${
            title.toLowerCase() === 'hajipur'
              ? '20000000 / ₹20000000'
              : `${projectAmount} / ${AllProjectDetails[projectTitle][0]}`
          } `}
        </Typography>
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

export default FundingBar;

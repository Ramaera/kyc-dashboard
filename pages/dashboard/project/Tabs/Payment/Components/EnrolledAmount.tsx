import { Box, Button, styled, useTheme } from '@mui/material';
import ProjectList from '../../ProjectList';
import { useState } from 'react';

const EnrolledAmount = ({ projectAmount, title, ramaeraFund, isEnrolled }) => {
  const theme = useTheme();
  const [loadList, startLoadingList] = useState(false);

  return (
    <>
      <Box display={'flex'} flexDirection={'row'}>
        <Box
          my={2}
          mr={2}
          display={'flex'}
          gap={2}
          flexDirection={'column'}
          fontSize={20}
          color={'#8C7CF0'}
          borderRadius={1}
          border={1}
          justifyContent={'center'}
          textAlign={'center'}
          sx={{
            padding: '4%',
            [theme.breakpoints.down('sm')]: {
              padding: '2%'
            }
          }}
        >
          Public Fund
          <br />₹ {projectAmount}
        </Box>
        {title === 'Hajipur' ? (
          <Box
            my={2}
            ml={2}
            display={'flex'}
            gap={2}
            flexDirection={'column'}
            fontSize={20}
            color={'#8C7CF0'}
            borderRadius={1}
            border={1}
            justifyContent={'center'}
            textAlign={'center'}
            sx={{
              padding: '4%',
              [theme.breakpoints.down('sm')]: {
                padding: '2%'
              }
            }}
          >
            Ramaera Legal Infotech Fund
            <br />₹ {ramaeraFund}
          </Box>
        ) : (
          ''
        )}
      </Box>
      <div>
        {isEnrolled && (
          <>
            {!loadList ? (
              <Box my={2} display={'flex'} gap={2} flexDirection={'column'}>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: 'uppercase',
                    width: '490px',
                    [theme.breakpoints.down('sm')]: {
                      width: '100%'
                    }
                  }}
                  onClick={() => {
                    startLoadingList(true);
                  }}
                >
                  Total Enrolled {title}
                </Button>
              </Box>
            ) : (
              <ProjectList title={title} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default EnrolledAmount;

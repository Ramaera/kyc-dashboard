import { Box, Button, Card, Divider, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import DataTable from './DataTable';
import StockTable from './StockTable';

const OperationData = () => {
  const theme = useTheme();
  const [showProjectData, setShowProjectData] = useState('');

  //   const [userData, setUserData] = useState(null);
  const [chartData, setChartData] = useState(null);

  const onButtonClick = (projectTitle) => {
    setShowProjectData(projectTitle);
  };

  return (
    <>
      <Card>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: 28,
            mt: 2,
            color: '#776AD0'
          }}
        >
          Project Operations Report{' '}
        </Box>
        <Box>
          <Button
            variant="outlined"
            onClick={() => {
              onButtonClick('hajipur');
            }}
          >
            Hajipur Spice Factory
          </Button>
        </Box>
        <Box>
          {/* <DataTable /> */}
          <StockTable />
        </Box>
        <Divider />

        {/* <Toaster position="bottom-center" reverseOrder={false} /> */}
      </Card>
    </>
  );
};

export default OperationData;

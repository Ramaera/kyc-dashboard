import { Box, Button, Card, Divider, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

const OperationData = () => {
  const theme = useTheme();

  //   const [userData, setUserData] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://erp.ramaera.com/api/method/frappe.charts.api.get',
          {
            headers: {
              Authorization: 'token 602ac7d2d573f32:6acaed00eb0733d'
            },
            params: {
              chart_name: 'Purchase Order Trends',
              filters: {
                doc_type: 'Purchase Order',
                date_field: 'creation_date',
                group_by: 'supplier',
                aggregation: 'count',
                range: 'Year',
                from_date: '2023-01-01',
                to_date: '2024-01-31'
              }
            }
          }
        );

        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }

        // const data = await response.json();

        console.log('-->>', response);
        // setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
        <Box
          sx={{
            height: '300px',
            fontSize: '40px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          Coming Soon
        </Box>

        <Divider />

        {/* <Toaster position="bottom-center" reverseOrder={false} /> */}
      </Card>
    </>
  );
};

export default OperationData;
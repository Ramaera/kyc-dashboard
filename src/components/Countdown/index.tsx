import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { useReducer } from 'react';

const index = () => {
  const theme = useTheme();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  var countDownDate = new Date('Oct 21, 2023 14:30:00').getTime();
  var myfunc = setInterval(function () {
    forceUpdate();
  }, 1000);
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  return (
    <div>
      <Box
        padding={(0, 2)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box>
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            textAlign={'center'}
            sx={{
              marginBottom: '10px',
              [theme.breakpoints.down('sm')]: {
                fontSize: 16
              }
            }}
          >
            {' '}
            MY Mart My Brand Funding Will closed in
          </Typography>
          {/* <Typography
            variant="h3"
            textAlign={'center'}
            component="h3"
            gutterBottom
            sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: 18
              }
            }}
          >
            {days} Days, {hours} Hours, {minutes},Minutes, {seconds} seconds{' '}
          </Typography> */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px'
            }}
          >
            <Card variant="outlined">
              <CardContent>
                <Typography
                  variant={theme.breakpoints.down('sm') ? 'h3' : 'h5'}
                  textAlign={'center'}
                  component="h3"
                  gutterBottom
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      fontSize: 14
                    }
                  }}
                >
                  {days < 10 ? '0' + days : days}
                </Typography>
                <Typography
                  variant={theme.breakpoints.down('sm') ? 'h4' : 'h6'}
                  textAlign={'center'}
                  component="h3"
                  gutterBottom
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      fontSize: 10
                    }
                  }}
                >
                  Days
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  variant={theme.breakpoints.down('sm') ? 'h3' : 'h5'}
                  textAlign={'center'}
                  component="h3"
                  gutterBottom
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      fontSize: 14
                    }
                  }}
                >
                  {hours < 10 ? '0' + hours : hours}
                </Typography>

                <Typography
                  variant={theme.breakpoints.down('sm') ? 'h4' : 'h6'}
                  textAlign={'center'}
                  component="h3"
                  gutterBottom
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      fontSize: 10
                    }
                  }}
                >
                  Hours
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  variant={theme.breakpoints.down('sm') ? 'h3' : 'h5'}
                  textAlign={'center'}
                  component="h3"
                  gutterBottom
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      fontSize: 14
                    }
                  }}
                >
                  {' '}
                  {minutes < 10 ? '0' + minutes : minutes}
                </Typography>
                <Typography
                  variant={theme.breakpoints.down('sm') ? 'h4' : 'h6'}
                  textAlign={'center'}
                  component="h3"
                  gutterBottom
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      fontSize: 10
                    }
                  }}
                >
                  Minutes
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  variant={theme.breakpoints.down('sm') ? 'h3' : 'h5'}
                  textAlign={'center'}
                  component="h3"
                  gutterBottom
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      fontSize: 14
                    }
                  }}
                >
                  {' '}
                  {seconds < 10 ? '0' + seconds : seconds}
                </Typography>
                <Typography
                  variant={theme.breakpoints.down('sm') ? 'h4' : 'h6'}
                  textAlign={'center'}
                  component="h3"
                  gutterBottom
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      fontSize: 10
                    }
                  }}
                >
                  Seconds
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default index;

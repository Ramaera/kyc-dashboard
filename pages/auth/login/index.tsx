import {
  Box,
  Container,
  Grid,
  Hidden,
  styled,
  Typography,
  useTheme
} from '@mui/material';
import Head from 'next/head';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';
import LoginCard from './components/LoginCard';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

function Login() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Ramaera :: Login </title>
      </Head>
      <MainContent>
        <Grid
          container
          sx={{ height: '100%' }}
          alignItems="stretch"
          spacing={0}
        >
          <Grid
            xs={12}
            md={6}
            alignItems="center"
            display="flex"
            justifyContent="center"
            item
          >
            <Container maxWidth="sm">
              <Box textAlign="center">
                <img
                  alt="500"
                  height={180}
                  style={{ marginTop: 20 }}
                  src="/static/images/logo/logo.png"
                />
                <Typography
                  variant="h1"
                  sx={{
                    my: 2,
                    [theme.breakpoints.down('sm')]: {
                      fontSize: 22
                    }
                  }}
                >
                  Become A Partner
                </Typography>
                <Hidden mdDown>
                  <Typography
                    variant="h4"
                    color="text.secondary"
                    fontWeight="normal"
                    sx={{ mb: 4 }}
                  >
                    RAMAERA is the future of upcoming Industrialisation in
                    India, aiming presence in all kind of manufacturing sector
                  </Typography>
                </Hidden>
                <Hidden mdUp>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ramaerapartnersclient"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      width={'50%'}
                      style={{ marginBottom: -50 }}
                      src="/static/images/logo/playStore.png"
                      alt=""
                    />
                  </a>
                </Hidden>
              </Box>
            </Container>
          </Grid>

          <Grid
            xs={12}
            md={6}
            alignItems="center"
            display="flex"
            justifyContent="center"
            item
          >
            <Container maxWidth="sm">
              <Box textAlign="center">
                <LoginCard />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </MainContent>
    </>
  );
}

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

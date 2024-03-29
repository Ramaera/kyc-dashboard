import {
  Box,
  Container,
  Grid,
  Hidden,
  styled,
  Typography
} from '@mui/material';
import { type ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Head from 'next/head';
import SignupCard from './components/SignupCard';

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

function Signup() {
  return (
    <>
      <Head>
        <title>Ramaera :: Create Account</title>
      </Head>
      <MainContent>
        <Grid
          container
          sx={{ height: '100%' }}
          alignItems="stretch"
          spacing={0}
        >
          <Hidden mdDown>
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
                    height={260}
                    src="/static/images/logo/logo.png"
                  />
                  <Typography variant="h1" sx={{ my: 2 }}>
                    Become A Partner
                  </Typography>
                  <Typography
                    variant="h4"
                    color="text.secondary"
                    fontWeight="normal"
                    sx={{ mb: 4 }}
                  >
                    RAMAERA is the future of upcoming Industrialisation in
                    India, aiming presence in all kind of manufacturing sector
                  </Typography>
                </Box>
              </Container>
            </Grid>
          </Hidden>
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
                <SignupCard />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </MainContent>
    </>
  );
}
export default Signup;

Signup.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

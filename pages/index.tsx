import {
  Box,
  Button,
  Card,
  Container,
  styled,
  Typography
} from '@mui/material';
import { useEffect, type ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Head from 'next/head';
import Link from 'src/components/Link';

import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';
import { useRouter } from 'next/router';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  let router = useRouter();
  // condition base redirecting
  function redirect() {
    router.push('/dashboard');
  }
  useEffect(() => {
    redirect();
  }, []);
  redirect();
  return (
    <OverviewWrapper>
      <Head>
        <title>Re-Routing</title>
      </Head>
      {/* <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <Button
                  component={Link}
                  href="/dashboard"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  KYC Dashboard
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Hero /> */}

      <Container maxWidth="lg" sx={{ mt: 8 }}></Container>
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

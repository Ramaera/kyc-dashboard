import { Box, Container, styled } from '@mui/material';
import { useEffect, type ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Head from 'next/head';

import { useRouter } from 'next/router';

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

      <Container maxWidth={false} sx={{ mt: 8 }}></Container>
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

import { ReactElement, ReactNode } from 'react';
import { getApolloClient } from '@/apollo';
import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CssBaseline from '@mui/material/CssBaseline';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import createEmotionCache from 'src/createEmotionCache';
import ThemeProvider from 'src/theme/ThemeProvider';
import { persistor, store } from '../src/state/store';
import RamaeraRouter from './RamaeraRouter';

import './style.css';
library.add(faEye, faEyeSlash);
// import type { AppProps } from 'next/app'

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface TokyoAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

const client = getApolloClient();

function TokyoApp(props: TokyoAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>Ramaera Dashboard</title>
            <link rel="shortcut icon" href="/images/logo.png" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/images/logo.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/images/logo.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/images/logo.png"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <SidebarProvider>
            <ThemeProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CssBaseline />
                <RamaeraRouter>
                  {getLayout(<Component {...pageProps} />)}
                </RamaeraRouter>
              </LocalizationProvider>
            </ThemeProvider>
          </SidebarProvider>
        </CacheProvider>
      </ApolloProvider>
      <ApolloProvider client={client}></ApolloProvider>
    </Provider>
  );
}

export default TokyoApp;

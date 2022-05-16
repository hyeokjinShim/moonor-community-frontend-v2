import '../styles/globals.css';
import {AppProps} from 'next/app';
import React from 'react';
import {RecoilRoot} from 'recoil';
import {ThemeProvider, StyledEngineProvider} from '@mui/material';
import {muiTheme} from '@/lib/theme/mui-theme';
import {CacheProvider, EmotionCache} from '@emotion/react';
import createEmotionCache from '@/lib/theme/createEmotionCache';
import CssBaseline from '@mui/material/CssBaseline';
import {QueryClient, QueryClientProvider} from 'react-query';
import Head from 'next/head';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const reactQueryClient = new QueryClient();

function MyApp(props: MyAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  return (
    <CacheProvider value={emotionCache}>
      <StyledEngineProvider>
        <Head>
          <title>Custom</title>
        </Head>

        <RecoilRoot>
          <QueryClientProvider client={reactQueryClient}>
            <ThemeProvider theme={muiTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </QueryClientProvider>
        </RecoilRoot>
      </StyledEngineProvider>
    </CacheProvider>
  );
}

export default MyApp;

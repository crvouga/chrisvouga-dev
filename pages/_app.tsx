import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import { data } from "../data";
import createEmotionCache from "../src/create-emotion-Cache";
import theme from "../src/theme";

const clientSideEmotionCache = createEmotionCache();

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function CustomApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: CustomAppProps) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>{data.metaTitle}</title>

          <meta name="description" content={data.metaDescription} />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default CustomApp;

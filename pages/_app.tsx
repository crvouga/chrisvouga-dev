import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import React from "react";
import { ReCaptchaProvider } from "../src/components/recaptcha";
import ThemeProvider from "../src/theme/theme-provider";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    //why?: https://itnext.io/next-js-with-material-ui-7a7f6485f671
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link rel="icon" type="image/png" href="/personal-logo.png" />
        <title>Chris Vouga</title>
      </Head>
      <ReCaptchaProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReCaptchaProvider>
    </React.Fragment>
  );
};

export default App;

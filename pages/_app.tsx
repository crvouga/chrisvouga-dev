import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { SEO } from "../src/components/seo";
import ThemeProvider from "../src/components/theme/theme-provider";
import { getReCaptchKey } from "../src/config";

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
      <SEO />
      <GoogleReCaptchaProvider reCaptchaKey={getReCaptchKey()}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </React.Fragment>
  );
};

export default App;

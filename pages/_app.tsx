import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import ThemeProvider from "../src/components/ThemeProvider";

export default function App(props: AppProps) {
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
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

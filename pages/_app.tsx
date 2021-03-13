import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import ThemeProvider from "../src/theme/theme-provider";
import { useServerSideStyles } from "../src/theme/use-server-side-styles";
import "../src/fonts/fonts.css";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  useServerSideStyles();

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

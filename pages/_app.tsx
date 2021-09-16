import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { ThemeProvider } from "../src/theme/theme-provider";
import { ThemeStateContextProvider } from "../src/theme/theme-state";
import { useServerSideStyles } from "../src/theme/use-server-side-styles";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  useServerSideStyles();

  return (
    <ThemeStateContextProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeStateContextProvider>
  );
};

export default App;

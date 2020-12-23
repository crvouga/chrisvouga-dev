import { AppProps } from "next/dist/next-server/lib/router/router";
import ThemeProvider from "../components/ThemeProvider";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

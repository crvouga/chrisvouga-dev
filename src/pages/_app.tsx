import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";
import data from "../../data.json";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{data.metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={data.metaDescription} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;

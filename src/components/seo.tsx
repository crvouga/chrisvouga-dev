import Head from "next/head";
import React from "react";

const TITLE = "Chris Vouga | Software Developer";

const DESCRIPTION = `
  Hello, my name is Chris Vouga. I'm a software developer based 
  in the Phoenix Valley, Arizona.
`;

const DOMAIN = `https://chrisvouga.dev`;

const LOGO = `${DOMAIN}/personal-logo.png`;

const KEYWORDS = [
  "chris",
  "christopher",
  "vouga",
  "chrisvouga",
  "christophervouga",
];

const AUTHOR = "Chris Vouga";

export const SEO = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" type="image/png" href="/personal-logo.png" />

      <title>{TITLE}</title>

      <meta name="description" content={DESCRIPTION} />

      <meta name="keywords" content={KEYWORDS.join(", ")} />

      <meta name="author" content={AUTHOR} />

      <meta name="og:title" property="og:title" content={TITLE} />

      <meta
        name="og:description"
        property="og:description"
        content={DESCRIPTION}
      />

      <meta property="og:url" content={DOMAIN} />

      <meta property="og:type" content="website" />

      <meta property="og:image" content={LOGO} />
    </Head>
  );
};

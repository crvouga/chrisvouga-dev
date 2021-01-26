import React from "react";
import { encodeUrl } from "../utility";
import { DOMAIN } from "../personal-information";

const seo = {
  title: "Chris Vouga | Software Developer",
  description:
    "Personal website for Chris Vouga. Chris Vouga is a software developer.",
  image: `${DOMAIN}${encodeUrl(DOMAIN)}.png`,
  keywords: ["chris", "christopher", "vouga", "chrisvouga", "christophervouga"],
  author: "Chris Vouga",
};

export const SEO = () => {
  return (
    <React.Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" type="image/png" href="/personal-logo.png" />

      <title>{seo.title}</title>

      <meta name="image" content={seo.image} />

      <meta name="description" content={seo.description} />

      <meta name="keywords" content={seo.keywords.join(", ")} />

      <meta name="author" content={seo.author} />

      <meta name="og:title" property="og:title" content={seo.title} />

      <meta
        name="og:description"
        property="og:description"
        content={seo.description}
      />

      <meta property="og:url" content={DOMAIN} />

      <meta property="og:type" content="website" />

      <meta property="og:image" content={seo.image} />
    </React.Fragment>
  );
};

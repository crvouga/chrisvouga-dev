import React from "react";
import { IMeta } from "../data/meta";

export const Meta = ({ meta }: { meta: IMeta }) => {
  return (
    <React.Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" type="image/png" href="/personal-logo.png" />

      <title>{meta.title}</title>

      <meta name="image" content={meta.imageUrl} />

      <meta name="description" content={meta.description} />

      <meta name="keywords" content={meta.keywords.join(", ")} />

      <meta name="author" content={meta.author} />

      <meta name="og:title" property="og:title" content={meta.title} />

      <meta
        name="og:description"
        property="og:description"
        content={meta.description}
      />

      <meta property="og:url" content={meta.siteUrl} />

      <meta property="og:type" content="website" />

      <meta property="og:image" content={meta.imageUrl} />
    </React.Fragment>
  );
};

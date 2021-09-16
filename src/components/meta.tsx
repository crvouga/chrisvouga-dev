import Head from "next/head";
import React from "react";

export type IMetaProps = {
  iconUrl: string;
  title: string;
  imageUrl: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
};

export const Meta = (props: IMetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" type="image/png" href={props.iconUrl} />

      <title>{props.title}</title>

      <meta name="image" content={props.imageUrl} />

      <meta name="description" content={props.description} />

      <meta name="keywords" content={props.keywords.join(", ")} />

      <meta name="author" content={props.author} />

      <meta name="og:title" property="og:title" content={props.title} />

      <meta
        name="og:description"
        property="og:description"
        content={props.description}
      />

      <meta property="og:url" content={props.siteUrl} />

      <meta property="og:type" content="website" />

      <meta property="og:image" content={props.imageUrl} />
    </Head>
  );
};

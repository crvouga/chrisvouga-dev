import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Chip, { ChipProps } from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { capitalize } from "@material-ui/core/utils";
import Image from "next/image";
import React from "react";
import { useBoolean } from "./boolean";

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: "transparent",
  },
}));

//source: https://svgporn.com/
const topicToImageSrc: { [key: string]: string } = {
  typescript: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  heroku: "https://cdn.svgporn.com/logos/heroku-icon.svg",
  jest: "https://cdn.svgporn.com/logos/jest.svg",
  "redux-saga": "https://cdn.svgporn.com/logos/redux-saga.svg",
  ramda: "https://cdn.svgporn.com/logos/ramda.svg",
  redis: "https://cdn.svgporn.com/logos/redis.svg",
  react: "https://cdn.svgporn.com/logos/react.svg",
  firebase: "https://cdn.svgporn.com/logos/firebase.svg",
  postgres: "https://cdn.svgporn.com/logos/postgresql.svg",
  "material-ui": "https://cdn.svgporn.com/logos/material-ui.svg",
  nextjs: "https://cdn.svgporn.com/logos/nextjs.svg",
  "socket-io": "https://cdn.svgporn.com/logos/socket.io.svg",
  express: "https://cdn.svgporn.com/logos/express.svg",
  nodejs: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
  puppeteer: "https://cdn.svgporn.com/logos/puppeteer.svg",
  formspree: "https://cdn.svgporn.com/logos/formspree-logo.png",
  sanity: "https://cdn.svgporn.com/logos/sanity.svg",
};

const topicToLabel = (topic: string) =>
  topic.split("-").map(capitalize).join(" ");

const topicToUrl = (topic: string) => `https://github.com/topics/${topic}`;

export const GithubTopicChip = ({
  topic,
  ...props
}: { topic: string } & ChipProps) => {
  const classes = useStyles();

  const isError = useBoolean(false);

  const avatar =
    topic in topicToImageSrc && !isError.value ? (
      <Avatar className={classes.avatar} variant="square">
        <Image
          alt={topic}
          layout="fill"
          src={topicToImageSrc[topic]}
          onError={isError.setTrue}
        />
      </Avatar>
    ) : undefined;

  return (
    <Link href={topicToUrl(topic)}>
      <Chip clickable avatar={avatar} label={topicToLabel(topic)} {...props} />
    </Link>
  );
};

export const GithubTopicChipGroup = ({
  topics,
  ChipProps,
}: {
  topics: string[];
  ChipProps?: ChipProps;
}) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignContent="center"
      flexWrap="wrap"
    >
      {topics.map((topic) => (
        <Box key={topic} paddingRight={1 / 2} paddingBottom={1 / 2}>
          <GithubTopicChip topic={topic} {...ChipProps} />
        </Box>
      ))}
    </Box>
  );
};

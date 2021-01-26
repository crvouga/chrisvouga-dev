import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Chip, { ChipProps } from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { capitalize } from "@material-ui/core/utils";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: "transparent",
  },
}));

//source: https://svgporn.com/
const topicToImageSrc: { [key: string]: string } = {
  typescript: "/typescript-icon.svg",
  heroku: "/heroku-icon.svg",
  jest: "/jest.svg",
  "redux-saga": "/redux-saga.svg",
  ramda: "/ramda.svg",
  redis: "/redis.svg",
  react: "/react.svg",
  firebase: "/firebase.svg",
  postgres: "/postgresql.svg",
  "material-ui": "/material-ui.svg",
  nextjs: "/nextjs.svg",
  "socket-io": "/socket.io.svg",
  express: "/express.svg",
  nodejs: "/nodejs-icon.svg",
  puppeteer: "/puppeteer.svg",
  formspree: "/formspree-logo.png",
};

const topicToLabel = (topic: string) =>
  topic.split("-").map(capitalize).join(" ");

const topicToUrl = (topic: string) => `https://github.com/topics/${topic}`;

export const GithubTopicChip = ({
  topic,
  ...props
}: { topic: string } & ChipProps) => {
  const classes = useStyles();

  const avatar =
    topic in topicToImageSrc ? (
      <Avatar className={classes.avatar} variant="square">
        <Image alt={topic} layout="fill" src={topicToImageSrc[topic]} />
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

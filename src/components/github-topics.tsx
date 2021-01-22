import {
  Avatar,
  Box,
  capitalize,
  Chip,
  ChipProps,
  makeStyles,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";
import Image from "next/image";

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

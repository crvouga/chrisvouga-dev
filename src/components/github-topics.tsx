import {
  Avatar,
  Box,
  capitalize,
  Chip,
  ChipProps,
  Link,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStylesChip = makeStyles(() => ({
  label: {
    fontWeight: "bold",
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
};

const topicToLabel = (topic: string) =>
  topic.split("-").map(capitalize).join(" ");

const topicToUrl = (topic: string) => `https://github.com/topics/${topic}`;

export const GithubTopicChip = ({
  topic,
  ...props
}: { topic: string } & ChipProps) => {
  const classesChip = useStylesChip();

  const avatar =
    topic in topicToImageSrc ? (
      <Avatar src={topicToImageSrc[topic]} variant="square" />
    ) : undefined;

  return (
    <Link href={topicToUrl(topic)}>
      <Chip
        classes={classesChip}
        clickable
        avatar={avatar}
        label={topicToLabel(topic)}
        {...props}
      />
    </Link>
  );
};

export const GithubTopicChipGroup = ({ topics }: { topics: string[] }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignContent="center"
      flexWrap="wrap"
    >
      {topics.sort().map((topic) => (
        <Box key={topic} paddingRight={1 / 2} paddingBottom={1 / 2}>
          <GithubTopicChip topic={topic} />
        </Box>
      ))}
    </Box>
  );
};

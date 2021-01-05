import {
  Avatar,
  capitalize,
  Chip,
  ChipProps,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { goTo } from "../../utility";

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

export const ChipTopic = ({
  topic,
  ...props
}: { topic: string } & ChipProps) => {
  const classesChip = useStylesChip();

  const avatar =
    topic in topicToImageSrc ? (
      <Avatar src={topicToImageSrc[topic]} variant="square" />
    ) : undefined;

  return (
    <Chip
      classes={classesChip}
      clickable
      avatar={avatar}
      label={topicToLabel(topic)}
      onClick={() => goTo(topicToUrl(topic))}
      {...props}
    />
  );
};

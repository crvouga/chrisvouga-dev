import { Box, Chip, withStyles, Avatar, capitalize } from "@material-ui/core";
import React from "react";
import { goTo } from "../../utility";

const ProjectCardTopicChip = withStyles(() => ({
  label: {
    fontWeight: "bold",
  },
}))(Chip);

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
};

const topicToLabel = (topic: string) =>
  topic.split("-").map(capitalize).join(" ");

const topicToUrl = (topic: string) => `https://github.com/topics/${topic}`;

export const ProjectCardTopics = ({ topics }: { topics: string[] }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignContent="center"
      flexWrap="wrap"
    >
      {topics.sort().map((topic) => (
        <Box key={topic} paddingRight={1 / 2} paddingBottom={1 / 2}>
          <ProjectCardTopicChip
            clickable
            avatar={
              topic in topicToImageSrc ? (
                <Avatar src={topicToImageSrc[topic]} variant="square" />
              ) : undefined
            }
            label={topicToLabel(topic)}
            onClick={() => goTo(topicToUrl(topic))}
          />
        </Box>
      ))}
    </Box>
  );
};

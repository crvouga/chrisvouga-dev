import { Box } from "@material-ui/core";
import React from "react";
import { ChipTopic } from "./ChipTopic";

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
          <ChipTopic topic={topic} />
        </Box>
      ))}
    </Box>
  );
};

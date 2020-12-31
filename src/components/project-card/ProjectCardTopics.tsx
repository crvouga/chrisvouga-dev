import { Box, Chip, withStyles } from "@material-ui/core";
import React from "react";

const ProjectCardTopicChip = withStyles(() => ({
  label: {
    fontWeight: "bold",
  },
}))(Chip);

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
          <ProjectCardTopicChip label={topic} />
        </Box>
      ))}
    </Box>
  );
};

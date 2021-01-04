import { Typography, Box } from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";
import { EducationCard } from "../EducationCard";

export const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>

      <Box maxWidth={360}>
        <EducationCard {...content.education} />
      </Box>
    </React.Fragment>
  );
};

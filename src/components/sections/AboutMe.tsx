import { Typography } from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";
import { EducationCard } from "../EducationCard";

export const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography variant="h4">About Me</Typography>
      <EducationCard {...content.education} />
    </React.Fragment>
  );
};

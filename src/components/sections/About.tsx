import { Grid, Typography } from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";
import { EducationCard } from "../EducationCard";
import { SkillsCard } from "../SkillsCard";

export const About = () => {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>

      <Grid container spacing={2}>
        <Grid item md={4}>
          <SkillsCard />
        </Grid>
        <Grid item md={4}>
          <SkillsCard />
        </Grid>
        <Grid item md={4}>
          <EducationCard {...content.education} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

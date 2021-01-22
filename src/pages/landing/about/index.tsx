import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { SectionContainer } from "../section";
import { EducationCard } from "./education";
import { SkillsCard } from "./skills";
import { SummaryCard } from "./summary";

export const About = () => {
  return (
    <SectionContainer id="about">
      <Typography variant="h4" gutterBottom>
        <Box fontWeight="bold">A Little Bit About Me</Box>
      </Typography>

      <Grid container spacing={2}>
        <Grid item sm={4}>
          <SummaryCard />
        </Grid>
        <Grid item sm={4}>
          <SkillsCard />
        </Grid>
        <Grid item sm={4}>
          <EducationCard />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

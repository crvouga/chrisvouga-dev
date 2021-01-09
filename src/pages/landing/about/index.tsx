import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Section } from "../../../components/section";
import { EducationCard } from "./education";
import { SkillsCard } from "./skills";
import { SummaryCard } from "./summary";

export const About = () => {
  return (
    <Section id="about">
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
    </Section>
  );
};

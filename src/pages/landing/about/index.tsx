import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IAboutMe } from "../../../data-access/about-me";
import { SectionContainer } from "../section";
import { EducationCard } from "./education";
import { SkillsCard } from "./skills";
import { SummaryCard } from "./summary";

export const About = ({
  topTopics,
  aboutMe,
}: {
  topTopics: string[];
  aboutMe: IAboutMe;
}) => {
  return (
    <SectionContainer id="about">
      <Typography variant="h3" gutterBottom>
        <Box fontWeight="bold">A Little Bit About Me</Box>
      </Typography>

      <Grid container spacing={2}>
        <Grid item sm={4}>
          <SummaryCard aboutMe={aboutMe} />
        </Grid>
        <Grid item sm={4}>
          <SkillsCard aboutMe={aboutMe} topTopics={topTopics} />
        </Grid>
        <Grid item sm={4}>
          <EducationCard aboutMe={aboutMe} />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

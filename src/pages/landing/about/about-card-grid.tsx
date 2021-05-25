import Grid from "@material-ui/core/Grid";
import React from "react";
import { IAboutMe } from "../../../data-access/about-me";
import { EducationCard } from "./education";
import { SkillsCard } from "./skills";
import { SummaryCard } from "./summary";

export const AboutCardGrid = ({
  topTopics,
  aboutMe,
}: {
  topTopics: string[];
  aboutMe: IAboutMe;
}) => {
  return (
    <Grid container>
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
  );
};

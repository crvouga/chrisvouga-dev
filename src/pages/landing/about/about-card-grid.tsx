import Grid from "@material-ui/core/Grid";
import React from "react";
import { IAboutMe } from "../../../data-access/about-me";
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
      <Grid item sm={6}>
        <SummaryCard aboutMe={aboutMe} />
      </Grid>
      <Grid item sm={6}>
        <SkillsCard aboutMe={aboutMe} topTopics={topTopics} />
      </Grid>
    </Grid>
  );
};

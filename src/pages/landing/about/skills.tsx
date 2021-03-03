import { Box } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { GithubTopicChipGroup } from "../../../components/github-topics";
import { IAboutMe } from "../../../data/about-me";
import { AboutCard, AboutCardImage } from "./card";

export const SkillsCard = ({
  topTopics,
  aboutMe,
}: {
  topTopics: string[];
  aboutMe: IAboutMe;
}) => {
  const chips = (
    <GithubTopicChipGroup topics={topTopics} ChipProps={{ size: "small" }} />
  );

  return (
    <AboutCard>
      <CardHeader title="Technology" />

      <AboutCardImage src="/code.svg" alt="code" />

      <CardContent>
        <Typography component="div" variant="body1" color="textSecondary">
          Some of the things I've been using in my projects: {chips}
          <Box dangerouslySetInnerHTML={{ __html: aboutMe.skills }} />
        </Typography>
      </CardContent>
    </AboutCard>
  );
};

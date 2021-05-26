import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { GithubTopicChipGroup } from "../../../components/github-topics";
import { IAboutMe } from "../../../data-access/about-me";
import { IMAGE_ASSETS_SRC } from "../../../data-access/assets";
import { AboutCard, AboutCardImage } from "./card";

export const SkillsCard = ({
  topTopics,
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

      <AboutCardImage {...IMAGE_ASSETS_SRC.artwork.code} />

      <CardContent>
        <Typography component="div" variant="body1" color="textSecondary">
          Some of the things I've been using in my projects: {chips}
        </Typography>
      </CardContent>
    </AboutCard>
  );
};

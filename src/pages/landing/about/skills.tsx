import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import { GithubTopicChipGroup } from "../../../components/github-topics";
import { IAboutMe } from "../../../data-access/about-me";
import { AboutCard } from "./card";

export const SkillsCard = ({
  topTopics,
}: {
  topTopics: string[];
  aboutMe: IAboutMe;
}) => {
  return (
    <AboutCard>
      <CardHeader title="Technology" />
      <CardContent>
        <GithubTopicChipGroup
          topics={topTopics}
          ChipProps={{ size: "small" }}
        />
      </CardContent>
    </AboutCard>
  );
};

import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import { GithubTopicChipGroup } from "../../../components/github-topics";
import { AboutCard } from "./card";

export const SkillsCard = ({ topTopics }: { topTopics: string[] }) => {
  return (
    <AboutCard>
      <CardHeader title="Most Frequent Github Topics" />
      <CardContent>
        <GithubTopicChipGroup
          topics={topTopics}
          ChipProps={{ size: "small" }}
        />
      </CardContent>
    </AboutCard>
  );
};

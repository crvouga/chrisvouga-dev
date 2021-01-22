import { CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import * as R from "remeda";
import { GithubTopicChipGroup } from "../../../components/github-topics";
import { useLandingPageStaticProps } from "../static-props";
import { AboutCard, AboutCardImage } from "./card";

export const SkillsCard = () => {
  const { projectCardsProps } = useLandingPageStaticProps();

  const topicFrequencies = R.pipe(
    projectCardsProps,
    R.flatMap(R.prop("topics")),
    R.groupBy(R.identity),
    R.mapValues((topics) => topics.length)
  );

  const topTopics = R.pipe(
    topicFrequencies,
    Object.keys,
    R.sortBy((topic) => -topicFrequencies[topic]),
    R.take(5)
  );

  const chips = (
    <GithubTopicChipGroup topics={topTopics} ChipProps={{ size: "small" }} />
  );

  return (
    <AboutCard>
      <CardHeader title="Technology" />

      <AboutCardImage src="/code.svg" alt="code" />

      <CardContent>
        <Typography component="div" variant="body1" color="textSecondary">
          Some things I've been using in my projects: {chips}
          The philosophy I live by is to learn and adopt technology on a
          need-to-nerd basis. In other words, focus on tech that gets the job
          done right rather than fashionability.
        </Typography>
      </CardContent>
    </AboutCard>
  );
};

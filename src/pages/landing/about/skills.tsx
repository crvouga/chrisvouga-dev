import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { GithubTopicChipGroup } from "../../../components/github-topics";
import { useLandingPageStaticProps } from "../static-props";
import { AboutCard, AboutCardImage } from "./card";

const descend = <T,>(keyfn: (x: T) => number) => (a: T, b: T) =>
  keyfn(b) - keyfn(a);

export const SkillsCard = () => {
  const { projectCardsProps } = useLandingPageStaticProps();

  const topicFrequencies = projectCardsProps
    .flatMap((props) => props.topics)
    .reduce(
      (topicFrequencies: { [topic: string]: number }, topic) => ({
        ...topicFrequencies,
        [topic]: topic in topicFrequencies ? topicFrequencies[topic] + 1 : 1,
      }),
      {}
    );

  const topTopics = Object.keys(topicFrequencies)
    .sort(descend((topic) => topicFrequencies[topic]))
    .slice(0, 5);

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
          The philosophy I live by is to learn and adopt technology on a
          need-to-nerd basis. In other words, focus on tech that gets the job
          done rather than what is currently fashionable.
        </Typography>
      </CardContent>
    </AboutCard>
  );
};

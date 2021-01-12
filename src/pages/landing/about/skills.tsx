import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import React from "react";
import { GithubTopicChip } from "../../../components/github-topics";
import { CardImage } from "./card-image";

export const SkillsCard = () => {
  const techStack = ["typescript", "react", "postgres", "nodejs"].map(
    (topic) => (
      <Box display="inline" key={topic} p={1 / 2}>
        <GithubTopicChip topic={topic} variant="outlined" size="small" />
      </Box>
    )
  );

  return (
    <Card>
      <CardHeader title="Technology" />

      <CardImage src="/code.svg" />

      <CardContent>
        <Typography component="div" variant="body1" color="textSecondary">
          Currently, the tech stack I enjoy most using and have the most
          experience with is: {techStack}. The philsophy I live by is to learn
          and adopt technology on a need-to-nerd basis. So focus on tech that
          gets the job done right rather than tech thats gets the job done
          fashionability.
        </Typography>
      </CardContent>
    </Card>
  );
};

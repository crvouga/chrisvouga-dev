import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";
import { AboutCard, AboutCardImage } from "./card";

export const EducationCard = () => {
  const asuChip = (
    <Link href={"https://www.asu.edu/"}>
      <Box display="inline" p={1 / 2}>
        <Chip
          avatar={<Avatar src="/asu-logo.png" />}
          clickable
          size="small"
          label="Arizona State Univeristy"
        />
      </Box>
    </Link>
  );

  return (
    <AboutCard>
      <CardHeader title="Education" />

      <AboutCardImage src="/diploma.svg" alt="diploma" />

      <CardContent>
        <Typography component="div" variant="body1" color="textSecondary">
          I have achieved a Bachelor of Science degree in Mathematics and
          Statistics from {asuChip}. Being a math major, I've always enjoyed
          learning the theory behind software development such as type systems,
          architecture, and functional programming (which is origin of my logo).
        </Typography>
      </CardContent>
    </AboutCard>
  );
};

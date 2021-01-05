import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Link,
  makeStyles,
  Typography,
  Box,
  Divider,
} from "@material-ui/core";
import React from "react";
import { ChipTopic } from "../project-card/TopicChip";

const useStylesCardMedia = makeStyles(() => ({
  root: {
    paddingTop: `${(9 / 16) * 100}%`,
  },
  media: {
    objectFit: "contain",
  },
}));

const ASU_URL = "https://www.asu.edu/";

export const EducationCard = () => {
  const classesCardMedia = useStylesCardMedia();

  return (
    <Card>
      <CardMedia classes={classesCardMedia} image="/asu-logo.png" />
      <Divider />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <Typography variant="body1">
          I achieved a Bachelor of Science degree in Mathematics and Statistics
          from <Link href={ASU_URL}>Arizona State Univeristy</Link> in the
          spring of 2020. My education has sharped my problem solving/analytical
          skills, and provided me with the ability and confidence to tackle hard
          problems that deal with abstact concepts and critical thinking.
        </Typography>
      </CardContent>
    </Card>
  );
};

export const SummaryCard = () => {
  // const classesCardMedia = useStylesCardMedia();

  return (
    <Card>
      <Box position="relative" width="100%" paddingTop={`${(9 / 16) * 100}%`}>
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src="/personal-logo-dark.svg"
        />
      </Box>
      <Divider />

      <CardContent>
        <Typography variant="h5" gutterBottom>
          Summary
        </Typography>
        <Typography variant="body1">
          Howdy, my name is Chris Vouga. I'm a software engineer based in the
          Phoenix Valley. My main area of focus is in web development. Being a
          Math major, I've always enjoyed learning about the theory in software
          engineering like functional programming, type systems, and software
          architecture.
        </Typography>
      </CardContent>
    </Card>
  );
};

export const SkillsCard = () => {
  return (
    <Card>
      <Box position="relative" width="100%" paddingTop={`${(9 / 16) * 100}%`}>
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src="/code.png"
        />
      </Box>
      <Divider />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Technology
        </Typography>
        <Typography component="div" variant="body1">
          Currently, the tech stack I enjoy most using and have the most
          experience with is:{" "}
          <ChipTopic variant="outlined" size="small" topic="typescript" />,{" "}
          <ChipTopic variant="outlined" size="small" topic="react" />,{" "}
          <ChipTopic variant="outlined" size="small" topic="postgres" />, and{" "}
          <ChipTopic variant="outlined" size="small" topic="nodejs" />. The
          philsophy I live by is to learn and adopt technology on a need-to-nerd
          basis. So focus on tech that gets the job done right rather than the
          hot new tech.
        </Typography>
      </CardContent>
    </Card>
  );
};

export const About = () => {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        A Little About Me
      </Typography>

      <Grid container spacing={2}>
        <Grid item md={4}>
          <SummaryCard />
        </Grid>
        <Grid item md={4}>
          <SkillsCard />
        </Grid>
        <Grid item md={4}>
          <EducationCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

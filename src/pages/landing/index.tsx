import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Meta } from "../../components/meta";
import { IAboutMe } from "../../data-access/about-me";
import { IMeta } from "../../data-access/meta";
import { IProject } from "../../data-access/projects";
import { ISocialMedia } from "../../data-access/social-media";
import { SocialMediaButtons } from "./social-media";
import { SkillsCard, SummaryCard } from "./about";
import { Logo } from "./logo";
import { ProjectCardGrid } from "./projects";

export type ILandingPageData = {
  projects: IProject[];
  topGithubTopics: string[];
  socialMedia: ISocialMedia[];
  aboutMe: IAboutMe;
  meta: IMeta;
};

export type ILandingPageProps = {
  data: ILandingPageData;
};

const Gutter = () => {
  return <Box width="100%" p={2} />;
};

export const LandingPage = ({ data }: ILandingPageProps) => {
  return (
    <Container maxWidth="lg">
      <Meta meta={data.meta} />

      <Gutter />

      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        paddingBottom={1}
      >
        <Logo />
      </Box>

      <Typography align="center" variant="h1">
        Chris Vouga
      </Typography>

      <Typography align="center" variant="h2" color="primary">
        Software Engineer
      </Typography>

      <Gutter />

      <Container maxWidth="xs" disableGutters>
        <SocialMediaButtons socialMedia={data.socialMedia} />
      </Container>

      <Gutter />

      <Typography variant="h3" align="center" gutterBottom>
        About
      </Typography>

      <Grid container>
        <Grid item sm={6}>
          <SummaryCard summary={data.aboutMe.overview} />
        </Grid>
        <Grid item sm={6}>
          <SkillsCard aboutMe={data.aboutMe} topTopics={data.topGithubTopics} />
        </Grid>
      </Grid>

      <Gutter />

      <Typography variant="h3" align="center" gutterBottom>
        Projects
      </Typography>

      <ProjectCardGrid projects={data.projects} />

      <Gutter />
    </Container>
  );
};

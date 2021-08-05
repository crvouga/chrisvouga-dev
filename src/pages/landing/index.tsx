import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Meta } from "../../components/meta";
import { IAboutMe } from "../../data-access/about-me";
import { IMeta } from "../../data-access/meta";
import { IProject } from "../../data-access/projects";
import { ISocialMedia } from "../../data-access/social-media";
import { SocialMediaButtons } from "../landing/social-media";
import { AboutCardGrid } from "./about/about-card-grid";
import { LogoAvatar } from "./logo-avatar";
import { ProjectCardGrid } from "./projects";

export type ILandingPageData = {
  projects: IProject[];
  topTopics: string[];
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
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Meta meta={data.meta} />
      <Gutter />

      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        paddingBottom={1}
      >
        <LogoAvatar />
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

      <AboutCardGrid aboutMe={data.aboutMe} topTopics={data.topTopics} />

      <Gutter />

      <Typography variant="h3" align="center" gutterBottom>
        Projects
      </Typography>

      <ProjectCardGrid projects={data.projects} />

      <Gutter />
    </Container>
  );
};

import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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

      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            paddingBottom={1}
          >
            <LogoAvatar />
          </Box>

          <Typography align="center" variant="h5">
            Chris Vouga
          </Typography>

          <Typography align="center" variant="h6">
            Software Developer
          </Typography>

          <Gutter />

          <SocialMediaButtons socialMedia={data.socialMedia} />

          <Gutter />
        </Grid>

        <Grid item xs>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>

          <ProjectCardGrid projects={data.projects} />

          <Gutter />

          <Typography variant="h4" gutterBottom>
            About
          </Typography>

          <AboutCardGrid aboutMe={data.aboutMe} topTopics={data.topTopics} />

          <Gutter />
        </Grid>
      </Grid>
    </Container>
  );
};

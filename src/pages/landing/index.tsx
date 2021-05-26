import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import React from "react";
import { Meta } from "../../components/meta";
import { IAboutMe } from "../../data-access/about-me";
import { IMAGE_ASSETS_SRC } from "../../data-access/assets";

import { IMeta } from "../../data-access/meta";
import { IProject } from "../../data-access/projects";
import { ISocialMedia } from "../../data-access/social-media";
import { SocialMediaCardGrid } from "../landing/social-media";
import { AboutCardGrid } from "./about/about-card-grid";
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
  return (
    <Container maxWidth="md">
      <Meta meta={data.meta} />

      <Container maxWidth="xs">
        <Box position="relative" paddingTop="100%" height={0} margin="auto">
          <Image
            priority
            layout="fill"
            src={IMAGE_ASSETS_SRC.logos.personalLight.src}
          />
        </Box>
      </Container>

      <Typography align="center" variant="h1">
        Chris Vouga
      </Typography>

      <Typography variant="h2" gutterBottom align="center">
        Software Developer
      </Typography>

      <Gutter />

      <SocialMediaCardGrid socialMedia={data.socialMedia} />

      <Gutter />

      <Typography variant="h3" gutterBottom>
        Projects
      </Typography>

      <ProjectCardGrid projects={data.projects} />

      <Gutter />

      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>

      <AboutCardGrid aboutMe={data.aboutMe} topTopics={data.topTopics} />

      <Gutter />

      <Typography color="textSecondary" align="center" variant="subtitle2">
        Built by Chris Vouga
      </Typography>

      <Gutter />
    </Container>
  );
};

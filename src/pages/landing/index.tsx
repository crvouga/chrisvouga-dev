import { Theme, useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import React from "react";
import { Avatar } from "../../components/avatar";
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

const AVATAR_SIZE = (theme: Theme) =>
  `calc(4 * ${theme.typography.h1.fontSize})`;

export const LandingPage = ({ data }: ILandingPageProps) => {
  const theme = useTheme();
  return (
    <>
      <Meta meta={data.meta} />

      <Container
        maxWidth="md"
        disableGutters
        style={{ backgroundColor: theme.palette.background.default }}
      >
        <Box position="relative" width="100%" height="240px">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            src={IMAGE_ASSETS_SRC.artwork.desert.src}
            alt="backdrop"
          />
        </Box>
      </Container>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        style={{
          marginTop: `calc(${AVATAR_SIZE(theme)} / 2 * -1)`,
        }}
      >
        <Avatar
          style={{
            borderRadius: "50%",
            background: theme.palette.background.paper,
            width: AVATAR_SIZE(theme),
            height: AVATAR_SIZE(theme),
          }}
          src={IMAGE_ASSETS_SRC.logos.personalLight.src}
          alt="chris vouga logo"
        />
      </Box>

      <Container
        maxWidth="md"
        style={{ backgroundColor: theme.palette.background.default }}
      >
        <Gutter />

        <Typography align="center" variant="h2">
          Chris Vouga
        </Typography>

        <Typography align="center" variant="h5">
          Developer
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
    </>
  );
};

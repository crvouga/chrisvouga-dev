import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import projectIds from "../../../data/project-ids";
import { Meta } from "../../components/meta";
import { dataStore } from "../../data-access";
import { IAboutMe } from "../../data-access/about-me";
import { IMeta } from "../../data-access/meta";
import { IProject } from "../../data-access/projects";
import { ISocialMedia } from "../../data-access/social-media";
import { SkillsCard, SummaryCard } from "./about";
import { Logo } from "./logo";
import { ProjectCardGrid } from "./projects";
import { SocialMediaButtons } from "./social-media";

export type ILandingPageData = {
  projectsResponse: {
    data?: IProject[];
    errors: { message: string }[];
  };
  topGithubTopics: string[];
  socialMedia: ISocialMedia[];
  aboutMe: IAboutMe;
  meta: IMeta;
};

export const getLandingPageData = async (): Promise<ILandingPageData> => {
  return {
    aboutMe: await dataStore.aboutMe.get(),
    projectsResponse: await dataStore.projects.getAll(projectIds),
    topGithubTopics: await dataStore.projects.getTopTopics({
      projectIds,
      topicCount: 20,
    }),
    socialMedia: await dataStore.socialMedia.getAll(),
    meta: await dataStore.meta.get(),
  };
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

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <SummaryCard summary={data.aboutMe.overview} />
        </Grid>
        {data.topGithubTopics.length > 0 && (
          <Grid item xs={12} sm={6}>
            <SkillsCard topTopics={data.topGithubTopics} />
          </Grid>
        )}
      </Grid>

      <Gutter />

      {data.projectsResponse.data && (
        <>
          <Typography variant="h3" align="center" gutterBottom>
            Projects
          </Typography>
          <ProjectCardGrid projects={data.projectsResponse.data} />
        </>
      )}

      <Gutter />
    </Container>
  );
};

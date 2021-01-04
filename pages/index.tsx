import { Box, capitalize, Container } from "@material-ui/core";
import { GetStaticProps } from "next";
import React from "react";
import content from "../content/content.json";
import { NavBar } from "../src/components/NavBar";
import { IProjectCardProps } from "../src/components/project-card";
import { AboutMe } from "../src/components/sections/AboutMe";
import { Hero } from "../src/components/sections/Hero";
import { Projects } from "../src/components/sections/Projects";
import { githubAPI } from "../src/services/github";
import { urlToImageSrc } from "../src/services/screenshot";
import { castUrl } from "../src/utility";

const repositoryNameToTitle = (repositoryName: string) =>
  repositoryName.split("-").map(capitalize).join(" ");

const getProjectCardsProps = async () => {
  const projectCardsProps: IProjectCardProps[] = [];

  for (const project of content.projects) {
    const response = await githubAPI.repos.get({
      owner: project.ownerName,
      repo: project.repositoryName,
    });

    const responseTopics = await githubAPI.repos.getAllTopics({
      owner: project.ownerName,
      repo: project.repositoryName,
    });

    const liveSiteUrl = castUrl(response.data.homepage);

    projectCardsProps.push({
      liveSiteUrl,
      description: response.data.description || "",
      sourceCodeUrl: castUrl(response.data.html_url),
      title: repositoryNameToTitle(project.repositoryName),
      src: urlToImageSrc(liveSiteUrl),
      topics: responseTopics.data.names || [],
    });
  }

  return projectCardsProps;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projectCardsProps: await getProjectCardsProps(),
    },
  };
};
interface IIndexProps {
  projectCardsProps: IProjectCardProps[];
}

export default function Index(props: IIndexProps) {
  const { projectCardsProps } = props;
  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="lg">
        <Box paddingY={6}>
          <Hero />
        </Box>
        <Box paddingY={6}>
          <Projects projectCardsProps={projectCardsProps} />
        </Box>
        <Box paddingY={6}>
          <AboutMe />
        </Box>
      </Container>
    </React.Fragment>
  );
}

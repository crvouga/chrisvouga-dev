import { Box, Container } from "@material-ui/core";
import { GetStaticProps } from "next";
import React from "react";
import content from "../content/content.json";
import { NavBar } from "../src/components/NavBar";
import { IProjectCardProps } from "../src/components/project-card";
import { Hero } from "../src/components/sections/Hero";
import { Projects } from "../src/components/sections/Projects";
import { urlToImageSrc } from "../src/services/screenshot";
import { githubAPI } from "../src/services/github";
import { AboutMe } from "../src/components/sections/AboutMe";

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const repositoryNameToTitle = (repositoryName: string) =>
  repositoryName.split("-").map(capitalizeFirstLetter).join(" ");

const getProjectCardsProps = async () => {
  const projectCardsProps: IProjectCardProps[] = [];

  for (const project of content.projects) {
    const response = await githubAPI.repos.get({
      owner: content.github.username,
      repo: project.repositoryName,
    });

    const responseTopics = await githubAPI.repos.getAllTopics({
      owner: content.github.username,
      repo: project.repositoryName,
    });

    const liveSiteURL = castUrl(response.data.homepage);

    projectCardsProps.push({
      liveSiteURL,
      description: response.data.description || "",
      sourceCodeURL: castUrl(response.data.html_url),
      title: repositoryNameToTitle(project.repositoryName),
      src: urlToImageSrc(liveSiteURL),
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
        <Box paddingY={8}>
          <Hero />
        </Box>
        <Box paddingY={12}>
          <Projects projectCardsProps={projectCardsProps} />
        </Box>
        <Box paddingY={12}>
          <AboutMe />
        </Box>
      </Container>
    </React.Fragment>
  );
}

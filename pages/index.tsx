import { Box, Container } from "@material-ui/core";
import { GetStaticProps } from "next";
import React from "react";
import projects from "../content/projects.json";
import { NavBar } from "../src/components/NavBar";
import { IProjectCardProps } from "../src/components/project-card";
import { Hero } from "../src/components/sections/Hero";
import { Projects } from "../src/components/sections/Projects";
import { urlToImageSrc } from "../src/services/screenshot";
import { githubAPI } from "../src/services/github";

interface IIndexProps {
  projectCardProps: IProjectCardProps[];
}

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const repositoryNameToTitle = (repositoryName: string) =>
  repositoryName.split("-").map(capitalizeFirstLetter).join(" ");

const castURL = (url: any) => {
  new URL(url);
  return url;
};

export const getStaticProps: GetStaticProps = async () => {
  const projectCardProps: IProjectCardProps[] = [];

  for (const project of projects) {
    const response = await githubAPI.repos.get({
      owner: "crvouga",
      repo: project.repositoryName,
    });
    const responseTopics = await githubAPI.repos.getAllTopics({
      owner: "crvouga",
      repo: project.repositoryName,
    });

    const liveSiteURL = castURL(response.data.homepage);

    projectCardProps.push({
      liveSiteURL,
      description: response.data.description || "",
      sourceCodeURL: castURL(response.data.html_url),
      title: repositoryNameToTitle(project.repositoryName),
      src: urlToImageSrc(liveSiteURL),
      topics: (responseTopics.data.names || []).map(repositoryNameToTitle),
    });
  }

  return {
    props: {
      projectCardProps,
    },
  };
};

export default function Index(props: IIndexProps) {
  const { projectCardProps } = props;
  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="lg">
        <Box paddingY={8}>
          <Hero />
        </Box>
        <Box paddingY={12}>
          <Projects projectCardProps={projectCardProps} />
        </Box>
      </Container>
    </React.Fragment>
  );
}

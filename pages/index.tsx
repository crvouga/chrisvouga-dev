import { Box, capitalize, Container, Divider } from "@material-ui/core";
import { GetStaticProps } from "next";
import React from "react";
import content from "../content/content.json";
import { NavBar } from "../src/components/NavBar";
import { IProjectCardProps } from "../src/components/project-card";
import { About } from "../src/components/sections/About";
import { Contact } from "../src/components/sections/Contact";
import { Hero } from "../src/components/sections/Hero";
import { Projects } from "../src/components/sections/Projects";
import { githubAPI } from "../src/services/github";
import { urlToImageSrc } from "../src/services/screenshot";
import { castUrl } from "../src/utility";
import { Footer } from "../src/components/sections/Footer";
import Head from "next/head";

const repositoryNameToTitle = (repositoryName: string) =>
  repositoryName.split("-").map(capitalize).join(" ");

const getProjectCardsProps = async () => {
  const projectCardsProps: IProjectCardProps[] = [];

  for (const project of content.projects) {
    const githubRepositoryParams = {
      owner: project.ownerName,
      repo: project.repositoryName,
    };
    const response = await githubAPI.repos.get(githubRepositoryParams);

    const responseTopics = await githubAPI.repos.getAllTopics(
      githubRepositoryParams
    );

    const liveSiteUrl = castUrl(response.data.homepage);

    const responseLanguages = await githubAPI.repos.listLanguages(
      githubRepositoryParams
    );

    projectCardsProps.push({
      languages: responseLanguages.data,
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
      <Head>
        <title>Chris Vouga</title>
      </Head>
      <NavBar />
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="80vh"
          marginY={6}
        >
          <Hero />
        </Box>

        <Divider />

        <Box marginY={6}>
          <About />
        </Box>

        <Divider />

        <Box marginY={6}>
          <Projects projectCardsProps={projectCardsProps} />
        </Box>

        <Divider />

        <Box marginY={6}>
          <Contact />
        </Box>

        <Divider />

        <Box marginY={6}>
          <Footer />
        </Box>
      </Container>
    </React.Fragment>
  );
}

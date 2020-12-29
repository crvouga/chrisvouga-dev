import { Box, Container } from "@material-ui/core";
import { GetStaticProps } from "next";
import React from "react";
import projects from "../content/projects.json";
import { NavBar } from "../src/components/NavBar";
import { IProjectCardProps } from "../src/components/project-card";
import { Hero } from "../src/components/sections/Hero";
import { Projects } from "../src/components/sections/Projects";
import { urlToImageSrc } from "../src/services/screenshot";

interface IIndexProps {
  projectCardProps: IProjectCardProps[];
}

export const getStaticProps: GetStaticProps = async () => {
  const projectCardProps: IProjectCardProps[] = projects.map((props) => ({
    ...props,
    src: urlToImageSrc(props.liveSiteURL),
  }));

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
        <Box paddingX={6}>
          <Box paddingY={12}>
            <Hero />
          </Box>
          <Box paddingY={12}>
            <Projects projectCardProps={projectCardProps} />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

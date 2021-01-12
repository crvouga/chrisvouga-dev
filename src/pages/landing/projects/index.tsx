import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { SectionContainer } from "../section";
import { useLandingPageStaticProps } from "../static-props";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  const { projectCardsProps } = useLandingPageStaticProps();

  return (
    <SectionContainer id="projects">
      <Typography variant="h4" gutterBottom>
        <Box fontWeight="bold">Some of the Things I've Built</Box>
      </Typography>
      <Grid container spacing={2}>
        {projectCardsProps.map((props) => (
          <Grid key={props.liveSiteUrl} item xs sm={6} md={4}>
            <ProjectCard {...props} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

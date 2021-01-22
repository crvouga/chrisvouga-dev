import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { SectionContainer } from "../section";
import { useLandingPageStaticProps } from "../static-props";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  const { projectCardsProps } = useLandingPageStaticProps();

  return (
    <SectionContainer id="projects">
      <Typography variant="h3" gutterBottom>
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

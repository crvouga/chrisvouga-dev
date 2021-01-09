import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { IProjectCardProps, ProjectCard } from "../project-card";
import { Section } from "../section";

export const Projects = ({
  projectCardsProps,
}: {
  projectCardsProps: IProjectCardProps[];
}) => {
  return (
    <Section id="projects">
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
    </Section>
  );
};

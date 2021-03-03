import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IProject } from "../../../data/projects";
import { SectionContainer } from "../section";
import { ProjectCard } from "./project-card";

export const Projects = ({ projects }: { projects: IProject[] }) => {
  return (
    <SectionContainer id="projects">
      <Typography variant="h3" gutterBottom>
        <Box fontWeight="bold">Some of the Things I've Built</Box>
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid key={project.liveSiteUrl} item xs sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

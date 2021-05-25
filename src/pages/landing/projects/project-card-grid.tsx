import Grid from "@material-ui/core/Grid";
import React from "react";
import { IProject } from "../../../data-access/projects";
import { ProjectCard } from "./project-card";

export const ProjectCardGrid = ({ projects }: { projects: IProject[] }) => {
  return (
    <Grid container>
      {projects.map((project) => (
        <Grid key={project.liveSiteUrl} item xs sm={6} md={4}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { IProjectCardProps, ProjectCard } from "../project-card";

export const Projects = ({
  projectCardsProps,
}: {
  projectCardsProps: IProjectCardProps[];
}) => {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Some of the Things I've Built
      </Typography>
      <Grid container spacing={2}>
        {projectCardsProps.map((props) => (
          <Grid key={props.liveSiteUrl} item xs sm={6} md={4}>
            <ProjectCard {...props} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

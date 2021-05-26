import GridList from "@material-ui/core/GridList";
import React from "react";
import { IProject } from "../../../data-access/projects";
import { ProjectGridListTile } from "./project-grid-list-tile";

export const ProjectGridList = ({ projects }: { projects: IProject[] }) => {
  return (
    <GridList cellHeight={180}>
      {projects.map((project) => (
        <ProjectGridListTile project={project} />
      ))}
    </GridList>
  );
};

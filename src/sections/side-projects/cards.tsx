import { Grid } from "@mui/joy";
import { Project } from "../../../content";
import { ProjectCard } from "../../ui/project-card";

export function SideProjectsSectionCards({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <Grid container spacing={3}>
      {projects.map((project, index) => (
        <Grid key={index} xs={12} sm={6} md={4}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
}

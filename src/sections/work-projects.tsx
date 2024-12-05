import { Box, Grid } from "@mui/joy";
import { data } from "../../content";
import { SectionTitle } from "../ui/section-title";
import { ProjectCard } from "../ui/project-card";

export function WorkProjectsSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Work Projects" />

      <Grid container spacing={3}>
        {data.workProjects.map((project, index) => (
          <Grid key={index} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

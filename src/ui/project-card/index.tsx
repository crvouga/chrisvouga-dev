import { Box, Card } from "@mui/joy";
import { Project, projectToLinkHref } from "../../../content";
import { ProjectCardActions } from "./actions";
import { ProjectCardContent } from "./content";
import { ProjectCardMedia } from "./media";
import { ProjectCardStatus } from "./status";

export function ProjectCard({ project }: { project: Project }) {
  const linkHref = projectToLinkHref(project);
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: 0,
      }}
    >
      <ProjectCardMedia project={project} linkHref={linkHref} />
      <ProjectCardContent project={project} linkHref={linkHref} />
      <Box flex={1} />
      <ProjectCardStatus project={project} />
      <ProjectCardActions project={project} />
    </Card>
  );
}

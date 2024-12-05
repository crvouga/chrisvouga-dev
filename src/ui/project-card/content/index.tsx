import { CardContent, Typography } from "@mui/joy";
import { Project } from "../../../../content";
import { ProjectCardContentChips } from "./chips";
import { ProjectCardContentTitle } from "./title";

export function ProjectCardContent({
  project,
  linkHref,
}: {
  project: Project;
  linkHref?: string | null;
}) {
  return (
    <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <ProjectCardContentTitle project={project} linkHref={linkHref} />

      <Typography level="body-md" sx={{ mb: 2 }}>
        <span
          dangerouslySetInnerHTML={{
            __html: project.description,
          }}
        />
      </Typography>

      <ProjectCardContentChips project={project} />
    </CardContent>
  );
}

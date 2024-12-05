import { CardContent, Typography } from "@mui/joy";
import { Project } from "../../../../content";
import { ProjectCardContentChips } from "./chips";

export function ProjectCardContent({
  project,
  linkHref,
}: {
  project: Project;
  linkHref?: string | null;
}) {
  return (
    <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Typography
        level="h3"
        {...(linkHref
          ? {
              component: "a",
              target: "_blank",
              href: linkHref,
              sx: { mb: 1, textDecoration: "underline" },
            }
          : {
              sx: { mb: 1 },
            })}
      >
        {project.title}
      </Typography>

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

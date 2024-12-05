import { Typography } from "@mui/joy";
import { Project } from "../../../../content";

export function ProjectCardContentTitle({
  project,
  linkHref,
}: {
  project: Project;
  linkHref?: string | null;
}) {
  return (
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
  );
}

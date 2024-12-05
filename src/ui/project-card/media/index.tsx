import { AspectRatio, CardOverflow } from "@mui/joy";

import { Project } from "../../../../content";
import { ProjectCardMediaImage } from "./image";
import { ProjectCardMediaVideo } from "./video";

export function ProjectCardMedia({
  project,
  linkHref,
}: {
  project: Project;
  linkHref?: string | null;
}) {
  return (
    <CardOverflow sx={{ position: "relative", overflow: "hidden" }}>
      <AspectRatio ratio={16 / 9}>
        {project.youTubeVideoId ? (
          <ProjectCardMediaVideo project={project} />
        ) : (
          <ProjectCardMediaImage project={project} linkHref={linkHref} />
        )}
      </AspectRatio>
    </CardOverflow>
  );
}

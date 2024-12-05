import { Box } from "@mui/joy";
import { Project } from "../../../../content";

export function ProjectCardMediaImage({
  project,
  linkHref,
}: {
  project: Project;
  linkHref?: string | null;
}) {
  return (
    <Box
      {...(linkHref
        ? {
            component: "a",
            target: "_blank",
            rel: "noreferrer noopener",
            href: linkHref,
          }
        : {})}
    >
      <Box
        {...(project.imageSrc[0]
          ? {
              component: "img",
              width: "100%",
              height: "100%",
              alt: project.imageAlt,
              src: project.imageSrc[0],
              sx: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              },
            }
          : {
              sx: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(to right bottom, #2196f3, #8e24aa)`,
              },
            })}
      />
    </Box>
  );
}

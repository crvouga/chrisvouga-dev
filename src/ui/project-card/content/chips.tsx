import { Avatar, Box, Chip } from "@mui/joy";
import { Project, topicToImageSrc, topicToName } from "../../../../content";

export function ProjectCardContentChips({ project }: { project: Project }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        paddingY: 1,
      }}
    >
      {project.topics.sort().map((topic) => {
        const src = topicToImageSrc[topic];
        return (
          <Chip
            key={topic}
            size="sm"
            startDecorator={<Avatar src={src} />}
            variant="outlined"
          >
            {topicToName[topic]}
          </Chip>
        );
      })}
    </Box>
  );
}

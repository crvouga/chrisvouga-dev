import { InfoOutlined } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/joy";
import { Project } from "../../../../content";

export function ProjectCardStatus({ project }: { project: Project }) {
  return (
    <Stack direction="column" gap={1}>
      {project.deployment.t === "not-deployed-anymore" && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <InfoOutlined
            color="warning"
            sx={{ width: 18, height: 18, marginRight: 1 }}
          />
          <Typography color="warning" level="body-xs">
            Project is no longer deployed
          </Typography>
        </Box>
      )}

      {project.deployment.t === "private" && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <InfoOutlined
            color="warning"
            sx={{ width: 18, height: 18, marginRight: 1 }}
          />
          <Typography color="warning" level="body-xs">
            Deployment is private
          </Typography>
        </Box>
      )}

      {project.code.t === "private" && (
        <Stack direction="row" gap={1}>
          <InfoOutlined color="warning" sx={{ width: 18, height: 18 }} />
          <Typography color="warning" level="body-xs">
            Source code is private
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}

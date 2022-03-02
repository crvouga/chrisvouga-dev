import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import PreviewIcon from "@mui/icons-material/Preview";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";
import ProjectScreenshot from "./ProjectScreenshot";

export default function ProjectCard({
  url,
  codeUrl,
  title,
  description,
}: {
  url: string;
  codeUrl?: string;
  description: string;
  title: string;
}) {
  return (
    <Card
      variant="outlined"
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <Tooltip title="Open deployment">
        <CardActionArea
          href={url}
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <Box sx={{ paddingTop: `${(9 / 16) * 100}%`, position: "relative" }}>
            <ProjectScreenshot url={url} />
          </Box>
        </CardActionArea>
      </Tooltip>
      <Divider />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight={600} color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Open deployment">
          <Button
            target={"_blank"}
            rel={"noreferrer noopener"}
            href={url}
            size="small"
            startIcon={<WebIcon />}
          >
            Deployment
          </Button>
        </Tooltip>
        <Tooltip
          title={
            Boolean(codeUrl) ? "Open source code" : "Source code not available"
          }
        >
          <Button
            disabled={!Boolean(codeUrl)}
            target={"_blank"}
            rel={"noreferrer noopener"}
            href={codeUrl}
            size="small"
            startIcon={<CodeIcon />}
          >
            Source Code
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

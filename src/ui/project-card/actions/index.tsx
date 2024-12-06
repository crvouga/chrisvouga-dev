import { Code, Web } from "@mui/icons-material";
import { Button, CardActions } from "@mui/joy";
import { Project } from "../../../../content";

export function ProjectCardActions({ project }: { project: Project }) {
  return (
    <CardActions>
      <Button
        component="a"
        target="_blank"
        rel="noreferrer noopener"
        href={
          project.deployment.t === "public" ? project.deployment.url : undefined
        }
        startDecorator={<Web />}
        variant="soft"
        disabled={project.deployment.t !== "public"}
      >
        Deployment
      </Button>

      <Button
        component="a"
        disabled={project.code.t !== "public"}
        variant="plain"
        target="_blank"
        rel="noreferrer noopener"
        href={project.code.t === "public" ? project.code.url : undefined}
        startDecorator={<Code />}
      >
        Source Code
      </Button>
    </CardActions>
  );
}

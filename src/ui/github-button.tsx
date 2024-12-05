import { Button } from "@mui/joy";
import { data } from "../../content";
import { GitHub } from "@mui/icons-material";

export function GitHubButton() {
  return (
    <Button
      target="_blank"
      rel="noreferrer noopener"
      variant="soft"
      size="lg"
      component="a"
      href={data.Github.url}
      startDecorator={<GitHub />}
    >
      GitHub
    </Button>
  );
}

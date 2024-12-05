import { LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/joy";
import { data } from "../../content";

export function LinkedInButton() {
  return (
    <Button
      component="a"
      size="lg"
      target="_blank"
      rel="noreferrer noopener"
      href={data.Linkedin.url}
      variant="soft"
      startDecorator={<LinkedIn />}
    >
      LinkedIn
    </Button>
  );
}

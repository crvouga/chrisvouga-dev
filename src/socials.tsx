import { GitHub, LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/joy";
import { data } from "../data";

export function GitHubButton() {
    return (
        <Button
            size="lg"
            target="_blank"
            rel="noreferrer noopener"
            // variant="contained"
            fullWidth
            href={data.Github.url}
            startDecorator={<GitHub />}>
            GitHub
        </Button>
    );
}

export function LinkedInButton() {
    return (
        <Button
            fullWidth
            size="lg"

            target="_blank"
            rel="noreferrer noopener"
            href={data.Linkedin.url}
            startDecorator={<LinkedIn />}>
            LinkedIn
        </Button>
    );
}
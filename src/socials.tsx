import { GitHub, LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";
import { data } from "../data";

export function GitHubButton() {
    return (
        <Button
            size="large"
            target={"_blank"}
            rel={"noreferrer noopener"}
            variant="contained"
            fullWidth
            href={data.Github.url}
            startIcon={<GitHub />}>
            GitHub
        </Button>
    );
}

export function LinkedInButton() {
    return (
        <Button
            fullWidth
            size="large"
            variant="contained"
            target={"_blank"}
            rel={"noreferrer noopener"}
            href={data.Linkedin.url}
            startIcon={<LinkedIn />}>
            LinkedIn
        </Button>
    );
}
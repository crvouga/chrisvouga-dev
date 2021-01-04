import { Button } from "@material-ui/core";
// import CodeIcon from "@material-ui/icons/Code";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import React from "react";
import { goTo } from "../../utility";

export const SourceCodeButton = ({
  sourceCodeUrl,
}: {
  sourceCodeUrl: string;
}) => {
  return (
    <Button
      variant="text"
      size="large"
      startIcon={<GitHubIcon />}
      onClick={() => goTo(sourceCodeUrl)}
    >
      Source Code
    </Button>
  );
};

export const LiveSiteButton = ({ liveSiteUrl }: { liveSiteUrl: string }) => {
  return (
    <Button
      variant="text"
      size="large"
      startIcon={<WebIcon />}
      onClick={() => goTo(liveSiteUrl)}
    >
      Live Site
    </Button>
  );
};

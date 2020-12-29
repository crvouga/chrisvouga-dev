import { Button, ButtonProps } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import WebIcon from "@material-ui/icons/Web";
import React from "react";

interface ISourceCodeButtonProps extends ButtonProps {
  sourceCodeURL: string;
}

export const SourceCodeButton = ({ sourceCodeURL }: ISourceCodeButtonProps) => {
  const handleClick = () => {
    window.open(sourceCodeURL);
  };

  return (
    <Button
      variant="text"
      size="large"
      startIcon={<CodeIcon />}
      onClick={handleClick}
    >
      Source Code
    </Button>
  );
};

interface ILiveSiteButtonProps extends ButtonProps {
  liveSiteURL: string;
}

export const LiveSiteButton = ({ liveSiteURL }: ILiveSiteButtonProps) => {
  const handleClick = () => {
    window.open(liveSiteURL);
  };

  return (
    <Button
      variant="text"
      size="large"
      startIcon={<WebIcon />}
      onClick={handleClick}
    >
      Live Site
    </Button>
  );
};

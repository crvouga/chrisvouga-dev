import { IconButton, makeStyles, SvgIconProps } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import { goTo } from "../utility";

const useStyles = makeStyles(() => ({
  large: {
    fontSize: "1.5em",
  },
}));

const SocialMediaIcon = ({
  name,
  ...props
}: { name: string } & SvgIconProps) => {
  switch (name.toLowerCase()) {
    case "github":
      return <GitHubIcon {...props} />;

    case "linkedin":
      return <LinkedInIcon {...props} />;

    case "twitter":
      return <TwitterIcon {...props} />;

    default:
      return null;
  }
};

export const SocialMediaIconButton = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => {
  const classes = useStyles();

  return (
    <IconButton onClick={() => goTo(url)}>
      <SocialMediaIcon className={classes.large} name={name} />
    </IconButton>
  );
};

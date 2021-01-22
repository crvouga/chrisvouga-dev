import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";

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

  ...props
}: {
  name: string;
  url: string;
} & IconButtonProps) => {
  const classes = useStyles();

  return (
    <Link href={url}>
      <IconButton aria-label={name} {...props}>
        <SocialMediaIcon className={classes.large} name={name} />
      </IconButton>
    </Link>
  );
};

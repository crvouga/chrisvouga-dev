import {
  Box,
  IconButton,
  Link,
  makeStyles,
  SvgIconProps,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

const SOCIAL_MEDIA = [
  {
    name: "Github",
    url: "https://github.com/crvouga",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/chris-vouga/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ChrisVouga",
  },
];

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

export type IFooterProps = {
  href: string;
};

export const Footer = ({ href }: IFooterProps) => {
  const classes = useStyles();
  return (
    <Box>
      <Box display="flex" justifyContent="center" paddingY={2}>
        {SOCIAL_MEDIA.map(({ name, url }) => (
          <Link key={url} href={url}>
            <IconButton>
              <SocialMediaIcon className={classes.large} name={name} />
            </IconButton>
          </Link>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Link href={href}>
          <Typography color="textSecondary" align="center">
            Built by Chris Vouga
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

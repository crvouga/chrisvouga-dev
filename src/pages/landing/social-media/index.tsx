import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";

const useStyles = makeStyles(() => ({
  large: {
    fontSize: "1.5em",
  },
}));

export const SocialMediaIcon = ({
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

    case "instagram":
      return <InstagramIcon {...props} />;

    default:
      throw new Error("Invalid social media name");
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

export const SocialMediaButton = ({ name }: { name: string }) => {
  const length = "2.5em";

  return (
    <Box
      width="150px"
      height="150px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={2}
    >
      <SocialMediaIcon style={{ width: length, height: length }} name={name} />
      <Typography variant="h5">{name}</Typography>
    </Box>
  );
};

export const SocialMediaCard = ({ name }: { name: string }) => {
  const length = "2.5em";

  return (
    <Card>
      <Box
        display="flex"
        flexDirection="column"
        padding={2}
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <SocialMediaIcon
          style={{ width: length, height: length }}
          name={name}
        />
        <Typography variant="h5">{name}</Typography>
      </Box>
    </Card>
  );
};

export const SocialMediaCardGrid = ({
  socialMedia,
}: {
  socialMedia: { url: string; name: string }[];
}) => {
  return (
    <Grid container>
      {socialMedia.map(({ name, url }) => (
        <Grid item xs={6} sm={4} md={2} key={url}>
          <Link href={url}>
            <SocialMediaCard name={name} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { IProjectCardProps } from "./IProjectCardProps";
import { LiveSiteButton, SourceCodeButton } from "./ProjectCardButton";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  actions: {
    display: "flex",
    alignItems: "center",
  },
  media: {
    height: 0,
    paddingTop: "75%",
  },
}));

export const ProjectCardSmall = (props: IProjectCardProps) => {
  const { src, title, liveSiteURL, sourceCodeURL } = props;

  const classes = useStyles();

  const openLiveSite = () => {
    window.open(liveSiteURL);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={openLiveSite}>
        <CardMedia className={classes.media} image={src} />
      </CardActionArea>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Box className={classes.actions}>
          <SourceCodeButton sourceCodeURL={sourceCodeURL} />
          <LiveSiteButton liveSiteURL={liveSiteURL} />
        </Box>
      </CardContent>
    </Card>
  );
};

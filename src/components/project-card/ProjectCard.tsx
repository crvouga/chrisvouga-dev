import {
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { IProjectCardProps } from "./IProjectCardProps";
import { LiveSiteButton, SourceCodeButton } from "./ProjectCardButton";

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "75%",
  },
}));

export const ProjectCard = (props: IProjectCardProps) => {
  const { src, title, liveSiteURL, sourceCodeURL } = props;

  const classes = useStyles();

  const openLiveSite = () => {
    window.open(liveSiteURL);
  };

  return (
    <Card variant="outlined">
      <CardHeader title={title} />

      <CardActionArea onClick={openLiveSite}>
        <CardMedia className={classes.media} image={src} />
      </CardActionArea>

      <CardActions>
        <SourceCodeButton sourceCodeURL={sourceCodeURL} />
        <LiveSiteButton liveSiteURL={liveSiteURL} />
      </CardActions>
    </Card>
  );
};

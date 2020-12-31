import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { IProjectCardProps } from "./IProjectCardProps";
import { LiveSiteButton, SourceCodeButton } from "./ProjectCardButton";
import { ProjectCardTopics } from "./ProjectCardTopics";

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "75%",
  },
}));

export const ProjectCard = (props: IProjectCardProps) => {
  const { src, title, description, liveSiteURL, sourceCodeURL, topics } = props;

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

      <CardContent>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {description}
        </Typography>
        <ProjectCardTopics topics={topics} />
      </CardContent>

      <CardActions>
        <SourceCodeButton sourceCodeURL={sourceCodeURL} />
        <LiveSiteButton liveSiteURL={liveSiteURL} />
      </CardActions>
    </Card>
  );
};

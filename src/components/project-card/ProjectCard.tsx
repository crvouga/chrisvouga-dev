import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
import { goTo } from "../../utility";
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
  const { src, title, description, liveSiteUrl, sourceCodeUrl, topics } = props;

  const classes = useStyles();

  return (
    <Card variant="outlined">
      <CardHeader title={title} />

      <CardActionArea onClick={() => goTo(liveSiteUrl)}>
        <CardMedia className={classes.media} image={src} />
      </CardActionArea>

      <CardContent>
        <Box paddingBottom={2}>
          <Typography variant="body1" color="textPrimary">
            {description}
          </Typography>
        </Box>
        <ProjectCardTopics topics={topics} />
      </CardContent>

      <CardActions>
        <SourceCodeButton sourceCodeUrl={sourceCodeUrl} />
        <LiveSiteButton liveSiteUrl={liveSiteUrl} />
      </CardActions>
    </Card>
  );
};

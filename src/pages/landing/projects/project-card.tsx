import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IProject } from "../../../data-access/projects";
import { Screenshot } from "../../../screenshot/screenshot";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
  },
  content: {
    width: "100%",
    flex: 1,
  },
}));

export const ProjectCard = ({ project }: { project: IProject }) => {
  const {
    title,
    description,
    liveSiteUrl,
    screenshotTimeout,
    sourceCodeUrl,
  } = project;

  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <Link href={liveSiteUrl}>
        <Screenshot
          imageType="jpeg"
          targetUrl={liveSiteUrl}
          timeout={screenshotTimeout}
          alt={title}
        />
      </Link>

      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <Typography variant="body1" color="textSecondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Link href={sourceCodeUrl}>
          <Button size="large" color="primary">
            Code
          </Button>
        </Link>
        <Link href={liveSiteUrl}>
          <Button size="large" color="primary">
            Live Site
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

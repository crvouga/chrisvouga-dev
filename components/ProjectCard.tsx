import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  Button,
} from "@material-ui/core";
import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import WebIcon from "@material-ui/icons/Web";

interface IProjectCardProps {
  title: string;
  description: string;
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function ProjectCard(props: IProjectCardProps) {
  const { title, description } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button startIcon={<CodeIcon />} size="large">
          Code
        </Button>
        <Button startIcon={<WebIcon />} size="large">
          Live Site
        </Button>
      </CardActions>
    </Card>
  );
}

import {
  Button,
  ButtonProps,
  Card,
  CardActions,
  CardHeader,
  makeStyles,
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import WebIcon from "@material-ui/icons/Web";
import React from "react";

export interface IProjectCardProps {
  title: string;
  description: string;
  liveSiteURL: string;
  sourceCodeURL: string;
}

const useStyles = makeStyles(() => ({
  root: {},
  media: {
    width: "100%",
    height: "240px",
  },
}));

function ProjectCardButton(props: ButtonProps) {
  return <Button size="large" {...props} />;
}

export default function ProjectCard(props: IProjectCardProps) {
  const { title, description, sourceCodeURL, liveSiteURL } = props;
  const classes = useStyles();

  const openLiveSite = () => {
    window.open(liveSiteURL);
  };

  const openSourceCode = () => {
    window.open(sourceCodeURL);
  };

  return (
    <Card classes={{ root: classes.root }}>
      <CardHeader title={title} subheader={description} />

      <CardActions>
        <ProjectCardButton startIcon={<CodeIcon />} onClick={openSourceCode}>
          Source Code
        </ProjectCardButton>
        <ProjectCardButton startIcon={<WebIcon />} onClick={openLiveSite}>
          Live Site
        </ProjectCardButton>
      </CardActions>
    </Card>
  );
}

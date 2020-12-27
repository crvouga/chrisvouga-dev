import {
  Button,
  ButtonProps,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import WebIcon from "@material-ui/icons/Web";
import React from "react";

export interface IProjectCardProps {
  src: string;
  title: string;
  liveSiteURL: string;
  sourceCodeURL: string;
}

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "75%",
  },
}));

function ProjectCardButton(props: ButtonProps) {
  return <Button variant="outlined" size="large" {...props} />;
}

export default function ProjectCard(props: IProjectCardProps) {
  const { src, title, sourceCodeURL, liveSiteURL } = props;

  const classes = useStyles();

  const openLiveSite = () => {
    window.open(liveSiteURL);
  };

  const openSourceCode = () => {
    window.open(sourceCodeURL);
  };

  return (
    <Card variant="outlined">
      <CardHeader title={title} />

      <CardActionArea onClick={openLiveSite}>
        <CardMedia className={classes.media} image={src} />
      </CardActionArea>

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

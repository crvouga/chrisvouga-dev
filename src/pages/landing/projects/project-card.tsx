import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CallMadeIcon from "@material-ui/icons/CallMade";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import Image from "next/image";
import React from "react";
import { GithubTopicChipGroup } from "../../../components/github-topics";
import { IProject } from "../../../data/projects";

const useStyles = makeStyles(() => ({
  media: {
    position: "relative",
    height: 0,
    paddingTop: "75%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  content: {
    flex: 1,
  },
}));

export const ProjectCard = ({ project }: { project: IProject }) => {
  const {
    src,
    title,
    description,
    liveSiteUrl,
    sourceCodeUrl,
    topics,
  } = project;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link href={liveSiteUrl}>
        <CardHeader
          title={title}
          action={
            <IconButton
              disableRipple
              disableFocusRipple
              disableTouchRipple
              aria-label="go to project"
            >
              <CallMadeIcon />
            </IconButton>
          }
        />

        <Box className={classes.media}>
          <Image layout="fill" alt={description} src={src} />
        </Box>
      </Link>

      <CardContent className={classes.content}>
        <Box paddingBottom={2}>
          <Typography variant="body1">{description}</Typography>
        </Box>
        <GithubTopicChipGroup topics={topics} />
      </CardContent>

      <CardActions>
        <Link href={sourceCodeUrl}>
          <Button variant="text" size="large" startIcon={<GitHubIcon />}>
            Source Code
          </Button>
        </Link>
        <Link href={liveSiteUrl}>
          <Button variant="text" size="large" startIcon={<WebIcon />}>
            Live Site
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import React from "react";
import { GithubTopicChipGroup } from "../../../components/github-topics";

export interface IProjectCardProps {
  src: string;
  title: string;
  liveSiteUrl: string;
  sourceCodeUrl: string;
  topics: string[];
  languages: {
    [language: string]: number;
  };
  description: string;
}

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "75%",
  },
}));

const SourceCodeButton = ({ sourceCodeUrl }: { sourceCodeUrl: string }) => {
  return (
    <Link href={sourceCodeUrl}>
      <Button variant="text" size="large" startIcon={<GitHubIcon />}>
        Source Code
      </Button>
    </Link>
  );
};

const LiveSiteButton = ({ liveSiteUrl }: { liveSiteUrl: string }) => {
  return (
    <Link href={liveSiteUrl}>
      <Button variant="text" size="large" startIcon={<WebIcon />}>
        Live Site
      </Button>
    </Link>
  );
};

export const ProjectCard = (props: IProjectCardProps) => {
  const { src, title, description, liveSiteUrl, sourceCodeUrl, topics } = props;

  const classes = useStyles();

  return (
    <Card>
      <CardHeader title={title} />

      <Link href={liveSiteUrl}>
        <CardActionArea>
          <CardMedia className={classes.media} image={src} />
        </CardActionArea>
      </Link>

      <CardContent>
        <Box paddingBottom={2}>
          <Typography variant="body1" color="textPrimary">
            {description}
          </Typography>
        </Box>
        <GithubTopicChipGroup topics={topics} />
      </CardContent>

      <CardActions>
        <SourceCodeButton sourceCodeUrl={sourceCodeUrl} />
        <LiveSiteButton liveSiteUrl={liveSiteUrl} />
      </CardActions>
    </Card>
  );
};

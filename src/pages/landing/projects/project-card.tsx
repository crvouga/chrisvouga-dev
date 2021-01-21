import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import React from "react";
import { GithubTopicChipGroup } from "../../../components/github-topics";
import Image from "next/image";

export interface IProjectCardProps {
  src: string;
  title: string;
  liveSiteUrl: string;
  sourceCodeUrl: string;
  topics: string[];
  description: string;
}

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
    <Card className={classes.card}>
      <Link href={liveSiteUrl}>
        <CardHeader
          title={title}
          action={
            <IconButton disableRipple disableFocusRipple disableTouchRipple>
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
          <Typography variant="body1" color="textSecondary">
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

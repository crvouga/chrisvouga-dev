import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { GetStaticProps } from "next";
import React from "react";
import ProjectCard, { IProjectCardProps } from "../src/components/ProjectCard";
import writeScreenshot from "../src/services/screenshot";
import { urlToFilename } from "../src/services/url-filename";
import { ThemeTypeToggleButton } from "../src/components/ThemeProvider";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar></Toolbar>
      </Container>
    </AppBar>
  );
}

function Hero() {
  return (
    <Box paddingY={2}>
      <Box paddingY={2}>
        <Typography variant="h1">Chris Vouga</Typography>
        <Typography variant="h2" color="textSecondary">
          Web Developer
        </Typography>
      </Box>
      <Box paddingY={2}>
        <Typography variant="h6">
          I am a software developer based in the Phoenix Valley. My main area of
          focus is in developing web applications.
        </Typography>
      </Box>
      <Button size="large" variant="outlined" color="primary">
        Contact Me
      </Button>
    </Box>
  );
}

function Projects({
  projectCardProps,
}: {
  projectCardProps: IProjectCardProps[];
}) {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Some Things I've Built
      </Typography>
      <Grid container spacing={1}>
        {projectCardProps.map((props) => (
          <Grid key={props.liveSiteURL} item xs sm={6}>
            <ProjectCard {...props} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

interface IIndexProps {
  number: number;
  projectCardProps: IProjectCardProps[];
}

const PROJECT_CARD_PROPS = [
  {
    title: "Pickflix",
    liveSiteURL: "https://www.pickflix.io/",
    sourceCodeURL: "https://github.com/crvouga/pickflix",
  },
  {
    title: "Connect Four",
    liveSiteURL: "https://connect-four-in-a-row.web.app/",
    sourceCodeURL: "https://github.com/crvouga/connect-four",
  },
  {
    title: "Simon Says",
    liveSiteURL: "https://simon-says-game.web.app/",
    sourceCodeURL: "https://github.com/crvouga/simon-says",
  },
  {
    title: "Match Three",
    liveSiteURL: "https://match-three-game.web.app/",
    sourceCodeURL: "https://github.com/crvouga/match-three",
  },
];

const urlToImagePath = ({ liveSiteURL }: { liveSiteURL: string }) =>
  `public/${urlToFilename(liveSiteURL)}.png`;

const urlToImageSrc = ({ liveSiteURL }: { liveSiteURL: string }) =>
  `/${urlToFilename(liveSiteURL)}.png`;

export const getStaticProps: GetStaticProps = async () => {
  await Promise.all(
    PROJECT_CARD_PROPS.map(async ({ liveSiteURL }) => {
      await writeScreenshot({
        url: liveSiteURL,
        timeout: 2000,
        path: urlToImagePath({ liveSiteURL }),
      });
    })
  );

  const projectCardProps: IProjectCardProps[] = PROJECT_CARD_PROPS.map(
    ({ liveSiteURL, sourceCodeURL, title }) => {
      return {
        liveSiteURL,
        sourceCodeURL,
        title,
        src: urlToImageSrc({ liveSiteURL }),
      };
    }
  );

  return {
    props: {
      projectCardProps,
    },
  };
};

export default function Index(props: IIndexProps) {
  const { projectCardProps } = props;
  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="md">
        <Box paddingY={2}>
          <Hero />
        </Box>
        <Box paddingY={2}>
          <Projects projectCardProps={projectCardProps} />
        </Box>
      </Container>
    </React.Fragment>
  );
}

import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
  Divider,
  useTheme,
} from "@material-ui/core";
import { GetStaticProps } from "next";
import React from "react";
import ProjectCard, { IProjectCardProps } from "../src/components/ProjectCard";
import {
  urlToImagePath,
  urlToImageSrc,
  writeScreenshot,
} from "../src/services/screenshot";
import { ThemeTypeToggleButton } from "../src/components/ThemeProvider";

function NavBar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box flex={1} />
          <ThemeTypeToggleButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function Hero() {
  const theme = useTheme();
  return (
    <Box>
      <Box paddingY={2} fontWeight="bold">
        <Typography variant="h1">Chris Vouga.</Typography>
        <Typography variant="h1" color="textSecondary">
          I build things for the web.
        </Typography>
      </Box>
      <Box paddingY={2} maxWidth={theme.breakpoints.values.sm}>
        <Typography variant="h6">
          I am a software developer based in the Phoenix Valley. My main area of
          focus is in developing web applications.
        </Typography>
      </Box>
      <Button size="large" variant="outlined" color="primary">
        Get In Touch
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

export const getStaticProps: GetStaticProps = async () => {
  for (const { liveSiteURL } of PROJECT_CARD_PROPS) {
    await writeScreenshot({
      url: liveSiteURL,
      timeout: 2000,
      path: urlToImagePath(liveSiteURL),
    });
  }

  const projectCardProps: IProjectCardProps[] = PROJECT_CARD_PROPS.map(
    ({ liveSiteURL, sourceCodeURL, title }) => {
      return {
        liveSiteURL,
        sourceCodeURL,
        title,
        src: urlToImageSrc(liveSiteURL),
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
      <Container maxWidth="lg">
        <Box paddingX={6}>
          <Box paddingY={12}>
            <Hero />
          </Box>
          <Box paddingY={12}>
            <Projects projectCardProps={projectCardProps} />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

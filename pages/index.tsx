import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import React from "react";
import ProjectCard, { IProjectCardProps } from "../components/ProjectCard";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5">chrisvouga.dev</Typography>
          <Box flex={1} />
          <Box color="text.primary">
            <Button>Projects</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const PROJECT_CARD_PROPS: IProjectCardProps[] = [
  {
    title: "Pickflix",
    description: "A movie explore and record app to help users pick flixs",
    liveSiteURL: "https://www.pickflix.io/",
    sourceCodeURL: "https://github.com/crvouga/pickflix",
  },
  {
    title: "Connect Four",
    description:
      "An implementation of the classic game Connect Four. Features include: an AI to play against, and online multiplayer",
    liveSiteURL: "https://connect-four-in-a-row.web.app/",
    sourceCodeURL: "https://github.com/crvouga/connect-four",
  },
];

function Projects() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={1}>
        {PROJECT_CARD_PROPS.map((props) => (
          <Grid key={props.liveSiteURL} item xs>
            <ProjectCard {...props} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

function Banner() {
  return (
    <React.Fragment>
      <Typography variant="h3" align="center">
        Chris Vouga
      </Typography>
      <Typography variant="h5" align="center">
        Developer
      </Typography>
    </React.Fragment>
  );
}

export default function Index() {
  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="md">
        {/* <Image
          src="/../example.png"
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
        <Box paddingY={1}>
          <Banner />
        </Box>
        <Divider />
        <Box paddingY={1}>
          <Projects />
        </Box>
      </Container>
    </React.Fragment>
  );
}

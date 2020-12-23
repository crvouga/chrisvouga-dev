import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import ProjectCard, { IProjectCardProps } from "../components/ProjectCard";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h4">chrisvouga.dev</Typography>
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
    <Box>
      <Typography variant="h4">Projects</Typography>
      <Grid container spacing={1}>
        {PROJECT_CARD_PROPS.map((props) => (
          <Grid key={props.liveSiteURL} item xs>
            <ProjectCard {...props} />
          </Grid>
        ))}
      </Grid>
    </Box>
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
        <Projects />
      </Container>
    </React.Fragment>
  );
}

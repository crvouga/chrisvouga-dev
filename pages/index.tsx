import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import ProjectCard from "../components/ProjectCard";

const CARD_DATA = [
  {
    title: "Pickflix",
    description: "A movie explore and record app to help users pick flixs",
  },
  {
    title: "Connect Four",
    description:
      "An implementation of the classic game Connect Four. Features include: an AI to play against, and online multiplayer",
  },
];

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

function Projects() {
  return (
    <Box>
      <Typography variant="h4">Projects</Typography>
      <Grid container spacing={1}>
        {CARD_DATA.map(({ title, description }) => (
          <Grid item xs={6}>
            <ProjectCard title={title} description={description} />
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
        <Projects />
      </Container>
    </React.Fragment>
  );
}

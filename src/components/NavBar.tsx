import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import React from "react";

export const NavBar = () => {
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="lg">
        <Toolbar>
          <Avatar src={"/personal-logo-dark.svg"} />

          <Box flex={1} />
          <Button variant="outlined" color="secondary" size="large">
            Resume
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

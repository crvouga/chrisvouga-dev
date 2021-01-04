import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  appBar: {},
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="sticky" color="default">
      <Container maxWidth="lg">
        <Toolbar>
          <Avatar className={classes.avatar} src={"/personal-logo-dark.svg"} />
          <Typography variant="h6">Chris Vouga</Typography>

          <Box flex={1} />
          <Button variant="outlined" color="secondary" size="large">
            Resume
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

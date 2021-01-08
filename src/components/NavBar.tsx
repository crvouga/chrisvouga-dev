import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import React, { useState } from "react";
import { usePersonalLogoSrc } from "./ThemeProvider";

const useStyles = makeStyles((theme) => ({
  appBar: {},
  avatar: {
    marginRight: theme.spacing(1),
  },
}));
export const NavBar = () => {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const personalLogoSrc = usePersonalLogoSrc();

  return (
    <React.Fragment>
      <AppBar className={classes.appBar} position="sticky" color="default">
        <Container maxWidth="lg">
          <Toolbar>
            <Avatar className={classes.avatar} src={personalLogoSrc} />

            <Box flex={1} />

            <Hidden xsDown>
              <Box marginRight={1}>
                <Button>Projects</Button>
                <Button>About</Button>
                <Button>Contact</Button>
                <Button>Resume</Button>
              </Box>
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={() => setIsDrawerOpen(true)}>
                <MenuOpenIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        keepMounted
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List>
          {["Projects", "About", "Contact"].map((section) => (
            <ListItem key={section} button>
              <ListItemText primary={section} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

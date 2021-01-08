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
import { usePersonalLogoSrc } from "../theme";

const useStyles = makeStyles((theme) => ({
  gutter: {
    ...theme.mixins.toolbar,
  },
  avatar: {
    backgroundColor: theme.palette.background.default,
    marginRight: theme.spacing(1),
  },
  button: {
    fontWeight: "bold",
    color: "#fff",
    marginRight: theme.spacing(1),
  },
}));
export const NavBar = () => {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const personalLogoSrc = usePersonalLogoSrc();

  return (
    <React.Fragment>
      <AppBar elevation={0}>
        <Container maxWidth="lg">
          <Toolbar>
            <Avatar src={"/personal-logo-dark.svg"} />

            <Box flex={1} />

            <Hidden xsDown>
              <Box marginRight={1}>
                <Button className={classes.button}>Projects</Button>
                <Button className={classes.button}>About</Button>
                <Button className={classes.button}>Contact</Button>
                <Button variant="outlined" className={classes.button}>
                  Resume
                </Button>
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

      <Box className={classes.gutter} />

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

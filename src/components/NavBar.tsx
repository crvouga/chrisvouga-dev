import {
  Avatar,
  AppBar,
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

  return (
    <React.Fragment>
      <AppBar elevation={0}>
        <Container maxWidth="lg" disableGutters>
          <Toolbar>
            <Avatar src={"/personal-logo-dark.svg"} />
            <Box flex={1} />
            <Hidden xsDown>
              <Button className={classes.button}>About</Button>
              <Button className={classes.button}>Work</Button>
              <Button className={classes.button}>Contact</Button>

              <Button variant="outlined" className={classes.button}>
                Resume
              </Button>
            </Hidden>
            <Hidden smUp>
              <IconButton
                onClick={() => setIsDrawerOpen(true)}
                style={{ color: "white" }}
              >
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

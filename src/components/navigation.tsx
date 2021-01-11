import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import Link from "next/link";
import React, { useState } from "react";
import { ElevationScroll } from "./elevation-scroll";

const useStyles = makeStyles((theme) => ({
  gutter: {
    ...theme.mixins.toolbar,
  },
  logo: {
    cursor: "pointer",
  },

  button: {
    fontWeight: "bold",
    color: "#fff",
    marginRight: theme.spacing(1),
  },
}));

const Links = () => {
  const classes = useStyles();

  return (
    <Box>
      <Link href="/#about">
        <Button className={classes.button}>About</Button>
      </Link>
      <Link href="/#projects">
        <Button className={classes.button}>Work</Button>
      </Link>
      <Link href="/#contact">
        <Button className={classes.button}>Contact</Button>
      </Link>

      <Button variant="outlined" className={classes.button}>
        Resume
      </Button>
    </Box>
  );
};

export const NavigationBar = () => {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Container maxWidth="lg" disableGutters>
            <Toolbar>
              <Link href="/">
                <Avatar
                  className={classes.logo}
                  src={"/personal-logo-dark.svg"}
                />
              </Link>
              <Box flex={1} />
              <Hidden xsDown>
                <Links />
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
      </ElevationScroll>

      <Box className={classes.gutter} />

      <Drawer
        keepMounted
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Links />
      </Drawer>
    </React.Fragment>
  );
};

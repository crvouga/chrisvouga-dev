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
  ButtonBase,
} from "@material-ui/core";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import Link from "next/link";
import React, { useState } from "react";
import { ElevationScroll } from "./elevation-scroll";

const useStyles = makeStyles((theme) => ({
  gutter: {
    ...theme.mixins.toolbar,
  },

  button: {
    fontWeight: "bold",
    color: "#fff",
  },
}));

interface INavigationLinkButtonProps {
  label: string;
  href: string;
}

const NAVIGATION_LINKS: INavigationLinkButtonProps[] = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Work",
    href: "/#projects",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

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
                <ButtonBase color="primary">
                  <Avatar src="/personal-logo-dark.svg" />
                </ButtonBase>
              </Link>

              <Box flex={1} />

              <Hidden xsDown>
                {NAVIGATION_LINKS.map(({ href, label }) => (
                  <Box marginRight={1} key={href}>
                    <Link href={href}>
                      <Button className={classes.button}>{label}</Button>
                    </Link>
                  </Box>
                ))}
              </Hidden>

              <Hidden smUp>
                <IconButton
                  onClick={() => {
                    setIsDrawerOpen(true);
                  }}
                >
                  <Box color="#fff">
                    <MenuOpenIcon color="inherit" />
                  </Box>
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
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <Box width="66vw">
          {NAVIGATION_LINKS.map(({ href, label }) => (
            <Box marginRight={1} key={href}>
              <Link href={href}>
                <Button
                  fullWidth
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                >
                  {label}
                </Button>
              </Link>
            </Box>
          ))}
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

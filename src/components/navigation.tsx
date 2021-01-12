import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonBase,
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
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
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
                    <MenuIcon color="inherit" />
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
        <Toolbar>
          <Box flex={1} />
          <IconButton
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Box display="flex" flexDirection="column" width="66vw" height="100vh">
          <List>
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <Link href={href} key={href}>
                <ListItem
                  button
                  divider
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ variant: "button" }}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

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
import { SECTION_ORDER, SECTION_TO_URL, SECTION_TO_NAME } from "./section";

const useStyles = makeStyles((theme) => ({
  gutter: {
    ...theme.mixins.toolbar,
  },

  button: {
    fontWeight: "bold",
    color: "#fff",
  },
}));

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
                <Box color="#fff">
                  <ButtonBase color="inherit">
                    <Avatar src="/personal-logo-dark.svg" />
                  </ButtonBase>
                </Box>
              </Link>

              <Box flex={1} />

              <Hidden xsDown>
                {SECTION_ORDER.map((section) => (
                  <Box marginRight={1} key={SECTION_TO_URL[section]}>
                    <Link href={SECTION_TO_URL[section]}>
                      <Button className={classes.button}>
                        {SECTION_TO_NAME[section]}
                      </Button>
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
            {SECTION_ORDER.map((section) => (
              <Link
                href={SECTION_TO_URL[section]}
                key={SECTION_TO_URL[section]}
              >
                <ListItem
                  button
                  divider
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                >
                  <ListItemText
                    primary={SECTION_TO_NAME[section]}
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

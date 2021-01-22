import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ElevationScroll } from "../../components/elevation-scroll";
import { SECTION_ORDER, SECTION_TO_NAME, SECTION_TO_URL } from "./section";

const useStyles = makeStyles((theme) => ({
  gutter: {
    ...theme.mixins.toolbar,
  },

  button: {
    fontWeight: "bold",
    color: "#fff",
  },

  logo: {
    backgroundColor: "transparent",
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Container maxWidth="lg" disableGutters>
            <Toolbar>
              <Link href="/">
                <Box color="#fff">
                  <ButtonBase color="inherit">
                    <Avatar className={classes.logo}>
                      <Image
                        priority
                        layout="fill"
                        alt="chris vouga logo"
                        src="/personal-logo-dark.svg"
                      />
                    </Avatar>
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
                <IconButton aria-label="open drawer" onClick={openDrawer}>
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
        onClose={closeDrawer}
      >
        <Toolbar>
          <Box flex={1} />
          <IconButton aria-label="close drawer" onClick={closeDrawer}>
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
                <ListItem button divider onClick={closeDrawer}>
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

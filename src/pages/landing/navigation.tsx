import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import Image from "next/image";
import React from "react";
import { useBoolean } from "../../components/boolean";
import { ElevationScroll } from "../../components/elevation-scroll";
import { IMAGE_ASSETS_SRC } from "../../data-access/assets";
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

  const open = useBoolean(false);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Container maxWidth="lg" disableGutters>
            <Toolbar>
              <Box color="#fff">
                <ButtonBase href="/" color="inherit">
                  <Avatar className={classes.logo}>
                    <Image
                      priority
                      layout="fill"
                      {...IMAGE_ASSETS_SRC.logos.personalDark}
                    />
                  </Avatar>
                </ButtonBase>
              </Box>

              <Box flex={1} />

              <Hidden xsDown>
                {SECTION_ORDER.map((section) => (
                  <Box marginRight={1} key={SECTION_TO_URL[section]}>
                    <Button
                      href={SECTION_TO_URL[section]}
                      size="large"
                      className={classes.button}
                    >
                      {SECTION_TO_NAME[section]}
                    </Button>
                  </Box>
                ))}
              </Hidden>

              <Hidden smUp>
                <IconButton aria-label="open drawer" onClick={open.setTrue}>
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
        open={open.value}
        onClose={open.setFalse}
      >
        <Toolbar>
          <Box flex={1} />
          <IconButton aria-label="close drawer" onClick={open.setFalse}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Box display="flex" flexDirection="column" width="66vw" height="100vh">
          {SECTION_ORDER.map((section) => (
            <Button
              href={SECTION_TO_URL[section]}
              key={SECTION_TO_URL[section]}
              rel={undefined}
              target={undefined}
              fullWidth
              variant="text"
              size="large"
              onClick={open.setFalse}
            >
              {SECTION_TO_NAME[section]}
            </Button>
          ))}
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

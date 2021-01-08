import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const themeToFill = (theme: Theme) =>
  theme.palette.background.default
    //why? "#" is a reserved character in a url
    .replace("#", "%23");

const createBackgroundUrl = (theme: Theme) =>
  `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1123 258'><path d='M1124,2c0,0 0,256 0,256l-1125,0l0,-48c0,0 16,5 55,5c116,0 197,-92 325,-92c121,0 114,46 254,46c140,0 214,-167 572,-166Z' style='fill: ${themeToFill(
    theme
  )}' /></svg>`;

const useStyles = makeStyles((theme) => ({
  typography: {
    fontWeight: "bold",
    color: "#fff",
  },
  root: {
    background: `
      url("${createBackgroundUrl(theme)}")
      no-repeat bottom,
      linear-gradient(
        to bottom,
        ${theme.palette.primary.main}, 
        ${theme.palette.secondary.main}, 99%,
        ${theme.palette.background.default} 99%
      )`,
  },

  callToAction: {
    fontWeight: "bold",
    color: "white",
    borderColor: "white",
  },

  gutter: {
    width: "100%",
    height: "75px",
  },
  content: {
    height: "75vh",
  },

  heading: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "3em",
    },
  },
}));

export const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" className={classes.content}>
        <Grid container direction="row" alignItems="center">
          <Grid item sm={6}>
            <Typography
              color="primary"
              className={classes.typography}
              variant="h6"
            >
              Hello, my name is
            </Typography>
            <Typography
              variant="h2"
              className={clsx(classes.heading, classes.typography)}
            >
              Chris Vouga.
            </Typography>
            <Typography
              variant="h2"
              color="textSecondary"
              className={clsx(classes.heading, classes.typography)}
              gutterBottom
            >
              I build things for the web.
            </Typography>
            <Button
              size="large"
              className={classes.callToAction}
              variant="outlined"
            >
              Check out work
            </Button>
          </Grid>

          <Grid item sm={6}>
            <Container maxWidth="xs">
              <img width="100%" height="100%" src="/hero.svg" />
            </Container>
          </Grid>
        </Grid>

        <Box className={classes.gutter} />
      </Container>
    </Box>
  );
};

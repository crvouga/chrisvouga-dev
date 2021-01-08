import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
const useStyles = makeStyles((theme) => ({
  typography: {
    fontWeight: "bold",
    color: "#fff",
  },
  logo: {
    width: "240px",
  },
  tagline: {
    maxWidth: theme.breakpoints.values.sm,
  },
  root: {
    paddingTop: theme.spacing(2),

    backgroundSize: "auto",
    background: `
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1123 258'><path d='M1124,2c0,0 0,256 0,256l-1125,0l0,-48c0,0 16,5 55,5c116,0 197,-92 325,-92c121,0 114,46 254,46c140,0 214,-167 572,-166Z' style='fill: ${theme.palette.background.default.replace(
        "#",
        "%23"
      )}' /></svg>")
      no-repeat bottom,
      linear-gradient(
        to bottom,
        ${theme.palette.primary.main}, 
        ${theme.palette.secondary.main}, 99%,
        ${theme.palette.background.default} 99%
      )`,
  },

  gutter: {
    marginBottom: theme.spacing(2),
  },
}));

//SOURCE: https://stackoverflow.com/questions/17202548/wavy-shape-with-css

export const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container direction="row">
          <Grid item sm={6}>
            <Typography
              color="primary"
              className={classes.typography}
              variant="h6"
            >
              Hello, my name is
            </Typography>
            <Typography variant="h2" className={classes.typography}>
              Chris Vouga.
            </Typography>
            <Typography
              variant="h2"
              color="textSecondary"
              className={clsx(classes.tagline, classes.typography)}
            >
              I build things for the web.
            </Typography>
          </Grid>

          <Grid item sm={4}>
            <img width="100%" src="/hero-logo.svg" />
          </Grid>
        </Grid>
        <Box className={classes.gutter} />
      </Container>
    </Box>
  );
};

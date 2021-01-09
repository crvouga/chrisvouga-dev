import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Section } from "../../../components/section";

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
  section: {
    paddingBottom: theme.spacing(12),
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
    <Box className={classes.root} id="hero">
      <Section className={classes.section}>
        <Grid container direction="row" alignItems="center">
          <Grid item md={6}>
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
            <Link href="/#projects">
              <Button
                size="large"
                className={classes.callToAction}
                variant="outlined"
                startIcon={<ArrowDownwardIcon />}
              >
                Check out work
              </Button>
            </Link>
          </Grid>

          <Grid item md={6}>
            <Container maxWidth="xs">
              <img width="100%" height="100%" src="/hero.svg" />
            </Container>
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
};

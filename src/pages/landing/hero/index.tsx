import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `
      no-repeat bottom,
      linear-gradient(
        to bottom,
        ${theme.palette.primary.main}, 
        ${theme.palette.primary.light}, 99%,
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
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(12),
  },

  imageContainer: {
    position: "relative",
    paddingTop: "100%",
    height: 0,
    margin: "auto",
  },

  typography: {
    fontWeight: "bolder",
    color: "#fff",
  },
}));

export const Hero = () => {
  const classes = useStyles();

  return (
    <div id="hero" className={classes.root}>
      <Container maxWidth="lg" className={classes.section}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={6}>
            <Typography className={classes.typography} variant="h4">
              Hello, my name is
            </Typography>
            <Typography className={classes.typography} variant="h1">
              Chris Vouga
            </Typography>
            <Typography
              className={classes.typography}
              variant="h2"
              gutterBottom
            >
              Software Developer
            </Typography>

            <Button
              href="/#projects"
              size="large"
              className={classes.callToAction}
              variant="outlined"
              startIcon={<ArrowDownwardIcon />}
            >
              Projects
            </Button>
          </Grid>

          <Grid item xs={12} sm={8} md={6}>
            <div className={classes.imageContainer}>
              <Image priority layout="fill" src="/hero.svg" alt="hero" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

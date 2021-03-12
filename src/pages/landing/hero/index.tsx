import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Image from "next/image";
import React from "react";
import { IHero } from "../../../data/hero";

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

export const Hero = ({ hero }: { hero: IHero }) => {
  const classes = useStyles();

  return (
    <div id="hero" className={classes.root}>
      <Container maxWidth="lg" className={classes.section}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={6}>
            <Typography className={classes.typography} variant="h4">
              {hero.greeting}
            </Typography>
            <Typography className={classes.typography} variant="h1">
              {hero.main}
            </Typography>
            <Typography
              className={classes.typography}
              variant="h2"
              gutterBottom
            >
              {hero.secondary}
            </Typography>

            <Button
              href={hero.callToAction.link}
              size="large"
              className={classes.callToAction}
              variant="outlined"
              startIcon={<ArrowDownwardIcon />}
            >
              {hero.callToAction.name}
            </Button>
          </Grid>

          <Grid item xs={12} sm={8} md={6}>
            <div className={classes.imageContainer}>
              <Image priority layout="fill" {...hero.mainImage} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

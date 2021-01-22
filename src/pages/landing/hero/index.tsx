import Box from "@material-ui/core/Box";
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
}));

export const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id="hero">
      <Container maxWidth="lg" className={classes.section}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4">
              <Box color="#fff" fontWeight="bold">
                Hello, my name is
              </Box>
            </Typography>
            <Typography variant="h1">
              <Box fontWeight="bold" color="#fff">
                Chris Vouga
              </Box>
            </Typography>
            <Typography variant="h2" color="textSecondary" gutterBottom>
              <Box color="#fff" fontWeight="bold">
                Software Developer
              </Box>
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
            <Box position="relative" paddingTop="100%" height={0} margin="auto">
              <Image priority layout="fill" src="/hero.svg" alt="hero" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

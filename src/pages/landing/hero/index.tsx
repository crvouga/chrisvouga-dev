import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `
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
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(12),
  },
}));

export const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id="hero">
      <Container maxWidth="lg" className={classes.section}>
        <Grid container direction="row" alignItems="center">
          <Grid item md={6}>
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
            <Link href="/#projects">
              <Button
                size="large"
                className={classes.callToAction}
                variant="outlined"
                startIcon={<ArrowDownwardIcon />}
              >
                Projects
              </Button>
            </Link>
          </Grid>

          <Grid item md={6}>
            <Container maxWidth="xs">
              <img width="100%" height="100%" src="/hero.svg" />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

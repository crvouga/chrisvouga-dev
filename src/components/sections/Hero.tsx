import {
  Box,
  makeStyles,
  Typography,
  useTheme,
  Container,
} from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";
import { SocialMediaIconButton } from "../SocialMedia";

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: "bold",
    color: "#fff",
  },
  logo: {
    width: "240px",
  },
  root: {
    display: "flex",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(12),
    width: "100vw",

    background: `
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1123 258'><path d='M1124,2c0,0 0,256 0,256l-1125,0l0,-48c0,0 16,5 55,5c116,0 197,-92 325,-92c121,0 114,46 254,46c140,0 214,-167 572,-166Z' style='fill: white' /></svg>")
      no-repeat bottom,
      linear-gradient(
        to bottom,
        ${theme.palette.primary.main}, 
        ${theme.palette.secondary.main}, 99%,
        ${theme.palette.background.default} 99%
      )`,
  },
  waveContainer: {
    display: "inline-block",
    position: "relative",
    width: "100%",
    paddingBottom: "100%",
    verticalAlign: "middle",
    overflow: "hidden",
  },
  wave: {
    display: "inline-block",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    // height: "1000px",
  },
  socialMediaButton: {
    color: "#fff",
  },
}));

//SOURCE: https://stackoverflow.com/questions/17202548/wavy-shape-with-css

export const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Typography color="primary" className={classes.bold} variant="h6">
          Hello, my name is
        </Typography>
        <Typography variant="h2" className={classes.bold}>
          Chris Vouga.
        </Typography>
        <Typography
          variant="h2"
          color="textSecondary"
          className={classes.bold}
          gutterBottom
        >
          I build things for the web.
        </Typography>

        <Typography className={classes.bold} variant="h6">
          I a software engineer based the Phoenix Valley. My specialization is
          in web development.
        </Typography>
      </Container>
    </Box>
  );
};

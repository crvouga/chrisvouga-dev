import { makeStyles, withStyles, Card } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  cardImageContainer: {
    position: "relative",
    width: "100%",
    paddingTop: `${(1 / 2.35) * 100}%`,
  },
  cardImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
  },
}));

export const AboutCardImage = ({ src }: { src: string }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardImageContainer}>
      <img className={classes.cardImage} src={src} />
    </div>
  );
};

export const AboutCard = withStyles(() => ({
  root: {
    height: "100%",
  },
}))(Card);

import Card, { CardProps } from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
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

  card: {
    height: "100%",
  },
}));

export const AboutCardImage = ({ src, alt }: { src: string; alt: string }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardImageContainer}>
      <Image layout="fill" src={src} alt={alt} />
    </div>
  );
};

export const AboutCard = (props: CardProps) => {
  const classes = useStyles();
  return <Card className={classes.card} {...props} />;
};

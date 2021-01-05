import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";

const useStyles = makeStyles(() => ({
  root: {},
  media: {
    paddingTop: `${(9 / 16) * 100}%`,
    height: 0,
    // backgroundColor: "#efefefef",
    objectFit: "contain",
  },
}));

interface IEducationCardProps {
  schoolLogoSrc: string;
  schoolName: string;
  degreeName: string;
  schoolUrl: string;
}

export const EducationCard = (props: IEducationCardProps) => {
  const { schoolUrl, schoolLogoSrc, schoolName, degreeName } = props;
  const classes = useStyles();

  const handleClick = () => {
    window.location.href = schoolUrl;
  };

  return (
    <CardActionArea onClick={handleClick}>
      <Card className={classes.root}>
        <CardHeader title="Education" />
        <CardMedia className={classes.media} image={schoolLogoSrc} />
        <CardContent>
          <Typography variant="h5">{degreeName}</Typography>
          <Typography variant="h6" color="textSecondary">
            {schoolName}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SummaryCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Summary" />
      <CardMedia className={classes.media} image="/personal-logo-dark.svg" />

      <CardContent>
        <Typography variant="body1">
          Hello, my name is Chris Vouga. I'm a software developer based in the
          Phoenix Valley. My main area of focus is in web development. Being a
          Math major, I always enjoy learning about the theory behind
          programming concepts like functional programming, type systems, and
          software architecture.
        </Typography>
      </CardContent>
    </Card>
  );
};

export const SkillsCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Skills" />
      <CardContent>
        <Typography variant="body1"></Typography>
      </CardContent>
    </Card>
  );
};

export const About = () => {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>

      <Grid container spacing={2}>
        <Grid item md={4}>
          <SummaryCard />
        </Grid>
        <Grid item md={4}>
          <SkillsCard />
        </Grid>
        <Grid item md={4}>
          <EducationCard {...content.education} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

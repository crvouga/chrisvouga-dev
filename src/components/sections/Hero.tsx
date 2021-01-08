import { Box, Typography, useTheme, makeStyles } from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";
import { SocialMediaIconButton } from "../SocialMedia";

const useStyles = makeStyles(() => ({
  bold: {
    fontWeight: "bold",
  },
}));

export const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box paddingY={2}>
        <Typography color="primary" className={classes.bold} variant="h6">
          Hello, my name is
        </Typography>
        <Typography variant="h2" className={classes.bold}>
          Chris Vouga.
        </Typography>
        <Typography variant="h2" color="textSecondary" className={classes.bold}>
          I build things for the web.
        </Typography>
      </Box>
      <Box paddingY={2} maxWidth={theme.breakpoints.values.sm}>
        <Typography className={classes.bold} variant="h6">
          I a software engineer based the Phoenix Valley. My specialization is
          in web development.
        </Typography>
      </Box>

      <Box display="flex" paddingY={2}>
        {content.socialMedia.map((socialMedia) => (
          <SocialMediaIconButton
            key={socialMedia.url}
            name={socialMedia.name}
            url={socialMedia.url}
          />
        ))}
      </Box>
    </React.Fragment>
  );
};

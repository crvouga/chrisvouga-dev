import { Box, Grid, Typography, useTheme } from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";
import { SocialMediaIconButton } from "../SocialMedia";
import { Terminal } from "../Terminal";

// const useStyles = makeStyles((theme) => ({
//   logo: {
//     width: "100%",
//     maxWidth: theme.breakpoints.values.xs,
//   },
// }));

export const Hero = () => {
  // const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row" alignItems="center">
      <Grid item md={6}>
        <Box paddingY={2} fontWeight="bold">
          <Typography variant="h2">Chris Vouga.</Typography>
          <Typography variant="h2" color="textSecondary">
            I build things for the web.
          </Typography>
        </Box>
        <Box paddingY={2} maxWidth={theme.breakpoints.values.sm}>
          <Typography variant="h6">
            I am a software developer based in the Phoenix Valley. My main area
            of focus is in developing web applications.
          </Typography>
        </Box>

        <Box display="flex" paddingY={2}>
          {content.socialMedia.map((socialMedia) => (
            <SocialMediaIconButton
              name={socialMedia.name}
              url={socialMedia.url}
            />
          ))}
        </Box>
      </Grid>

      <Terminal />
      {/* <img width="100%" src="personal-logo-dark.svg" /> */}
    </Grid>
  );
};

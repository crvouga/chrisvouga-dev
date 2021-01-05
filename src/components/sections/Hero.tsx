import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  Hidden,
} from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";
import { SocialMediaIconButton } from "../SocialMedia";

export const Hero = () => {
  const theme = useTheme();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
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
              key={socialMedia.url}
              name={socialMedia.name}
              url={socialMedia.url}
            />
          ))}
        </Box>
      </Grid>

      <Hidden smDown>
        <Grid item md={6}>
          <Container maxWidth="xs">
            <img width="100%" src="personal-logo-dark.svg" />
          </Container>
        </Grid>
      </Hidden>
    </Grid>
  );
};

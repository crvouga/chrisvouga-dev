import { Box, Button, Typography, useTheme } from "@material-ui/core";
import React from "react";

export const Hero = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box paddingY={2} fontWeight="bold">
        <Typography variant="h2">Chris Vouga.</Typography>
        <Typography variant="h2" color="textSecondary">
          I build things for the web.
        </Typography>
      </Box>
      <Box paddingY={2} maxWidth={theme.breakpoints.values.sm}>
        <Typography variant="h6">
          I am a software developer based in the Phoenix Valley. My main area of
          focus is in developing web applications.
        </Typography>
      </Box>
      <Button size="large" variant="outlined" color="secondary">
        Get In Touch
      </Button>
    </Box>
  );
};
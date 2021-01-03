import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";

const useStyles = makeStyles(() => ({
  large: {
    fontSize: "2em",
  },
}));

export const Hero = () => {
  const classes = useStyles();
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

      <Box display="flex" paddingY={2}>
        <IconButton>
          <LinkedInIcon className={classes.large} />
        </IconButton>
        <IconButton>
          <GitHubIcon className={classes.large} />
        </IconButton>
      </Box>

      <Button size="large" variant="outlined" color="secondary">
        Get In Touch
      </Button>
    </Box>
  );
};

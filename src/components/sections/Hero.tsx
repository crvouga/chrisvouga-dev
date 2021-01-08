import { Box, Typography, useTheme } from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";
import { SocialMediaIconButton } from "../SocialMedia";

export const Hero = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box paddingY={2} fontWeight="bold">
        <Typography variant="h2">Chris Vouga.</Typography>
        <Typography variant="h2" color="textSecondary">
          I build things for the web.
        </Typography>
      </Box>
      <Box paddingY={2} maxWidth={theme.breakpoints.values.sm}>
        <Typography>
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

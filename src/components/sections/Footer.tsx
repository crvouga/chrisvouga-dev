import { Box, Container } from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";
import { SocialMediaIconButton } from "../SocialMedia";

export const Footer = () => {
  return (
    <Container disableGutters>
      <Box display="flex" paddingY={2}>
        {content.socialMedia.map((socialMedia) => (
          <SocialMediaIconButton
            name={socialMedia.name}
            url={socialMedia.url}
          />
        ))}
      </Box>
    </Container>
  );
};

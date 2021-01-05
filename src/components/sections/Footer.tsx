import { Box, Container, Typography, ButtonBase } from "@material-ui/core";
import React from "react";
import content from "../../../content/content.json";
import { SocialMediaIconButton } from "../SocialMedia";

export const Footer = () => {
  return (
    <Container disableGutters>
      <Box display="flex" justifyContent="center" paddingY={2}>
        {content.socialMedia.map((socialMedia) => (
          <SocialMediaIconButton
            key={socialMedia.url}
            name={socialMedia.name}
            url={socialMedia.url}
          />
        ))}
      </Box>
      <Box display="flex" justifyContent="center">
        <ButtonBase>
          <Box p={1}>
            <Typography color="textSecondary" align="center">
              Built by Chris Vouga
            </Typography>
          </Box>
        </ButtonBase>
      </Box>
    </Container>
  );
};

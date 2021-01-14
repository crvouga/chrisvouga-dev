import { Box, ButtonBase, Typography } from "@material-ui/core";
import React from "react";
import { SocialMediaIconButton } from "../../../components/social-media";
import { socialMedia } from "../../../config";
import { SectionContainer } from "../section";

export const Footer = () => {
  return (
    <SectionContainer>
      <Box display="flex" justifyContent="center" paddingY={2}>
        {socialMedia.map((socialMedia) => (
          <SocialMediaIconButton
            key={socialMedia.url}
            name={socialMedia.name}
            url={socialMedia.url}
          />
        ))}
      </Box>
      <Box display="flex" justifyContent="center">
        <Box p={1}>
          <Typography color="textSecondary" align="center">
            Built by Chris Vouga
          </Typography>
        </Box>
      </Box>
    </SectionContainer>
  );
};

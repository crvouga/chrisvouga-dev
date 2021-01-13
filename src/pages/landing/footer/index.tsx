import { Box, ButtonBase, Typography } from "@material-ui/core";
import React from "react";
import { SocialMediaIconButton } from "../../../components/social-media";
import { config } from "../../../config";
import { SectionContainer } from "../section";

export const Footer = () => {
  return (
    <SectionContainer>
      <Box display="flex" justifyContent="center" paddingY={2}>
        {config.socialMedia.map((socialMedia) => (
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
    </SectionContainer>
  );
};

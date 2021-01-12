import { Box, ButtonBase, Typography } from "@material-ui/core";
import React from "react";
import content from "../../../../content/content.json";
import { Section } from "../section";
import { SocialMediaIconButton } from "../../../components/social-media";

export const Footer = () => {
  return (
    <Section>
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
    </Section>
  );
};

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { SocialMediaIconButton } from "../../../components/social-media";
import { ISocialMedia } from "../../../data/social-media";
import { SectionContainer } from "../section";

export const Footer = ({ socialMedia }: { socialMedia: ISocialMedia[] }) => {
  return (
    <SectionContainer>
      <Box display="flex" justifyContent="center" paddingY={2}>
        {socialMedia.map(({ url, name }) => (
          <SocialMediaIconButton key={url} name={name} url={url} />
        ))}
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="subtitle1" color="textSecondary">
          Built by Chris Vouga
        </Typography>
      </Box>
    </SectionContainer>
  );
};

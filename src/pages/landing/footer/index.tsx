import { Box, Link, Typography } from "@material-ui/core";
import React from "react";
import { SocialMediaIconButton } from "../../../components/social-media";
import {
  SOCIAL_MEDIA,
  PERSONAL_SITE_REPOSITORY_URL,
} from "../../../shared/constants";
import { SectionContainer } from "../section";

export const Footer = () => {
  return (
    <SectionContainer>
      <Box display="flex" justifyContent="center" paddingY={2}>
        {SOCIAL_MEDIA.map(({ url, name }) => (
          <SocialMediaIconButton key={url} name={name} url={url} />
        ))}
      </Box>
      <Box display="flex" justifyContent="center">
        <Box p={1}>
          <Link href={PERSONAL_SITE_REPOSITORY_URL}>
            <Typography color="textSecondary" align="center">
              Built by Chris Vouga
            </Typography>
          </Link>
        </Box>
      </Box>
    </SectionContainer>
  );
};

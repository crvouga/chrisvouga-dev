import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import React from "react";
import { SocialMediaIconButton } from "../../../components/social-media";
import { SOCIAL_MEDIA } from "../../../personal-information";
import { SectionContainer } from "../section";
import { useLandingPageStaticProps } from "../static-props";

export const Footer = () => {
  const { personalWebsiteSourceCodeUrl } = useLandingPageStaticProps();

  return (
    <SectionContainer>
      <Box display="flex" justifyContent="center" paddingY={2}>
        {SOCIAL_MEDIA.map(({ url, name }) => (
          <SocialMediaIconButton key={url} name={name} url={url} />
        ))}
      </Box>
      <Box display="flex" justifyContent="center">
        <Box p={1}>
          <Link
            href={personalWebsiteSourceCodeUrl}
            color="textSecondary"
            align="center"
          >
            Built by Chris Vouga
          </Link>
        </Box>
      </Box>
    </SectionContainer>
  );
};

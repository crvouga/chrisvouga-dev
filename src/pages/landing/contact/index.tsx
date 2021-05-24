import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { SocialMediaButton } from "../../../components/social-media";
import { SectionContainer } from "../section";

export const Contact = ({
  socialMedia,
}: {
  socialMedia: { name: string; url: string }[];
}) => {
  return (
    <SectionContainer id="contact">
      <Typography align="center" variant="h3">
        <Box fontWeight="bo ld">Get In Touch</Box>
      </Typography>

      <Typography
        align="center"
        color="textSecondary"
        variant="h4"
        gutterBottom
      >
        You can find me here.
      </Typography>

      <Grid container justify="center">
        {socialMedia.map(({ name, url }) => (
          <Grid item key={url}>
            <Link href={url}>
              <SocialMediaButton name={name} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

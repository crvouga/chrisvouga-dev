import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import React from "react";

import { AboutCard, AboutCardImage } from "./card";
import { IAboutMe } from "../../../data/about-me";

export const LocationChip = ({ location }: { location: string }) => (
  <Link href={`http://google.com/search?q=${location}`}>
    <Box display="inline" p={1 / 2}>
      <Chip
        avatar={
          <Avatar>
            <Image layout="fill" alt="arizona flag" src="/arizona-flag.png" />
          </Avatar>
        }
        clickable
        size="small"
        label={location}
      />
    </Box>
  </Link>
);

export const SummaryCard = ({ aboutMe }: { aboutMe: IAboutMe }) => {
  return (
    <AboutCard>
      <CardHeader title="Overview" />

      <AboutCardImage src="/personal-logo-light.svg" alt="chris vouga logo" />

      <CardContent>
        <Typography component="div" variant="body1" color="textSecondary">
          <div dangerouslySetInnerHTML={{ __html: aboutMe.overview }} />
        </Typography>
      </CardContent>
    </AboutCard>
  );
};

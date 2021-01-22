import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  Chip,
  Link,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { usePersonalLogoSrc } from "../../../components/theme";
import { AboutCard, AboutCardImage } from "./card";

export const SummaryCard = () => {
  const personalLogoSrc = usePersonalLogoSrc();

  const location = "Phoenix Valley";

  const locationChip = (
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

  return (
    <AboutCard>
      <CardHeader title="Overview" />

      <AboutCardImage src={personalLogoSrc} alt="chris vouga logo" />

      <CardContent>
        <Typography variant="body1" color="textSecondary">
          Hello, my name is Chris Vouga. I'm a software developer based in the
          {locationChip}. I find it a lot of fun to create things that live on
          web. So it follows that most of skills and expertise reside in web
          development. A random fact about me is that I play the drums.
        </Typography>
      </CardContent>
    </AboutCard>
  );
};

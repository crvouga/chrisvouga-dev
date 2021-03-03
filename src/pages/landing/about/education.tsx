import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import React from "react";
import { IAboutMe } from "../../../data/about-me";
import { AboutCard, AboutCardImage } from "./card";

export const AsuChip = () => (
  <Link href="https://www.asu.edu/">
    <Box display="inline" p={1 / 2}>
      <Chip
        avatar={
          <Avatar>
            <Image
              layout="fill"
              alt="arizona state univeristy logo"
              src="/asu-logo-fork.png"
            />
          </Avatar>
        }
        clickable
        size="small"
        label="Arizona State Univeristy"
      />
    </Box>
  </Link>
);

export const EducationCard = ({ aboutMe }: { aboutMe: IAboutMe }) => {
  return (
    <AboutCard>
      <CardHeader title="Education" />

      <AboutCardImage src="/diploma.svg" alt="diploma" />

      <CardContent>
        <Typography component="div" variant="body1" color="textSecondary">
          <div dangerouslySetInnerHTML={{ __html: aboutMe.education }} />
        </Typography>
      </CardContent>
    </AboutCard>
  );
};

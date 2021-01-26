import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AboutCard, AboutCardImage } from "./card";

export const EducationCard = () => {
  const asuChip = (
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

  return (
    <AboutCard>
      <CardHeader title="Education" />

      <AboutCardImage src="/diploma.svg" alt="diploma" />

      <CardContent>
        <Typography component="div" variant="body1" color="textSecondary">
          I have achieved a Bachelor of Science degree in Mathematics and
          Statistics from {asuChip}. Being a math major, I've always enjoyed
          learning the theory behind software development such as type systems,
          architecture, and functional programming (which is origin of my logo).
        </Typography>
      </CardContent>
    </AboutCard>
  );
};

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";
import { CardImage } from "./card-image";

const ASU_URL = "https://www.asu.edu/";
export const EducationCard = () => {
  const asuChip = (
    <Link href={ASU_URL}>
      <Box display="inline" p={1 / 2}>
        <Chip
          avatar={<Avatar src="/asu-logo.png" />}
          clickable
          size="small"
          variant="outlined"
          label="Arizona State Univeristy"
        />
      </Box>
    </Link>
  );

  return (
    <Card>
      <CardHeader title="Education" />

      <CardImage src="/diploma.svg" />

      <CardContent>
        <Typography component="div" variant="body1">
          I have achieved a Bachelor of Science degree in Mathematics and
          Statistics from {asuChip}. My education has sharped my problem
          solving/analytical skills, and provided me with the ability and
          confidence to tackle hard problems that deal with abstact concepts and
          critical thinking.
        </Typography>
      </CardContent>
    </Card>
  );
};

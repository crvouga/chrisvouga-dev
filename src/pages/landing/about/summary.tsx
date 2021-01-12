import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { usePersonalLogoSrc } from "../../../theme";
import { CardImage } from "./card-image";

export const SummaryCard = () => {
  const personalLogoSrc = usePersonalLogoSrc();

  return (
    <Card>
      <CardHeader title="Summary" />

      <CardImage src={personalLogoSrc} />

      <CardContent>
        <Typography variant="body1" color="textSecondary">
          Howdy. My name is Chris Vouga. I'm a software engineer based in the
          Phoenix Valley. My main area of focus is in web development. Being a
          Math major, I've always enjoyed learning about the theory behind
          software engineering like functional programming, type systems, and
          software architecture.
        </Typography>
      </CardContent>
    </Card>
  );
};

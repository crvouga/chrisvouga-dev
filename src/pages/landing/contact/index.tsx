import { Box, Typography } from "@material-ui/core";
import React from "react";
import { SectionContainer } from "../section";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  return (
    <SectionContainer id="contact">
      <Typography align="center" variant="h4">
        <Box fontWeight="bold">Get In Touch</Box>
      </Typography>

      <Typography
        align="center"
        color="textSecondary"
        variant="h6"
        gutterBottom
      >
        Feel free to shoot me a message!
      </Typography>

      <ContactForm />
    </SectionContainer>
  );
};

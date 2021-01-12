import { Box, Typography, Container } from "@material-ui/core";
import React from "react";
import { Section } from "../../../components/section";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  return (
    <Section id="contact">
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
    </Section>
  );
};

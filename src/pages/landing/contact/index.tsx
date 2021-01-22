import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { SectionContainer } from "../section";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  return (
    <SectionContainer id="contact">
      <Typography align="center" variant="h3">
        <Box fontWeight="bold">Get In Touch</Box>
      </Typography>

      <Typography
        align="center"
        color="textSecondary"
        variant="h4"
        gutterBottom
      >
        Feel free to shoot me a message!
      </Typography>

      <ContactForm />
    </SectionContainer>
  );
};

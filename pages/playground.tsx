import React from "react";
import PersonalAttribution from "../src/components/personal/personal-attribution";
import Logo from "../src/components/personal/logo";
import { Container } from "@material-ui/core";

const Playground = () => {
  return (
    <Container maxWidth="md">
      <Logo />
      <PersonalAttribution />
    </Container>
  );
};

export default Playground;

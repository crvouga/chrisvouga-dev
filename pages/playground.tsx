import React from "react";
import PersonalAttribution from "../src/shared/personal-attribution";
import Logo from "../src/shared/logo";
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

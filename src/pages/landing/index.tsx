import { Box, Divider } from "@material-ui/core";
import React from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { NavigationBar } from "../../components/navigation";
import { Projects } from "./projects";

export const LandingPage = () => {
  return (
    <Box>
      <NavigationBar />

      <Hero />

      <Divider />

      <About />

      <Divider />

      <Projects />

      <Divider />

      <Contact />

      <Divider />

      <Footer />
    </Box>
  );
};
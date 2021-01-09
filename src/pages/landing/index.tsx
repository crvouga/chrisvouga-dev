import { Box } from "@material-ui/core";
import React from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { NavigationBar } from "./navigation";
import { Projects } from "./projects";

export const LandingPage = () => {
  return (
    <Box>
      <NavigationBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
};

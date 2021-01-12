import { Box, Divider } from "@material-ui/core";
import React from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { NavigationBar } from "../../components/navigation";
import { Projects } from "./projects";
import { SECTION_ORDER, Sections } from "../../components/section";

export const LandingPage = () => {
  return (
    <Box>
      <NavigationBar />

      <Hero />

      {SECTION_ORDER.map((section) => {
        switch (section) {
          case Sections.About:
            return <About />;
          case Sections.Contact:
            return <Contact />;
          case Sections.Projects:
            return <Projects />;
        }
      })}

      <Footer />
    </Box>
  );
};

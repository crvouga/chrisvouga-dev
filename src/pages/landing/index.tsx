import { Box } from "@material-ui/core";
import React from "react";
import { NavigationBar } from "./navigation";
import { Sections, SECTION_ORDER } from "./section";
import { About } from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Projects } from "./projects";

const renderSection = (section: Sections) => {
  switch (section) {
    case Sections.About:
      return <About />;
    case Sections.Contact:
      return <Contact />;
    case Sections.Projects:
      return <Projects />;
  }
};

export const LandingPage = () => {
  return (
    <Box>
      <NavigationBar />

      <Hero />

      {SECTION_ORDER.map((section) => {
        <React.Fragment key={section}>{renderSection(section)}</React.Fragment>;
      })}

      <Footer />
    </Box>
  );
};

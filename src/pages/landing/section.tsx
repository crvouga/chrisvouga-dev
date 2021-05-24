import Box, { BoxProps } from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import InfoIcon from "@material-ui/icons/Info";
import SendIcon from "@material-ui/icons/Send";
import WebIcon from "@material-ui/icons/Web";
import React from "react";

export enum Sections {
  About = "About",
  Projects = "Projects",
  Contact = "Contact",
}

export const SECTION_TO_URL: { [section in Sections]: string } = {
  [Sections.About]: "/#about",
  [Sections.Contact]: "/#contact",
  [Sections.Projects]: "/#projects",
};

export const SECTION_TO_NAME: { [section in Sections]: string } = {
  [Sections.About]: "About",
  [Sections.Contact]: "Contact",
  [Sections.Projects]: "Projects",
};

export const SECTION_ORDER = [
  Sections.About,
  Sections.Projects,
  Sections.Contact,
];

export const SectionIcon = ({ section }: { section: Sections }) => {
  switch (section) {
    case Sections.About:
      return <InfoIcon />;
    case Sections.Contact:
      return <SendIcon />;
    case Sections.Projects:
      return <WebIcon />;
  }
};

export const SectionContainer = ({
  children,
  ...props
}: React.PropsWithChildren<BoxProps>) => {
  return (
    <Container maxWidth="lg" disableGutters>
      <Box component="section" paddingY={4} {...props}>
        {children}
      </Box>
    </Container>
  );
};

export const Section = ({
  title,
  body,
}: {
  title: React.ReactNode;
  body: React.ReactNode;
}) => {
  return (
    <Box component="section" paddingY={4}>
      <Container maxWidth="lg">
        <React.Fragment>{title}</React.Fragment>
      </Container>

      <Container maxWidth="lg" disableGutters>
        <React.Fragment>{body}</React.Fragment>
      </Container>
    </Box>
  );
};

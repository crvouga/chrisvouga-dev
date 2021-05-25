import Box, { BoxProps } from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import InfoIcon from "@material-ui/icons/Info";
import SendIcon from "@material-ui/icons/Send";
import WebIcon from "@material-ui/icons/Web";
import React from "react";

export enum ISections {
  About = "About",
  Projects = "Projects",
  Contact = "Contact",
}

export const SECTION_TO_ID: { [section in ISections]: string } = {
  [ISections.About]: "about",
  [ISections.Contact]: "contact",
  [ISections.Projects]: "projects",
};

export const SECTION_TO_URL: { [section in ISections]: string } = {
  [ISections.About]: "/#about",
  [ISections.Contact]: "/#contact",
  [ISections.Projects]: "/#projects",
};

export const SECTION_TO_NAME: { [section in ISections]: string } = {
  [ISections.About]: "About",
  [ISections.Contact]: "Contact",
  [ISections.Projects]: "Projects",
};

export const SECTION_ORDER = [
  ISections.Projects,
  ISections.About,
  ISections.Contact,
];

export const SectionIcon = ({ section }: { section: ISections }) => {
  switch (section) {
    case ISections.About:
      return <InfoIcon />;
    case ISections.Contact:
      return <SendIcon />;
    case ISections.Projects:
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

type ISectionProps = {
  title: React.ReactNode;
  body: React.ReactNode;
};
export const Section = ({ title, body }: ISectionProps) => {
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

export const Sections = ({
  sections,
}: {
  sections: { [section in ISections]: ISectionProps };
}) => {
  return (
    <>
      {SECTION_ORDER.map((section) => (
        <div key={section} id={SECTION_TO_ID[section]}>
          <Section {...sections[section]} />
        </div>
      ))}
    </>
  );
};

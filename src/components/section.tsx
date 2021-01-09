import { Box, BoxProps, Container } from "@material-ui/core";

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
  [Sections.Projects]: "Work",
};

export const SECTION_ORDER = [
  Sections.About,
  Sections.Contact,
  Sections.Projects,
];

export const Section = ({
  children,
  ...props
}: React.PropsWithChildren<BoxProps>) => {
  return (
    <Container maxWidth="lg">
      <Box component="section" paddingY={6} {...props}>
        {children}
      </Box>
    </Container>
  );
};

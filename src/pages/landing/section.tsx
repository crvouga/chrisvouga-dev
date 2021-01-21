import { Box, BoxProps, Container } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import SendIcon from "@material-ui/icons/Send";
import WebIcon from "@material-ui/icons/Web";
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
    <Container maxWidth="lg">
      <Box component="section" paddingY={10} {...props}>
        {children}
      </Box>
    </Container>
  );
};

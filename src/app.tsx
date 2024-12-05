import { Container, Stack } from "@mui/joy";
import { AboutMeSection } from "./sections/about-me";
import { ContactSection } from "./sections/contact";
import { FooterSection } from "./sections/footer";
import { HeadingSection } from "./sections/heading";
import { SideProjectsSection } from "./sections/side-projects";
import { WorkSection } from "./sections/work";
import { WorkProjectsSection } from "./sections/work-projects";

export function App() {
  return (
    <Container maxWidth="lg">
      <Stack direction="column" gap={6} py={8} overflow="hidden">
        <HeadingSection />
        <WorkSection />
        <WorkProjectsSection />
        <SideProjectsSection />
        <AboutMeSection />
        <ContactSection />
        <FooterSection />
      </Stack>
    </Container>
  );
}

import { Code, Email, InfoOutlined, Phone, Web } from "@mui/icons-material";
import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardOverflow,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/joy";
import Player from "react-player";
import { ClientOnly } from "vite-react-ssg/single-page";
import { Project, Work, data, topicToImageSrc, topicToName } from "../data";
import { ContactLink } from "./contact-link";
import myTheme from "./theme";

export function App() {
  return (
    <Container maxWidth="lg">
      <Stack direction="column" gap={6} py={8}>
        <Heading />
        <WorkSection />
        <WorkProjectsSection />
        <SideProjectsSection />
        <AboutMeSection />
        <ContactSection />
      </Stack>
    </Container>
  );
}

function Heading() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Stack flex={1}>
        <Typography level="h1" fontWeight={900}>
          Chris Vouga
        </Typography>
        <Typography level="h1" color="primary" fontWeight={900}>
          Software Developer
        </Typography>
      </Stack>
      <Stack direction="row">
        <GitHubButton />

        <LinkedInButton />
      </Stack>
    </Stack>
  );
}

function WorkSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Work" />

      <Grid container spacing={3}>
        {data.work.map((work, index) => (
          <Grid key={index} xs={12} sm={6} md={4}>
            <WorkCard work={work} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function WorkProjectsSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Work Projects" />

      <Grid container spacing={3}>
        {data.workProjects.map((project, index) => (
          <Grid key={index} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function SideProjectsSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Side Projects" />

      <Grid container spacing={3}>
        {data.sideProjects.map((project, index) => (
          <Grid key={index} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


function AboutMeSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="A little about me..." />
      <Typography
        level="body-md"
        sx={{
          maxWidth: myTheme.breakpoints.values.md,
        }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: data.aboutMe
          }}
        />
      </Typography>
    </Box>
  );
}

function ContactSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Let's get in touch!" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: myTheme.breakpoints.values.sm,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ContactLink
            icon={<Email />}
            href={`mailTo:${data.emailAddress}`}
            hrefLabel={`Email`}
            label="Email"
            value={data.emailAddress}
          />

          <ContactLink
            icon={<Phone />}
            href={`tel:${data.phoneNumber}`}
            hrefLabel={`Call`}
            label="Phone"
            value={formatPhoneNumber(data.phoneNumber)}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <GitHubButton />
          <LinkedInButton />
        </Box>
      </Box>
    </Box>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <Typography level="h2" fontWeight={900} sx={{ pb: 3, textAlign: "left" }}>
      {title}
    </Typography>
  );
}

function WorkCard({ work }: { work: Work }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardOverflow
        component="a"
        target="_blank"
        rel="noreferrer noopener"
        href={work.companyUrl}
        sx={{
          position: "relative",
          background: work.companyImageBackgroundColor,
        }}
      >
        <AspectRatio ratio={16 / 9}>
          {work.companyImage && (
            <img
              src={work.companyImage}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          )}
        </AspectRatio>
      </CardOverflow>

      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          component="a"
          level="title-sm"
          target={"_blank"}
          rel={"noreferrer noopener"}
          href={work.companyUrl}
          sx={{ mb: 1, textDecoration: "underline" }}
        >
          {work.companyName}
        </Typography>

        <Typography sx={{ display: "flex", items: "center" }} level="title-sm">
          {work.jobTitle}
        </Typography>

        <Typography
          sx={{ display: "flex", items: "center", mb: 2 }}
          level="title-sm"
        >
          {`${work.startDate.getFullYear()} - ${work.endDate === "Present" ? "Present" : work.endDate.getFullYear()
            }`}
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          {work.jobDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardOverflow
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AspectRatio ratio={16 / 9}>
          {project.youTubeVideoId ? (
            <ClientOnly>
              {() => (
                <Player
                  controls
                  loop
                  muted
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  width="100%"
                  height="100%"
                  light={project.imageSrc}
                  url={toYouTubeVideoUrl({
                    youTubeVideoId: project.youTubeVideoId!,
                  })}
                />
              )}
            </ClientOnly>
          ) : project.liveUrl || project.codeUrl ? (
            <Box
              component="a"
              target={"_blank"}
              rel={"noreferrer noopener"}
              href={project.liveUrl ?? project.codeUrl}
            >
              <img
                src={project.imageSrc}
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          ) : (
            <img
              src={project.imageSrc}
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            />
          )}
        </AspectRatio>
      </CardOverflow>

      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {project.liveUrl || project.codeUrl ? (
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href={project.liveUrl ?? project.codeUrl}
            level="title-md"
            sx={{ mb: 1, textDecoration: "underline" }}
          >
            {project.title}
          </Typography>
        ) : (
          <Typography level="title-md" sx={{ mb: 1 }}>
            {project.title}
          </Typography>
        )}
        <Typography level="body-md" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            paddingY: 1,
          }}
        >
          {project.topics.sort().map((topic) => {
            const src = topicToImageSrc[topic];
            return (
              <Chip
                key={topic}
                size="sm"
                startDecorator={src ? <Avatar src={src} /> : undefined}
                variant="outlined"
              >
                {topicToName[topic]}
              </Chip>
            );
          })}
        </Box>

        <Box sx={{ flex: 1 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            color: "warning.main",
            mb: -1,
          }}
        >
          {!Boolean(project.liveUrl) && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <InfoOutlined sx={{ width: 18, height: 18, marginRight: 1 }} />
              <Typography level="body-xs">
                Project is not deployed anymore
              </Typography>
            </Box>
          )}
          {!Boolean(project.codeUrl) && (
            <Stack direction="row" gap={1}>
              <InfoOutlined sx={{ width: 18, height: 18, }} />
              <Typography level="body-xs">Source code is private</Typography>
            </Stack>
          )}
        </Box>
      </CardContent>
      <CardActions>
        <Button
          target="_blank"
          rel="noreferrer noopener"
          href={project.liveUrl}
          startDecorator={<Web />}
          variant="soft"
          disabled={!Boolean(project.liveUrl)}
        >
          Live Demo
        </Button>

        <Button
          disabled={!Boolean(project.codeUrl)}
          variant="plain"
          target="_blank"
          rel="noreferrer noopener"
          href={project.codeUrl}
          startDecorator={<Code />}
        >
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
}

function formatPhoneNumber(s: string): string {
  return [
    s[0],
    s[1],
    s[2],
    ".",
    s[3],
    s[4],
    s[5],
    ".",
    s[6],
    s[7],
    s[8],
    s[9],
  ].join("");
}

function toYouTubeVideoUrl({ youTubeVideoId }: { youTubeVideoId: string }) {
  return `https://www.youtube.com/watch?v=${youTubeVideoId}`;
}

import { GitHub, LinkedIn } from "@mui/icons-material";

function GitHubButton() {
  return (
    <Button
      size="lg"
      target="_blank"
      rel="noreferrer noopener"
      // variant="contained"
      fullWidth
      href={data.Github.url}
      startDecorator={<GitHub />}
    >
      GitHub
    </Button>
  );
}

function LinkedInButton() {
  return (
    <Button
      fullWidth
      size="lg"
      target="_blank"
      rel="noreferrer noopener"
      href={data.Linkedin.url}
      startDecorator={<LinkedIn />}
    >
      LinkedIn
    </Button>
  );
}

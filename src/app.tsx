import { Code, Email, InfoOutlined, Phone, Web } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Player from "react-player";
import { Project, Work, data, topicToImageSrc, topicToName } from "../data";
import { ContactLink } from "./contact-link";
import { GitHubButton, LinkedInButton } from "./socials";
import theme from "./theme";
import { ClientOnly } from "vite-react-ssg/single-page";

export function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{ paddingY: 8, gap: 8, display: "flex", flexDirection: "column" }}
    >
      <Header />
      <WorkSection />
      <WorkProjectsSection />
      <SideProjectsSection />
      <AboutMeSection />
      <ContactSection />
    </Container>
  );
}

function Header() {
  return (
    <Box
      sx={{
        flex: 1,
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          flex: 1,
          zIndex: 2,
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" fontWeight={600}>
          Chris Vouga
        </Typography>
        <Typography variant="h3" color="primary.main" fontWeight={600}>
          Software Developer
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <GitHubButton />
        <LinkedInButton />
      </Box>
    </Box>
  );
}

function WorkSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Work" />

      <Grid
        container
        spacing={2}
        sx={{ mb: 6 }}
        alignItems="start"
        justifyContent="start"
      >
        {data.work.map((work, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
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
          <Grid key={index} item xs={12} sm={6} md={4}>
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
          <Grid key={index} item xs={12} sm={6} md={4}>
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
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: theme.breakpoints.values.md,
        }}
        dangerouslySetInnerHTML={{
          __html: data.aboutMe,
        }}
      />
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
          maxWidth: theme.breakpoints.values.sm,
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
    <Typography fontWeight={600} variant="h3" sx={{ pb: 3 }} align="left">
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
      <Box
        component={"a"}
        target={"_blank"}
        rel={"noreferrer noopener"}
        href={work.companyUrl}
        sx={{
          paddingTop: `${(9 / 16) * 100}%`,
          position: "relative",
          background: work.companyImageBackgroundColor,
        }}
      >
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
      </Box>

      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          component="a"
          variant="h5"
          color="text.primary"
          target={"_blank"}
          rel={"noreferrer noopener"}
          href={work.companyUrl}
          sx={{ mb: 1, textDecoration: "underline" }}
        >
          {work.companyName}
        </Typography>

        <Typography
          sx={{ display: "flex", items: "center" }}
          variant="subtitle1"
        >
          {work.jobTitle}
        </Typography>

        <Typography
          sx={{ display: "flex", items: "center", mb: 2 }}
          color="text.secondary"
          variant="subtitle2"
        >
          {`${work.startDate.getFullYear()} - ${work.endDate === "Present" ? "Present" : work.endDate.getFullYear()
            }`}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 2 }}
          dangerouslySetInnerHTML={{
            __html: work.jobDescription,
          }}
        />
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
      <Box
        sx={{
          paddingTop: `${(9 / 16) * 100}%`,
          position: "relative",
          overflow: "hidden",
        }}
      >
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
            <img src={project.imageSrc} width="100%" height="100%" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
          </Box>
        ) : (
          <img src={project.imageSrc} width="100%" height="100%" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
        )}
      </Box>

      <Divider />

      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {project.liveUrl || project.codeUrl ? (
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href={project.liveUrl ?? project.codeUrl}
            variant="h5"
            color="text.primary"
            sx={{ mb: 1, textDecoration: "underline" }}
          >
            {project.title}
          </Typography>
        ) : (
          <Typography variant="h5" color="text.primary" sx={{ mb: 1 }}>
            {project.title}
          </Typography>
        )}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 2 }}
          dangerouslySetInnerHTML={{
            __html: project.description,
          }}
        ></Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            paddingY: 1,
          }}
        // variant="outlined"
        >
          {project.topics.sort().map((topic) => {
            const src = topicToImageSrc[topic];
            return (
              <Chip
                size="small"
                key={topic}
                avatar={src ? <Avatar variant="square" src={src} /> : undefined}
                label={topicToName[topic]}
                variant="outlined"
              />
            );
          })}
        </Box>

        <Box sx={{ flex: 1 }} />
      </CardContent>
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
              paddingX: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <InfoOutlined sx={{ width: 18, height: 18, marginRight: 1 }} />
            <Typography variant="caption">
              Project is not deployed anymore
            </Typography>
          </Box>
        )}
        {!Boolean(project.codeUrl) && (
          <Box
            sx={{
              paddingX: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <InfoOutlined sx={{ width: 18, height: 18, marginRight: 1 }} />
            <Typography variant="caption">Source code is private</Typography>
          </Box>
        )}
      </Box>
      <CardActions>
        <Button
          // target={"_blank"}
          // rel={"noreferrer noopener"}
          href={project.liveUrl}
          size="large"
          startIcon={<Web />}
          disabled={!Boolean(project.liveUrl)}
        >
          Live Demo
        </Button>

        <Button
          disabled={!Boolean(project.codeUrl)}
          // target={"_blank"}
          // rel={"noreferrer noopener"}
          href={project.codeUrl}
          size="large"
          startIcon={<Code />}
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

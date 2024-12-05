import {
  Code,
  Email,
  GitHub,
  InfoOutlined,
  LinkedIn,
  Phone,
  Web,
} from "@mui/icons-material";
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
import { useState } from "react";
import Player from "react-player";
import { ClientOnly } from "vite-react-ssg/single-page";
import {
  Project,
  Work,
  data,
  projectToLinkHref,
  topicToImageSrc,
  topicToName,
} from "../content";
import { ContactLink } from "./contact-link";
import theme from "./theme";

const MAX_CARD_COUNT = 9;

export function App() {
  return (
    <Container maxWidth="lg">
      <Stack direction="column" gap={6} py={8} overflow="hidden">
        <Heading />
        <WorkSection />
        <WorkProjectsSection />
        <SideProjectsSection />
        <AboutMeSection />
        <ContactSection />
        <Box sx={{ width: "100%", py: 8 }} />
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

        <HeadingSoftwareDeveloper />
      </Stack>

      <Stack
        direction={{
          sm: "column",
          md: "row",
        }}
        alignItems={{
          sm: "flex-start",
          md: "center",
        }}
        justifyContent={{
          sm: "flex-start",
          md: "flex-end",
        }}
        gap={2}
      >
        <ContactLink
          icon={<Email />}
          href={`mailTo:${data.emailAddress}`}
          hrefLabel={`Email`}
          label="Email"
          value={data.emailAddress}
        />

        <Stack direction="row" gap={2}>
          <GitHubButton />

          <LinkedInButton />
        </Stack>
      </Stack>
    </Stack>
  );
}

function HeadingSoftwareDeveloper() {
  const start = theme.palette.primary[300];
  const stop = theme.palette.primary[500];
  return (
    <Typography
      level="h2"
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${start}, ${stop})`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        paddingBottom: "0.5rem",
        fontWeight: 1000,
      }}
    >
      Software Developer
    </Typography>
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
  const [state, setState] = useState<"contracted" | "expanded">("contracted");
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Side Projects" />

      <Grid container spacing={3}>
        {data.sideProjects
          .slice(0, state === "expanded" ? Infinity : MAX_CARD_COUNT)
          .map((project, index) => (
            <Grid key={index} xs={12} sm={6} md={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 3,
        }}
      >
        {state === "contracted" && (
          <Button
            variant="solid"
            size="lg"
            onClick={() => setState("expanded")}
          >
            See more
          </Button>
        )}

        {state === "expanded" && (
          <Button
            variant="solid"
            size="lg"
            onClick={() => setState("contracted")}
          >
            See less
          </Button>
        )}
      </Box>
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
          maxWidth: theme.breakpoints.values.md,
        }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: data.aboutMe,
          }}
        />
      </Typography>
    </Box>
  );
}

function Contacts() {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: theme.breakpoints.values.sm,
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
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

        {false && (
          <ContactLink
            icon={<Phone />}
            href={`tel:${data.phoneNumber}`}
            hrefLabel={`Call`}
            label="Phone"
            value={formatPhoneNumber(data.phoneNumber)}
          />
        )}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <GitHubButton />

        <LinkedInButton />
      </Box>
    </Box>
  );
}

function ContactSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Let's get in touch!" />
      <Contacts />
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
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          component="a"
          level="h3"
          target="_blank"
          rel="noreferrer noopener"
          href={work.infoUrl}
          sx={{
            mb: 1,
            textDecoration:
              typeof work.infoUrl === "string" ? "underline" : undefined,
          }}
        >
          {work.name}
        </Typography>

        <Typography sx={{ display: "flex", items: "center" }} level="title-sm">
          {work.jobTitle}
        </Typography>

        <Typography
          sx={{ display: "flex", items: "center", mb: 2 }}
          level="title-sm"
        >
          {`${work.yearStart} - ${work.yearEnd}`}
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          {work.jobDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const linkHref = projectToLinkHref(project);
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
                  light={project.imageSrc ?? undefined}
                  url={toYouTubeVideoUrl({
                    youTubeVideoId: project.youTubeVideoId!,
                  })}
                />
              )}
            </ClientOnly>
          ) : (
            <Box
              {...(linkHref
                ? {
                    component: "a",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    href: linkHref,
                  }
                : {})}
            >
              <Box
                {...(project.imageSrc
                  ? {
                      component: "img",
                      width: "100%",
                      height: "100%",
                      src: project.imageSrc,
                      sx: {
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                      },
                    }
                  : {
                      sx: {
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        background: `linear-gradient(to right bottom, #2196f3, #8e24aa)`,
                      },
                    })}
              />
            </Box>
          )}
        </AspectRatio>
      </CardOverflow>

      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          level="h3"
          {...(linkHref
            ? {
                component: "a",
                target: "_blank",
                href: linkHref,
                sx: { mb: 1, textDecoration: "underline" },
              }
            : {
                sx: { mb: 1 },
              })}
        >
          {project.title}
        </Typography>
        <Typography level="body-md" sx={{ mb: 2 }}>
          <span
            dangerouslySetInnerHTML={{
              __html: project.description,
            }}
          />
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
                startDecorator={<Avatar src={src} />}
                variant="outlined"
              >
                {topicToName[topic]}
              </Chip>
            );
          })}
        </Box>
      </CardContent>
      <Box flex={1} />
      <Stack direction="column" gap={1}>
        {project.deployment.t === "not-deployed-anymore" && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <InfoOutlined
              color="warning"
              sx={{ width: 18, height: 18, marginRight: 1 }}
            />
            <Typography color="warning" level="body-xs">
              Project is no longer deployed
            </Typography>
          </Box>
        )}

        {project.deployment.t === "private" && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <InfoOutlined
              color="warning"
              sx={{ width: 18, height: 18, marginRight: 1 }}
            />
            <Typography color="warning" level="body-xs">
              Deployment is private
            </Typography>
          </Box>
        )}

        {project.code.t === "private" && (
          <Stack direction="row" gap={1}>
            <InfoOutlined color="warning" sx={{ width: 18, height: 18 }} />
            <Typography color="warning" level="body-xs">
              Source code is private
            </Typography>
          </Stack>
        )}
      </Stack>
      <CardActions>
        <Button
          component="a"
          target="_blank"
          rel="noreferrer noopener"
          href={
            project.deployment.t === "public"
              ? project.deployment.url
              : undefined
          }
          startDecorator={<Web />}
          variant="soft"
          disabled={project.deployment.t !== "public"}
        >
          Deployment
        </Button>

        <Button
          component="a"
          disabled={project.code.t !== "public"}
          variant="plain"
          target="_blank"
          rel="noreferrer noopener"
          href={project.code.t === "public" ? project.code.url : undefined}
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

function GitHubButton() {
  return (
    <Button
      target="_blank"
      rel="noreferrer noopener"
      variant="soft"
      size="lg"
      component="a"
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
      component="a"
      size="lg"
      target="_blank"
      rel="noreferrer noopener"
      href={data.Linkedin.url}
      variant="soft"
      startDecorator={<LinkedIn />}
    >
      LinkedIn
    </Button>
  );
}

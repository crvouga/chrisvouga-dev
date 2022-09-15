import { Code, Email, GitHub, LinkedIn, Phone, Web } from "@mui/icons-material";
import {
  alpha,
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
  List,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import Player from "react-player";
import { data, Topic, topicToImageSrc } from "../data";
import { ContactLink } from "../src/ContactLink";

export default function Index() {
  const theme = useTheme();
  // const [openedProjectUrl, setOpenedProjectUrl] = useState("");
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${alpha(
            theme.palette.background.paper,
            0
          )}, ${alpha("#212121", 1)} 100%)`,
          backgroundRepeat: "repeat-x",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ display: "flex", width: "100%", paddingY: 8 }}
        >
          <Box
            sx={{
              flex: 1,
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2" fontWeight={600}>
              Chris Vouga
            </Typography>
            <Typography
              variant="h3"
              color="primary.main"
              fontWeight={600}
              sx={{
                marginBottom: 4,
              }}
            >
              Web Developer
            </Typography>
            <SocialLinks />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ paddingY: 2, marginY: 4 }}>
        <Typography
          fontWeight={600}
          variant="h3"
          sx={{ marginBottom: 2 }}
          align="center"
        >
          Projects
        </Typography>

        <Grid container spacing={2} sx={{ marginBottom: 4 }}>
          {data.projects.map((project) => (
            <Grid key={project.url} item xs={12} sm={6} md={4}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  // onClick={() => setOpenedProjectUrl(project.url)}
                  sx={{
                    paddingTop: `${(9 / 16) * 100}%`,
                    position: "relative",
                  }}
                >
                  {project.youTubeVideoId ? (
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
                        youTubeVideoId: project.youTubeVideoId,
                      })}
                    />
                  ) : (
                    <Image
                      src={project.imageSrc}
                      layout="fill"
                      objectFit="fill"
                    />
                  )}
                </Box>

                <Divider />
                <CardContent sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color="text.primary"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.topics.sort().map((topic) => {
                      const src = topicToImageSrc[topic];
                      return (
                        <Chip
                          size="small"
                          key={topic}
                          avatar={
                            src ? (
                              <Avatar variant="square" src={src} />
                            ) : undefined
                          }
                          label={topic}
                          variant="outlined"
                        />
                      );
                    })}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                    href={project.url}
                    size="large"
                    startIcon={<Web />}
                  >
                    Live
                  </Button>

                  <Tooltip
                    title={
                      !Boolean(project.codeUrl) ? "" : "Source code is private"
                    }
                  >
                    <Button
                      disabled={!Boolean(project.codeUrl)}
                      target={"_blank"}
                      rel={"noreferrer noopener"}
                      href={project.codeUrl}
                      size="large"
                      startIcon={<Code />}
                    >
                      Code
                    </Button>
                  </Tooltip>
                </CardActions>
              </Card>

              {/* <Dialog
                open={openedProjectUrl === project.url}
                onClose={() => setOpenedProjectUrl("")}
                PaperProps={{ sx: { width: "100vw", maxWidth: "720px" } }}
              >
                <Box
                  sx={{
                    width: "100%",
                    paddingTop: `${(9 / 16) * 100}%`,
                    position: "relative",
                  }}
                >
                  {project.videoSrc ? (
                    <video
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                      src={project.videoSrc}
                      autoPlay
                      controls
                      width="100%"
                    />
                  ) : (
                    <Image
                      src={project.imageSrc}
                      layout="fill"
                      objectFit="fill"
                    />
                  )}
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ marginBottom: 1 }}>
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ marginBottom: 1 }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ display: "flex" }}>
                    <Button
                      target={"_blank"}
                      rel={"noreferrer noopener"}
                      href={project.url}
                      size="large"
                      startIcon={<Web />}
                      sx={{ marginRight: 1 }}
                    >
                      Deployment
                    </Button>

                    <Button
                      disabled={!Boolean(project.codeUrl)}
                      target={"_blank"}
                      rel={"noreferrer noopener"}
                      href={project.codeUrl}
                      size="large"
                      startIcon={<Code />}
                    >
                      Source Code
                    </Button>
                  </Box>
                </Box>
              </Dialog> */}
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", marginBottom: 4 }}>
          <List>
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
          </List>
          <Box
            sx={{
              flex: 1,
              justifyContent: "flex-end",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SocialLinks />
          </Box>
        </Box>
      </Container>
    </>
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

function Video({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);

  return (
    <video
      ref={ref}
      style={{
        cursor: "pointer",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      preload="metadata"
      src={src}
      loop
      autoPlay
      controls
      width="100%"
    />
  );
}

function SocialLinks() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Button
        size="large"
        target={"_blank"}
        rel={"noreferrer noopener"}
        variant="contained"
        fullWidth
        href={data.Github.url}
        startIcon={<GitHub />}
        sx={{ marginBottom: 2 }}
      >
        GitHub
      </Button>
      <Button
        fullWidth
        size="large"
        variant="contained"
        target={"_blank"}
        rel={"noreferrer noopener"}
        href={data.Linkedin.url}
        startIcon={<LinkedIn />}
      >
        LinkedIn
      </Button>
    </Box>
  );
}

function toYouTubeVideoUrl({ youTubeVideoId }: { youTubeVideoId: string }) {
  return `https://www.youtube.com/watch?v=${youTubeVideoId}`;
}

function Topic({ topic }: { topic: Topic }) {
  const src = topicToImageSrc[topic];

  if (!src) {
    return <></>;
  }

  return <Chip avatar={<Avatar src={src} />} label={topic} />;
}

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
  alpha,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Player from "react-player";
import { data, topicToImageSrc, topicToName } from "../data";
import { ContactLink } from "../src/ContactLink";

export default function Index() {
  const theme = useTheme();
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
        }}>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", width: "100%", paddingY: 8 }}>
          <Box
            sx={{
              flex: 1,
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            <Typography variant="h2" fontWeight={600}>
              Chris Vouga
            </Typography>
            <Typography
              variant="h3"
              color="primary.main"
              fontWeight={600}
              sx={{
                marginBottom: 4,
              }}>
              Web Developer
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <GitHubButton />
              <LinkedInButton />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ paddingY: 2, marginY: 4 }}>
        <Typography
          fontWeight={600}
          variant="h3"
          sx={{ marginBottom: 3 }}
          align="center">
          Side Projects
        </Typography>

        <Grid container spacing={2} sx={{ marginBottom: 4 }}>
          {data.projects.map((project) => (
            <Grid key={project.liveUrl} item xs={12} sm={6} md={4}>
              <Card
                // variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Box
                  sx={{
                    paddingTop: `${(9 / 16) * 100}%`,
                    position: "relative",
                  }}>
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
                <CardContent
                  sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    sx={{ marginBottom: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ marginBottom: 2 }}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: project.description,
                      }}></p>
                  </Typography>
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
                          avatar={
                            src ? (
                              <Avatar variant="square" src={src} />
                            ) : undefined
                          }
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
                    marginBottom: -1,
                  }}>
                  {!Boolean(project.liveUrl) && (
                    <Box
                      sx={{
                        paddingX: 2,
                        display: "flex",
                        alignItems: "center",
                      }}>
                      <InfoOutlined
                        sx={{ width: 18, height: 18, marginRight: 1 }}
                      />
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
                      }}>
                      <InfoOutlined
                        sx={{ width: 18, height: 18, marginRight: 1 }}
                      />
                      <Typography variant="caption">
                        Source code is private
                      </Typography>
                    </Box>
                  )}
                </Box>
                <CardActions>
                  <Button
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                    href={project.liveUrl}
                    size="large"
                    fullWidth
                    startIcon={<Web />}
                    disabled={!Boolean(project.liveUrl)}>
                    Live
                  </Button>

                  <Button
                    disabled={!Boolean(project.codeUrl)}
                    target={"_blank"}
                    fullWidth
                    rel={"noreferrer noopener"}
                    href={project.codeUrl}
                    size="large"
                    startIcon={<Code />}>
                    Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Container disableGutters maxWidth="sm" sx={{ marginTop: 6 }}>
          <Card>
            <CardContent sx={{ padding: 4 }}>
              <Typography
                variant="h4"
                // align="center"
                sx={{ marginBottom: 1 }}>
                A little about me...
              </Typography>

              <Typography
                variant="body1"
                // align="center"
                color="text.secondary">
                <p dangerouslySetInnerHTML={{ __html: data.aboutMe }}></p>
              </Typography>
            </CardContent>
          </Card>
        </Container>

        <Container disableGutters maxWidth="xs" sx={{ marginTop: 6 }}>
          <Card>
            <CardContent sx={{ padding: 4 }}>
              <Typography variant="h4" sx={{ marginBottom: 1 }}>
                Let's get in touch!
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
                  <GitHubButton />
                  <LinkedInButton />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>

        <Box sx={{ marginTop: 6 }}></Box>
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

function GitHubButton() {
  return (
    <Button
      size="large"
      target={"_blank"}
      rel={"noreferrer noopener"}
      variant="contained"
      fullWidth
      href={data.Github.url}
      startIcon={<GitHub />}>
      GitHub
    </Button>
  );
}

function LinkedInButton() {
  return (
    <Button
      fullWidth
      size="large"
      variant="contained"
      target={"_blank"}
      rel={"noreferrer noopener"}
      href={data.Linkedin.url}
      startIcon={<LinkedIn />}>
      LinkedIn
    </Button>
  );
}

function toYouTubeVideoUrl({ youTubeVideoId }: { youTubeVideoId: string }) {
  return `https://www.youtube.com/watch?v=${youTubeVideoId}`;
}

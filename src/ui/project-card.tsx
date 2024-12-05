import { Code, InfoOutlined, Web } from "@mui/icons-material";
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
  Stack,
  Typography,
} from "@mui/joy";
import Player from "react-player";

import {
  Project,
  projectToLinkHref,
  topicToImageSrc,
  topicToName,
} from "../../content";

export function ProjectCard({ project }: { project: Project }) {
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
              light={project.imageSrc[0]}
              url={toYouTubeVideoUrl({
                youTubeVideoId: project.youTubeVideoId!,
              })}
            />
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
                {...(project.imageSrc[0]
                  ? {
                      component: "img",
                      width: "100%",
                      height: "100%",
                      alt: project.imageAlt,
                      src: project.imageSrc[0],
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

function toYouTubeVideoUrl({ youTubeVideoId }: { youTubeVideoId: string }) {
  return `https://www.youtube.com/watch?v=${youTubeVideoId}`;
}

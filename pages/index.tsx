import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import {
  alpha,
  Box, Container,
  Grid,
  IconButton,
  List,
  Tooltip,
  Typography,
  useTheme
} from "@mui/material";
import data from "../data.json";
import { ContactLink } from "../src/ContactLink";
import ProjectCard from "../src/ProjectCard";

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
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ display: "flex", width: "100%", paddingY: 8 }}
        >
          <Box sx={{ flex: 1, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Typography variant="h2" fontWeight={600}>
              Chris Vouga
            </Typography>
            <Typography
              variant="h3"
              color="primary.main"
              fontWeight={600}
              gutterBottom
            >
              Web Developer.
            </Typography>
            <SocialLinks />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ paddingY: 2, marginY: 4 }}>
        <Typography fontWeight={600} variant="h3" sx={{ marginBottom: 2 }} align="center">
          Projects
        </Typography>

        <Grid container spacing={2} sx={{ marginBottom: 4 }}>
          {data.projects.map((project) => (
            <Grid key={project.url} item xs={12} sm={6} md={4}>
              <ProjectCard {...project} />
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
              value={data.phoneNumber}
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

function SocialLinks() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Tooltip title="Open Github">
        <IconButton
          target={"_blank"}
          rel={"noreferrer noopener"}
          href={data.Github.url}
        >
          <GitHub sx={{ fontSize: "3rem" }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Open LinkedIn">
        <IconButton
          target={"_blank"}
          rel={"noreferrer noopener"}
          href={data.Linkedin.url}
        >
          <LinkedIn sx={{ fontSize: "3rem" }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

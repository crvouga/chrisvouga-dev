import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  Tooltip,
  Typography,
} from "@mui/material";
import data from "../data.json";
import { ContactLink } from "../src/ContactLink";
import ProjectCard from "../src/ProjectCard";
import Typed from "react-typed";

function SocialLinks() {
  return (
    <>
      <Tooltip title="Open Github">
        <IconButton
          target={"_blank"}
          rel={"noreferrer noopener"}
          href={data.Github.url}
        >
          <GitHub />
        </IconButton>
      </Tooltip>

      <Tooltip title="Open LinkedIn">
        <IconButton
          target={"_blank"}
          rel={"noreferrer noopener"}
          href={data.Linkedin.url}
        >
          <LinkedIn />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default function Index() {
  return (
    <Container maxWidth="md" sx={{ paddingY: 2, marginY: 4 }}>
      <Box sx={{ display: "flex", width: "100%", marginBottom: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" fontWeight={600}>
            Chris Vouga
          </Typography>
          <Typography variant="h4" color="primary.main" fontWeight={600}>
            <Typed
              strings={["Web", "Web Developer", "Web Developer."]}
              typeSpeed={70}
            />
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SocialLinks />
        </Box>
      </Box>

      <Typography
        color="text.secondary"
        fontWeight={600}
        variant="h5"
        gutterBottom
      >
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
  );
}

import { Code, Email, GitHub, LinkedIn, Phone, Web } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  Tooltip,
  Typography,
  useTheme
} from "@mui/material";
import data from "../data.json";
import { ContactLink } from "../src/ContactLink";
import ProjectScreenshot from "../src/ProjectScreenshot";

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
              sx={{
                marginBottom: 4
              }}
            >
              Web Developer
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
              <Card
                variant="outlined"
                sx={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <Tooltip title="Open deployment">
                  <CardActionArea
                    href={project.url}
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                  >
                    <Box sx={{ paddingTop: `${(9 / 16) * 100}%`, position: "relative" }}>
                      <ProjectScreenshot url={project.url} />
                    </Box>
                  </CardActionArea>
                </Tooltip>
                <Divider />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight={600} color="text.primary">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>

                  <Button
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                    href={project.url}
                    size="small"
                    startIcon={<Web />}
                  >
                    Deployment
                  </Button>

                  <Button
                    disabled={!Boolean(project.codeUrl)}
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                    href={project.codeUrl}
                    size="small"
                    startIcon={<Code />}
                  >
                    Source Code
                  </Button>
                </CardActions>
              </Card>
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
    <Box sx={{ display: 'flex', flexDirection: "column" }}>
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

import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import {
  alpha,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import data from "../data.json";
import { ContactLink } from "../src/ContactLink";
import ProjectCard from "../src/ProjectCard";
import Typed from "react-typed";
import ProjectScreenshot from "../src/ProjectScreenshot";

// const images = [
//   {
//     group: [
//       {
//         cover:
//           "https://assets.maccarianagency.com/screenshots/the-front/img1.png",
//         coverDark:
//           "https://assets.maccarianagency.com/screenshots/the-front/img1--dark.png",
//       },
//       {
//         cover:
//           "https://assets.maccarianagency.com/screenshots/the-front/img4.png",
//         coverDark:
//           "https://assets.maccarianagency.com/screenshots/the-front/img4--dark.png",
//       },
//     ],
//   },
//   {
//     group: [
//       {
//         cover:
//           "https://assets.maccarianagency.com/screenshots/the-front/img13.png",
//         coverDark:
//           "https://assets.maccarianagency.com/screenshots/the-front/img13--dark.png",
//       },
//       {
//         cover:
//           "https://assets.maccarianagency.com/screenshots/the-front/img10.png",
//         coverDark:
//           "https://assets.maccarianagency.com/screenshots/the-front/img10--dark.png",
//       },
//       {
//         cover:
//           "https://assets.maccarianagency.com/screenshots/the-front/img7.png",
//         coverDark:
//           "https://assets.maccarianagency.com/screenshots/the-front/img7--dark.png",
//       },
//     ],
//   },
//   {
//     group: [
//       {
//         cover:
//           "https://assets.maccarianagency.com/screenshots/the-front/img6.png",
//         coverDark:
//           "https://assets.maccarianagency.com/screenshots/the-front/img6--dark.png",
//       },
//       {
//         cover:
//           "https://assets.maccarianagency.com/screenshots/the-front/img24.png",
//         coverDark:
//           "https://assets.maccarianagency.com/screenshots/the-front/img24--dark.png",
//       },
//       {
//         cover:
//           "https://assets.maccarianagency.com/screenshots/the-front/img17.png",
//         coverDark:
//           "https://assets.maccarianagency.com/screenshots/the-front/img17--dark.png",
//       },
//       {
//         cover:
//           "https://assets.maccarianagency.com/screenshots/the-front/img12.png",
//         coverDark:
//           "https://assets.maccarianagency.com/screenshots/the-front/img12--dark.png",
//       },
//     ],
//   },
// ];

const images = [
  {
    group: [data.projects[0], data.projects[1]],
  },
  {
    group: [data.projects[2], data.projects[3], data.projects[4]],
  },
  {
    group: [data.projects[5], data.projects[6], data.projects[7]],
  },
];

console.log(JSON.stringify(images));

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

const alternate = {
  main: "#212121",
};
export default function Index() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${alpha(
            theme.palette.background.paper,
            0
          )}, ${alpha(alternate.main, 1)} 100%)`,
          backgroundRepeat: "repeat-x",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ display: "flex", width: "100%", paddingY: 8 }}
        >
          <Box sx={{ flex: 1, zIndex: 2 }}>
            <Typography variant="h3" fontWeight={600}>
              Chris Vouga
            </Typography>
            <Typography
              variant="h4"
              color="primary.main"
              fontWeight={600}
              gutterBottom
            >
              <Typed
                strings={["Web", "Web Developer", "Web Developer."]}
                typeSpeed={70}
              />
            </Typography>
            <SocialLinks />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ paddingY: 2, marginY: 4 }}>
        <Typography
          // color="text.secondary"
          fontWeight={600}
          variant="h4"
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
    </>
  );
}

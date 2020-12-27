import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { GetStaticProps } from "next";
import React from "react";
import ProjectCard, { IProjectCardProps } from "../src/components/ProjectCard";
import writeScreenshot from "../src/services/screenshot";
import { urlToFilename } from "../src/services/url-filename";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5">chris vouga</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function Projects({
  projectCardProps,
}: {
  projectCardProps: IProjectCardProps[];
}) {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={1}>
        {projectCardProps.map((props) => (
          <Grid key={props.liveSiteURL} item xs>
            <ProjectCard {...props} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

interface IIndexProps {
  number: number;
  projectCardProps: IProjectCardProps[];
}

const PROJECT_CARD_PROPS = [
  {
    title: "Pickflix",
    liveSiteURL: "https://www.pickflix.io/",
    sourceCodeURL: "https://github.com/crvouga/pickflix",
  },
  {
    title: "Connect Four",
    liveSiteURL: "https://connect-four-in-a-row.web.app/",
    sourceCodeURL: "https://github.com/crvouga/connect-four",
  },
];

const urlToImagePath = ({ liveSiteURL }: { liveSiteURL: string }) =>
  `public/${urlToFilename(liveSiteURL)}.png`;

const urlToImageSrc = ({ liveSiteURL }: { liveSiteURL: string }) =>
  `/${urlToFilename(liveSiteURL)}.png`;

export const getStaticProps: GetStaticProps = async () => {
  await Promise.all(
    PROJECT_CARD_PROPS.map(async ({ liveSiteURL }) => {
      await writeScreenshot({
        url: liveSiteURL,
        timeout: 2000,
        path: urlToImagePath({ liveSiteURL }),
      });
    })
  );

  const projectCardProps: IProjectCardProps[] = PROJECT_CARD_PROPS.map(
    ({ liveSiteURL, sourceCodeURL, title }) => {
      return {
        liveSiteURL,
        sourceCodeURL,
        title,
        src: urlToImageSrc({ liveSiteURL }),
      };
    }
  );

  return {
    props: {
      projectCardProps,
    },
  };
};

export default function Index(props: IIndexProps) {
  const { projectCardProps } = props;
  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="md">
        <Box paddingY={2}>
          <Projects projectCardProps={projectCardProps} />
        </Box>
      </Container>
    </React.Fragment>
  );
}

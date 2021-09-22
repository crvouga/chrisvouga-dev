import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Meta } from "../../components/meta";
import { dataStore } from "../../data-access";
import { ThemeTypeSelect } from "../../theme";
import { Logo } from "./logo";
import { ProjectCardGrid } from "./projects";
import { SocialMediaButtons } from "./social-media";

export const getLandingPageProps = async () => {
  const content = await dataStore.getContent();
  return {
    content,
    projectsResponse: await dataStore.projects.getAll(content.projectIds),
  };
};

const Gutter = () => {
  return <Box width="100%" p={2} />;
};

type Unpromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

export type ILandingPageProps = Unpromise<
  ReturnType<typeof getLandingPageProps>
>;

export const LandingPage = ({
  content,
  projectsResponse,
}: ILandingPageProps) => {
  return (
    <>
      <Meta {...content.meta} />

      <Gutter />

      <Container maxWidth="sm">
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          paddingBottom={1}
        >
          <Logo
            style={{
              backgroundColor: "#efefef",
              width: "120px",
              height: "120px",
            }}
          />
        </Box>

        <Typography align="center" variant="h2" component="h1">
          {content.title}
        </Typography>

        <Typography
          align="center"
          variant="h3"
          color="primary"
          gutterBottom
          component="h2"
        >
          {content.subtitle}
        </Typography>

        <Typography component="div" color="textSecondary">
          <div dangerouslySetInnerHTML={{ __html: content.aboutMe }} />
        </Typography>

        <Gutter />

        <Typography variant="h3" align="center" gutterBottom>
          Socials
        </Typography>

        <SocialMediaButtons socialMedia={content.socialMedia} />

        <Gutter />
      </Container>

      <Container maxWidth="md">
        {projectsResponse.data && (
          <>
            <Typography variant="h3" align="center" gutterBottom>
              Projects
            </Typography>
            <ProjectCardGrid projects={projectsResponse.data} />
          </>
        )}

        <Gutter />

        <Typography variant="h4" align="center" gutterBottom>
          Theme
        </Typography>

        <Container
          maxWidth="xs"
          disableGutters
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box marginBottom={2}>
            <ThemeTypeSelect />
          </Box>
        </Container>

        <Gutter />
      </Container>
    </>
  );
};

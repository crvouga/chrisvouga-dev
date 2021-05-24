import Typography from "@material-ui/core/Typography";
import React from "react";
import { Meta } from "../../components/meta";
import { IAboutMe } from "../../data-access/about-me";
import { IHero } from "../../data-access/hero";
import { IMeta } from "../../data-access/meta";
import { IProject } from "../../data-access/projects";
import { ISocialMedia } from "../../data-access/social-media";
import { AboutCardGrid } from "./about/about-card-grid";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { NavigationBar } from "./navigation";
import { ProjectCardGrid } from "./projects";
import { Section } from "./section";

export type ILandingPageData = {
  projects: IProject[];
  topTopics: string[];
  socialMedia: ISocialMedia[];
  aboutMe: IAboutMe;
  hero: IHero;
  meta: IMeta;
};

export type ILandingPageProps = {
  data: ILandingPageData;
};

export const LandingPage = ({ data }: ILandingPageProps) => {
  return (
    <React.Fragment>
      <Meta meta={data.meta} />

      <NavigationBar />

      <Hero hero={data.hero} />

      <Section
        title={
          <Typography variant="h3" gutterBottom>
            Some of the Things I've Built
          </Typography>
        }
        body={<ProjectCardGrid projects={data.projects} />}
      />

      <Section
        title={
          <Typography variant="h3" gutterBottom>
            A Little About Me
          </Typography>
        }
        body={
          <AboutCardGrid aboutMe={data.aboutMe} topTopics={data.topTopics} />
        }
      />

      <Contact socialMedia={data.socialMedia} />
    </React.Fragment>
  );
};

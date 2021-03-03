import React from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { NavigationBar } from "./navigation";
import { Projects } from "./projects";
import { IProject } from "../../data/projects";
import { ISocialMedia } from "../../data/social-media";
import { IAboutMe } from "../../data/about-me";
import { IHero } from "../../data/hero";

export type ILandingPageData = {
  projects: IProject[];
  topTopics: string[];
  socialMedia: ISocialMedia[];
  aboutMe: IAboutMe;
  hero: IHero;
};

export type ILandingPageProps = {
  data: ILandingPageData;
};

export const LandingPage = ({ data }: ILandingPageProps) => {
  return (
    <React.Fragment>
      <NavigationBar />

      <Hero hero={data.hero} />

      <About aboutMe={data.aboutMe} topTopics={data.topTopics} />

      <Projects projects={data.projects} />

      <Contact />

      <Footer socialMedia={data.socialMedia} />
    </React.Fragment>
  );
};

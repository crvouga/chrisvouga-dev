import { AboutMeDataStore, IAboutMeDataStore } from "./about-me";
import { HeroDataStore, IHeroDataStore } from "./hero";
import { IProjectDataStore, ProjectDataStore } from "./projects";
import { ISocialMediaDataStore, SocialMediaDataStore } from "./social-media";

export type IDataStore = {
  projects: IProjectDataStore;
  socialMedia: ISocialMediaDataStore;
  aboutMe: IAboutMeDataStore;
  hero: IHeroDataStore;
};

export const DataStore = (): IDataStore => {
  return {
    socialMedia: SocialMediaDataStore(),
    projects: ProjectDataStore(),
    aboutMe: AboutMeDataStore(),
    hero: HeroDataStore(),
  };
};

export const dataStore = DataStore();

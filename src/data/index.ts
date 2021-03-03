import { AboutMeDataStore, IAboutMeDataStore } from "./about-me";
import { HeroDataStore, IHeroDataStore } from "./hero";
import { IMetaDataStore, MetaDataStore } from "./meta";
import { IProjectDataStore, ProjectDataStore } from "./projects";
import { ISocialMediaDataStore, SocialMediaDataStore } from "./social-media";

export type IDataStore = {
  projects: IProjectDataStore;
  socialMedia: ISocialMediaDataStore;
  aboutMe: IAboutMeDataStore;
  hero: IHeroDataStore;
  meta: IMetaDataStore;
};

export const DataStore = (): IDataStore => {
  return {
    socialMedia: SocialMediaDataStore(),
    projects: ProjectDataStore(),
    aboutMe: AboutMeDataStore(),
    hero: HeroDataStore(),
    meta: MetaDataStore(),
  };
};

export const dataStore = DataStore();

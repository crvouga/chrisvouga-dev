import { AboutMeDataStore, IAboutMeDataStore } from "./about-me";
import { IMetaDataStore, MetaDataStore } from "./meta";
import { IProjectDataStore, ProjectDataStore } from "./projects";
import { ISocialMediaDataStore, SocialMediaDataStore } from "./social-media";

export type IDataStore = {
  projects: IProjectDataStore;
  socialMedia: ISocialMediaDataStore;
  aboutMe: IAboutMeDataStore;
  meta: IMetaDataStore;
};

export const DataStore = (): IDataStore => {
  return {
    socialMedia: SocialMediaDataStore(),
    projects: ProjectDataStore(),
    aboutMe: AboutMeDataStore(),
    meta: MetaDataStore(),
  };
};

export const dataStore = DataStore();

import aboutMe from "../../data/about-me";

export type IAboutMe = {
  education: string;
  overview: string;
  skills: string;
};

export type IAboutMeDataStore = {
  get: () => Promise<IAboutMe>;
};

export const AboutMeDataStore = (): IAboutMeDataStore => {
  return {
    async get() {
      return aboutMe;
    },
  };
};

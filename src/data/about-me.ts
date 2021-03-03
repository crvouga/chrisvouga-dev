import education from "raw-loader!../../content/education.md";
import overview from "raw-loader!../../content/overview.md";
import skills from "raw-loader!../../content/skills.md";

console.log(education);

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
      return {
        education,
        overview,
        skills,
      };
    },
  };
};

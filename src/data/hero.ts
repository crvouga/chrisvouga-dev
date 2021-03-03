import hero from "../../content/hero.json";

export type IHero = {
  greeting: string;
  main: string;
  secondary: string;
  callToAction: {
    name: string;
    link: string;
  };
  mainImage: string;
};

export type IHeroDataStore = {
  get: () => Promise<IHero>;
};

export const HeroDataStore = (): IHeroDataStore => {
  return {
    async get() {
      return hero;
    },
  };
};

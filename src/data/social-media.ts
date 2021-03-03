import data from "../../content/social-media.json";

export type ISocialMedia = {
  name: string;
  url: string;
};

export type ISocialMediaDataStore = {
  getAll: () => Promise<ISocialMedia[]>;
};

export const SocialMediaDataStore = (): ISocialMediaDataStore => {
  return {
    async getAll() {
      return data;
    },
  };
};

import meta from "../../content/meta.json";

export type IMeta = {
  author: string;
  title: string;
  description: string;
  siteUrl: string;
  imageUrl: string;
  iconUrl: string;
  keywords: string[];
};

export type IMetaDataStore = {
  get: () => Promise<IMeta>;
};

export const MetaDataStore = (): IMetaDataStore => {
  return {
    async get() {
      return meta;
    },
  };
};

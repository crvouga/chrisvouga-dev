export const getSiteUrl = () => {
  const basePath = process.env.NEXT_PUBLIC_SITE_URL;
  if (basePath) {
    return basePath;
  }
  throw new Error("process.env.NEXT_PUBLIC_SITE_URL is undefined");
};

export type ISocialMedia = {
  name: string;
  url: string;
};

export const SOCIAL_MEDIA: ISocialMedia[] = [
  {
    name: "Github",
    url: "https://github.com/crvouga",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/chris-vouga",
  },
];

export type IPersonalProject = {
  ownerName: string;
  repositoryName: string;
};

export const PERSONAL_WEBSITE_REPOSITORY_NAME = "personal-website";

export const PERSONAL_PROJECTS: IPersonalProject[] = [
  {
    ownerName: "crvouga",
    repositoryName: "pickflix",
  },
  {
    ownerName: "crvouga",
    repositoryName: "personal-website",
  },
  {
    ownerName: "crvouga",
    repositoryName: "bug-tracker",
  },
  {
    ownerName: "crvouga",
    repositoryName: "connect-four",
  },
  {
    ownerName: "crvouga",
    repositoryName: "match-three",
  },
  {
    ownerName: "crvouga",
    repositoryName: "simon-says",
  },
];

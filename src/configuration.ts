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

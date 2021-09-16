import fs from "fs";
import path from "path";
import { dataStore } from "../../data-access";

//why?: https://developers.google.com/search/docs/advanced/robots/intro

const FILE_NAME = "robots.txt";

const toRobotsTxt = (siteUrl: string) => {
  return {
    Sitemap: path.join(siteUrl, "api", "sitemap"),
    "User-agent": "*",
    Allow: "/*",
    Disallow: "/api/*",
  };
};

const objectToString = <T>(object: T) => {
  return Object.entries(object)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
};

export const generateRobotsTxt = async () => {
  const content = await dataStore.getContent();

  const robotTxt = toRobotsTxt(content.meta.siteUrl);

  fs.writeFileSync(path.join("public", FILE_NAME), objectToString(robotTxt));
};

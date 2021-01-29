import fs from "fs";
import path from "path";
import { DOMAIN } from "../../personal-information";

//why?: https://developers.google.com/search/docs/advanced/robots/intro

const FILE_NAME = "robots.txt";

const ROBOTS_TEXT = {
  Sitemap: `${DOMAIN}/api/sitemap`,
  "User-agent": "*",
  Allow: "/*",
  Disallow: "/api/*",
};

const objectToString = <T>(object: T) => {
  return Object.entries(object)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
};

export const generateRobotsTxt = async () => {
  fs.writeFileSync(path.join("public", FILE_NAME), objectToString(ROBOTS_TEXT));
};

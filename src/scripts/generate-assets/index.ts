import dotenv from "dotenv";
import { generatePERSONAL_PROJECTScreenshots } from "./generate-project-screenshots";
import { generateRobotsTxt } from "./generate-robots-txt";

dotenv.config();

export const generateAssets = async () => {
  await generateRobotsTxt();
  await generatePERSONAL_PROJECTScreenshots();
};

generateAssets();

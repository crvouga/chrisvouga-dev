import dotenv from "dotenv";
import { generateAllProjectScreenshots } from "./generate-project-screenshots";
import { generateRobotsTxt } from "./generate-robots-txt";

dotenv.config();

export const generateAssets = async () => {
  await generateRobotsTxt();
  await generateAllProjectScreenshots();
};

generateAssets();

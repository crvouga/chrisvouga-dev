import dotenv from "dotenv";
import { generateRobotsTxt } from "./generate-robots-txt";

dotenv.config();

export const generateAssets = async () => {
  await generateRobotsTxt();
};

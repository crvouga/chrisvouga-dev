import puppeteer from "puppeteer";
import { PROJECTS } from "../personal-information";
import { getGithubRepository } from "../services/github";
import { delay, encodeUrl } from "../utility";

const generateProjectScreenshots = async () => {
  const browser = await puppeteer.launch();

  const generateScreenshot = async (params: {
    ownerName: string;
    repositoryName: string;
  }) => {
    const response = await getGithubRepository(params);

    const liveSiteURL = response.homepage;

    if (liveSiteURL) {
      const page = await browser.newPage();

      await page.goto(liveSiteURL);

      await delay(10000);

      await page.screenshot({ path: `public/${encodeUrl(liveSiteURL)}.png` });
    }
  };

  await Promise.all(PROJECTS.map(generateScreenshot));

  await browser.close();
};

generateProjectScreenshots();

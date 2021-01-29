import puppeteer from "puppeteer";
import { PERSONAL_PROJECTS } from "../../configuration";
import { getGithubRepository } from "../../services/github";
import { delay, encodeUrl } from "../../utility";

const generateSingleProjectScreenshot = async (
  browser: puppeteer.Browser,
  params: {
    ownerName: string;
    repositoryName: string;
  }
) => {
  const response = await getGithubRepository(params);

  const liveSiteURL = response.homepage;

  if (liveSiteURL) {
    const page = await browser.newPage();

    await page.goto(liveSiteURL);

    await delay(10000);

    await page.screenshot({ path: `public/${encodeUrl(liveSiteURL)}.png` });
  }
};

export const generateAllProjectScreenshots = async () => {
  const browser = await puppeteer.launch();

  await Promise.all(
    PERSONAL_PROJECTS.map((project) =>
      generateSingleProjectScreenshot(browser, project)
    )
  );

  await browser.close();
};

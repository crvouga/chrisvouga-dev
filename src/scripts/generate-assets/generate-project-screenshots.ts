import puppeteer from "puppeteer";
import { PROJECTS } from "../../personal-information";
import { getGithubRepository } from "../../services/github";
import { delay, encodeUrl } from "../../utility";

const generateScreenshot = async (
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

export const generateProjectScreenshots = async () => {
  const browser = await puppeteer.launch();

  await Promise.all(
    PROJECTS.map((project) => generateScreenshot(browser, project))
  );

  await browser.close();
};

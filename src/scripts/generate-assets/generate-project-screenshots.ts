import puppeteer from "puppeteer";
import { IProject } from "../../data/projects";
import { getGithubRepository } from "../../services/github";
import { delay, encodeUrl } from "../../utility";
import { dataStore } from "../../data";

const generateSingleProjectScreenshot = async (
  browser: puppeteer.Browser,
  project: IProject
) => {
  const response = await getGithubRepository(project.projectId);

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

  const projects = await dataStore.projects.getAll();

  await Promise.all(
    projects.map((project) => generateSingleProjectScreenshot(browser, project))
  );

  await browser.close();
};
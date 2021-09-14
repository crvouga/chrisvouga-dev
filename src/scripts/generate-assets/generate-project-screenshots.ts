import puppeteer from "puppeteer";
import { IProject, toProjectScreenShootSrc } from "../../data-access/projects";
import { getGithubRepository } from "../../services/github";
import { delay } from "../../utility";
import { dataStore } from "../../data-access";
import path from "path";

const generateSingleProjectScreenshot = async (
  browser: puppeteer.Browser,
  project: IProject
) => {
  const response = await getGithubRepository(project.projectId.github);

  const liveSiteURL = response.homepage;

  if (liveSiteURL) {
    const page = await browser.newPage();

    await page.goto(liveSiteURL);

    await delay(10000);

    await page.screenshot({
      path: path.join("public", toProjectScreenShootSrc({ liveSiteURL })),
    });
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

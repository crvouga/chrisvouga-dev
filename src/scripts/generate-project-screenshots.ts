import { Octokit } from "@octokit/rest";
import puppeteer from "puppeteer";
import { getGithubPersonalAccessToken, projects } from "../config";
import { delay, encodeUrl } from "../utility";

export const octokit = new Octokit({
  userAgent: "personal-website",
  auth: getGithubPersonalAccessToken(),
});

const generateProjectScreenshots = async () => {
  const browser = await puppeteer.launch();

  const generateScreenshot = async ({
    ownerName,
    repositoryName,
  }: {
    ownerName: string;
    repositoryName: string;
  }) => {
    const response = await octokit.repos.get({
      owner: ownerName,
      repo: repositoryName,
    });

    const liveSiteURL = response.data.homepage;

    if (liveSiteURL) {
      const page = await browser.newPage();

      await page.goto(liveSiteURL);

      await delay(10000);

      await page.screenshot({ path: `public/${encodeUrl(liveSiteURL)}.png` });
    }
  };

  await Promise.all(projects.map(generateScreenshot));

  await browser.close();
};

generateProjectScreenshots();

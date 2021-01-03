import content from "../../content/content.json";
import { githubAPI } from "./github";
import { urlToImagePath, writeScreenshot } from "./screenshot";

const generateScreenshot = async (project: { repositoryName: string }) => {
  const response = await githubAPI.repos.get({
    owner: "crvouga",
    repo: project.repositoryName,
  });

  const liveSiteURL = response.data.homepage || "";

  await writeScreenshot({
    url: liveSiteURL,
    timeout: 10000,
    path: urlToImagePath(liveSiteURL),
  });
};

const generateProjectScreenshots = async () => {
  await Promise.all(content.projects.map(generateScreenshot));
};

generateProjectScreenshots();

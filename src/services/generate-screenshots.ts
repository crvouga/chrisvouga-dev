import projects from "../../content/projects.json";
import { githubAPI } from "./github";
import { writeScreenshot, urlToImagePath } from "./screenshot";

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
  await Promise.all(projects.map(generateScreenshot));
};

generateProjectScreenshots();

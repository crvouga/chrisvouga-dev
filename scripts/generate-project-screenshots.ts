import content from "../content/content.json";
import { githubAPI } from "../src/services/github";

import { writeScreenshot } from "./screenshot";
import { encodeUrl } from "../src/utility";

const generateScreenshot = async ({
  ownerName,
  repositoryName,
}: {
  ownerName: string;
  repositoryName: string;
}) => {
  const response = await githubAPI.repos.get({
    owner: ownerName,
    repo: repositoryName,
  });

  const liveSiteURL = response.data.homepage;

  if (liveSiteURL) {
    const filePath = `public/${encodeUrl(liveSiteURL)}.png`;

    await writeScreenshot({
      url: liveSiteURL,
      timeout: 10000,
      path: filePath,
    });
  }
};

const generateProjectScreenshots = async () => {
  await Promise.all(content.projects.map(generateScreenshot));
};

generateProjectScreenshots();

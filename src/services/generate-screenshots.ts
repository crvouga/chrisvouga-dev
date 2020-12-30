import { writeScreenshot, urlToImagePath } from "./screenshot";
import projects from "../../content/projects.json";

const generateProjectScreenshots = async () => {
  await Promise.all(
    projects.map(async ({ liveSiteURL }) => {
      await writeScreenshot({
        url: liveSiteURL,
        timeout: 10000,
        path: urlToImagePath(liveSiteURL),
      });
    })
  );
};

generateProjectScreenshots();

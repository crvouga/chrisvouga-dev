import { NextApiHandler } from "next";
import { castTargetUrl, validateTargetUrl } from "./targetUrl";
import { castTimeout, validateTimeout } from "./timeout";
import { createGetScreenshot } from "./screenshot.server-side";

export const screenshotHandler: NextApiHandler = async (req, res) => {
  const getScreenshot = await createGetScreenshot();

  const { targetUrl, timeout } = req.query;

  const validationErrors = [
    ...validateTimeout(timeout, { name: "'timeout' query param" }),
    ...validateTargetUrl(targetUrl, { name: "'targetUrl' query param" }),
  ];

  if (validationErrors.length > 0) {
    res.status(400).json({ errors: validationErrors });
    return;
  }

  const { image, errors } = await getScreenshot({
    timeout: castTimeout(timeout),
    targetUrl: castTargetUrl(targetUrl),
  });

  if (errors.length > 0) {
    res.status(400).json({ errors });
    return;
  }

  if (!image) {
    res.status(400).json({ errors: [{ message: "Something went wrong" }] });
    return;
  }

  res
    .writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": image.length,
    })
    .end(image);
};

import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

function castString(maybeString: any) {
  if (typeof maybeString === "string") {
    return maybeString;
  }
  throw new Error("failed to cast to string");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const url = castString(req.query.url);

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(url);

    const screenshotBuffer = await page.screenshot();

    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": screenshotBuffer.length,
    });

    res.end(screenshotBuffer);

    await browser.close();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
}

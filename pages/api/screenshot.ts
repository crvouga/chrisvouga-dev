import { NextApiHandler } from "next";
import puppeteer from "puppeteer";

import { delay } from "../../src/utility";

export const handler: NextApiHandler = async (req, res) => {
  const targetUrl = req.query.targetUrl;
  const timeout = Number(req.query.timeout) ?? 3000;

  if (!(typeof targetUrl === "string")) {
    res.status(400).json({
      message: "targetUrl query param required",
    });
    return;
  }

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(targetUrl, { waitUntil: "networkidle2" });

  await delay(timeout);

  const imageBuffer = await page.screenshot({
    type: "png",
  });

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": imageBuffer.length,
  });

  res.end(imageBuffer);
};

export default handler;

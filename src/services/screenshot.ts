import puppeteer from "puppeteer";
// import chromium from "chrome-aws-lambda";

export const encodeUrl = (url: string) => Buffer.from(url).toString("base64");

export const decodeUrl = (base64: string) =>
  Buffer.from(base64, "base64").toString("ascii");

export const urlToImagePath = (url: string) => `public/${encodeUrl(url)}.png`;
export const urlToImageSrc = (url: string) => `/${encodeUrl(url)}.png`;

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const writeScreenshot = async ({
  path,
  url,
  timeout,
}: {
  timeout: number;
  path: string;
  url: string;
}) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(url);

  await wait(timeout);

  await page.screenshot({ path });

  await browser.close();
};

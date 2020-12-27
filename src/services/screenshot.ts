import puppeteer from "puppeteer";

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default async function writeScreenshot({
  path,
  url,
  timeout,
}: {
  timeout: number;
  path: string;
  url: string;
}) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(url);

  await wait(timeout);

  await page.screenshot({ path });

  await browser.close();
}

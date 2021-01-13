// import puppeteer from "puppeteer";

export const writeScreenshot = async ({
  path,
  url,
  timeout,
}: {
  timeout: number;
  path: string;
  url: string;
}) => {
  console.log({
    path,
    url,
    timeout,
  });
  // const browser = await puppeteer.launch();

  // const page = await browser.newPage();

  // await page.goto(url);

  // await timeout(timeout);

  // await page.screenshot({ path });

  // await browser.close();
};

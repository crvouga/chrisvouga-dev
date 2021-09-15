import puppeteer from "puppeteer";
import { ITargetUrl } from "./targetUrl";
import { ITimeout } from "./timeout";

const setTimeoutPromise = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const createGetScreenshot = async () => {
  return async ({
    timeout,
    targetUrl,
  }: {
    timeout: ITimeout;
    targetUrl: ITargetUrl;
  }): Promise<{
    image?: Buffer | string | void;
    errors: {
      message: string;
    }[];
  }> => {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    try {
      const page = await browser.newPage();

      await page.goto(targetUrl, {
        waitUntil: "networkidle2",
      });

      await setTimeoutPromise(timeout);

      const image = await page.screenshot({
        type: "png",
      });

      return {
        image,
        errors: [],
      };
    } catch (error) {
      //@ts-ignore
      const message = error?.toString?.();

      return {
        errors: [{ message }],
      };
    } finally {
      await browser.close();
    }
  };
};

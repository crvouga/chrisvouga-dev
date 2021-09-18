import { SCREENSHOT_SERVICE_ROOT_URL } from "../../env";

export const getScreenshotSrc = async ({
  targetUrl,
  timeout,
}: {
  targetUrl: string;
  timeout: number;
}) => {
  try {
    const url =
      `${SCREENSHOT_SERVICE_ROOT_URL}/api/screenshot?url=${targetUrl}&timeout=${timeout}`;

    const response = await fetch(url);

    if (response.ok) {
      const blob = await response.blob();

      const src = URL.createObjectURL(blob);

      return {
        src,
      };
    }

    return {
      src: undefined,
    };
  } catch (errors) {
    return {
      src: undefined,
    };
  }
};

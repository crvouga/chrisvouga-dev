import { getScreenshotServiceRootUrl } from "../../env";

export const getScreenshotSrc = async ({
  targetUrl,
  timeout,
}: {
  targetUrl: string;
  timeout: number;
}) => {
  try {
    const url = `${getScreenshotServiceRootUrl()}/api/screenshot?url=${targetUrl}&timeout=${timeout}`;

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

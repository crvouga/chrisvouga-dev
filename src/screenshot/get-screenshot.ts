import { getScreenshotServiceRootUrl } from "../../dotenv";

export const getScreenshotSrc = async ({
  targetUrl,
  timeout = 0,
  imageType,
}: {
  imageType: string;
  targetUrl: string;
  timeout?: number;
}) => {
  try {
    const url = `${getScreenshotServiceRootUrl()}/api/screenshot?url=${targetUrl}&timeout=${timeout}&type=${imageType}`;

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
    console.error(errors);
    throw errors;
  }
};

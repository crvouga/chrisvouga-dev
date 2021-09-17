const ROOT = "https://crvouga-screenshot-service.herokuapp.com";
// const ROOT = "http://localhost:8000"; //

export const getScreenshotSrc = async ({
  targetUrl,
  timeout,
}: {
  targetUrl: string;
  timeout: number;
}) => {
  try {
    const url =
      `${ROOT}/api/screenshot?url=${targetUrl}&timeout=${timeout}.png`;

    const response = await fetch(url);

    const blob = await response.blob();

    const src = URL.createObjectURL(blob);

    return {
      src,
    };
  } catch (errors) {
    return {
      src: undefined,
    };
  }
};

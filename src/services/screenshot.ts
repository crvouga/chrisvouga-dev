const ROOT = "https://crvouga-screenshot-service.herokuapp.com";

export const getScreenshotSrc = async ({
  targetUrl,
  timeout,
}: {
  targetUrl: string;
  timeout: number;
}) => {
  const apiEndpoint =
    `${ROOT}/api/screenshot?url=${targetUrl}&timeout=${timeout}`;

  const response = await fetch(apiEndpoint);

  const blob = await response.blob();

  const src = URL.createObjectURL(blob);

  return src;
};

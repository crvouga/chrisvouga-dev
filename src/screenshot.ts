import { useState } from "react";

export const getRootUrl = () => {
  const got = process.env.NEXT_PUBLIC_SCREENSHOT_SERVICE_URL;

  if (got) {
    return got;
  }

  throw new Error(
    "process.env.NEXT_PUBLIC_SCREENSHOT_SERVICE_URL is undefined"
  );
};

export const getScreenshotSrc = async ({
  targetUrl,
  timeoutMs,
  imageType,
}: {
  imageType: string;
  targetUrl: string;
  timeoutMs: number;
}) => {
  try {
    const url = `${getRootUrl()}/api/screenshot?targetUrl=${targetUrl}&timeoutMs=${timeoutMs}&imageType=${imageType}`;

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

export const useQueryScreenshot = () => {
  const [src, setSrc] = useState<string | null>(null);
  const [state, setState] = useState<"loading" | "success" | "error">(
    "loading"
  );

  const fetch = async ({
    timeoutMs,
    targetUrl,
    imageType,
  }: {
    imageType: string;
    timeoutMs: number;
    targetUrl: string;
  }) => {
    setState("loading");

    try {
      const { src } = await getScreenshotSrc({
        imageType,
        targetUrl,
        timeoutMs,
      });
      setSrc(src ?? null);
      setState(src ? "success" : "error");
    } catch (_error) {
      setState("error");
    }
  };

  return {
    src,
    state,
    fetch,
  };
};

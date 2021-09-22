import { useState } from "react";
import { getScreenshotSrc } from "./get-screenshot";

export const useScreenshot = () => {
  const [src, setSrc] = useState<string | null>(null);
  const [state, setState] = useState<"loading" | "success" | "error">(
    "loading"
  );

  const fetch = async ({
    timeout,
    targetUrl,
    imageType,
  }: {
    imageType: string;
    timeout: number;
    targetUrl: string;
  }) => {
    setState("loading");

    try {
      const { src } = await getScreenshotSrc({
        imageType,
        targetUrl,
        timeout,
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

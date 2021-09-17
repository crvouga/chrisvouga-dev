import { useEffect, useState } from "react";

const ROOT = "";

export const getScreenshotSrc = async ({
  targetUrl,
  timeout,
}: {
  targetUrl: string;
  timeout: number;
}) => {
  const apiEndpoint =
    `${ROOT}/api/screenshot?targetUrl=${targetUrl}&timeout=${timeout}.png`;

  const response = await fetch(apiEndpoint);

  const blob = await response.blob();

  const src = URL.createObjectURL(blob);

  return src;
};

export const useScreenshot = ({
  timeout,
  targetUrl,
}: {
  timeout: number;
  targetUrl: string;
}) => {
  const [src, setSrc] = useState<string | null>(null);
  const [state, setState] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    setState("loading");

    getScreenshotSrc({
      targetUrl,
      timeout,
    })
      .then((src) => {
        setSrc(src);
        setState("success");
      })
      .catch(() => {
        setState("error");
      });
  }, [targetUrl]);

  return {
    src,
    state,
  };
};

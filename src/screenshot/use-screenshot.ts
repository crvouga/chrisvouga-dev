import { useEffect, useState } from "react";
import { getScreenshotSrc } from "./get-screenshot";

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
      .then(({ src }) => {
        setSrc(src ?? null);
        setState(src ? "success" : "error");
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

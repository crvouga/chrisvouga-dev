import { useEffect, useState } from "react";
import { getScreenshotSrc } from "../services/screenshot";

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

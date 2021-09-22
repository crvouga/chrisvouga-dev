import Box from "@material-ui/core/Box";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";
import Skeleton from "@material-ui/lab/Skeleton";
import React, { useEffect } from "react";
import { useScreenshot } from "./use-screenshot";

export const Screenshot = ({
  alt,
  targetUrl,
  timeout,
  imageType,
}: {
  alt: string;
  imageType: string;
  targetUrl: string;
  timeout?: number;
}) => {
  const screenshot = useScreenshot();

  useEffect(() => {
    screenshot.fetch({
      imageType,
      targetUrl,
      timeout,
    });
  }, [imageType, targetUrl, timeout]);

  return (
    <Box position="relative" height="0" paddingTop="75%" width="100%">
      {screenshot.state === "success" && (
        <img
          src={screenshot.src ?? ""}
          alt={alt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}

      {screenshot.state === "loading" && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Skeleton
            animation="wave"
            width="100%"
            height="100%"
            variant="rect"
          />
        </Box>
      )}

      {screenshot.state === "error" && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="text.secondary"
        >
          <BrokenImageIcon />
        </Box>
      )}
    </Box>
  );
};

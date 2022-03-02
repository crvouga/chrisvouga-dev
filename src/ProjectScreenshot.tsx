import { Alert, Box, Skeleton } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { useQueryScreenshot } from "./screenshot";

export default function ProjectScreenshot({ url }: { url: string }) {
  const query = useQueryScreenshot();

  useEffect(() => {
    query.fetch({ targetUrl: url, timeoutMs: 2000, imageType: "png" });
  }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {query.state === "loading" && (
        <Skeleton variant="rectangular" width="100%" height="100%" />
      )}
      {query.state === "success" && (
        <Image layout="fill" src={query.src} objectFit="cover" />
      )}
      {query.state === "error" && (
        <Alert
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
          severity="error"
        >
          Failed to load screenshot
        </Alert>
      )}
    </Box>
  );
}

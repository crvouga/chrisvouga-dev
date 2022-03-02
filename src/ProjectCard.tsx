import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";

import {
  Button,
  Card,
  CardActions,
  Box,
  CardContent,
  CardHeader,
  CardMedia,
  Skeleton,
  Typography,
  Alert,
  Divider,
  CardActionArea,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import data from "../data.json";
import { useQueryScreenshot } from "../src/screenshot";

export default function ProjectCard({
  url,
  codeUrl,
  title,
}: {
  url: string;
  codeUrl?: string;
  title: string;
}) {
  const query = useQueryScreenshot();

  useEffect(() => {
    query.fetch({ targetUrl: url, timeoutMs: 2000, imageType: "png" });
  }, []);

  return (
    <Card variant="outlined">
      <Tooltip title="Open deployment">
        <CardActionArea
          href={url}
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <Box sx={{ paddingTop: `${(9 / 16) * 100}%`, position: "relative" }}>
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
          </Box>
        </CardActionArea>
      </Tooltip>
      <Divider />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
      <CardActions>
        <Button
          target={"_blank"}
          rel={"noreferrer noopener"}
          href={url}
          size="small"
          startIcon={<LanguageIcon />}
        >
          Deployment
        </Button>
        <Button
          target={"_blank"}
          rel={"noreferrer noopener"}
          href={codeUrl}
          size="small"
          startIcon={<CodeIcon />}
        >
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
}

import { Alert, Box, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useQueryScreenshot } from "./screenshot";
import * as ScreenshotService from "@crvouga/screenshot-service"

const screenshotServiceClient = ScreenshotService.makeClient({})

const rawProjectId = "968b217e-5143-4406-84e8-d2137705a2e4"

export default function ProjectScreenshot({ url }: { url: string }) {
  const [state, setState] = useState(screenshotServiceClient.store.getState)


  const start = () => {

    if (state.type === 'Connecting') {
      return
    }

    const clientId = state.clientId

    const originUrl = ScreenshotService.Data.Url.decode(window.location.origin)

    if (originUrl.type === 'Err') {
      return
    }

    const projectId = ScreenshotService.Data.ProjectId.decode(rawProjectId)

    if (projectId.type === 'Err') {
      return
    }

    const requestId = ScreenshotService.Data.RequestId.generate()

    const targetUrl = ScreenshotService.Data.TargetUrl.decode(url)

    if (targetUrl.type === 'Err') {
      return
    }

    screenshotServiceClient.store.dispatch(ScreenshotService.CaptureScreenshotRequest.Action.Start({
      clientId,
      delaySec: 3,
      imageType: "jpeg",
      originUrl: originUrl.value,
      projectId: projectId.value,
      requestId: requestId,
      strategy: "NetworkFirst",
      targetUrl: targetUrl.value
    }))
  }

  useEffect(() => {
    const unsubscribe = screenshotServiceClient.store.subscribe(() => {
      setState(screenshotServiceClient.store.getState)
    })

    start()

    return () => {
      unsubscribe()
    }
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
      {state.type === "Connecting" && (
        <Skeleton variant="rectangular" width="100%" height="100%" >
          <Typography>
            Connecting...
          </Typography>
        </Skeleton>
      )}

      {state.type === 'Connected' && (
        <pre>
          {JSON.stringify(state, null, 4)}
        </pre>
      )}

    </Box>
  );
}

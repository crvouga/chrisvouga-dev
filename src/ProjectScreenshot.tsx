import * as ScreenshotService from "@crvouga/screenshot-service";
import { Alert, Box, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const screenshotServiceClient = ScreenshotService.makeClient({})

// source: https://screenshotservice.chrisvouga.dev/
const rawProjectId = "968b217e-5143-4406-84e8-d2137705a2e4"

export default function ProjectScreenshot({ url }: { url: string }) {
  const [state, setState] = useState(screenshotServiceClient.store.getState)

  const [requestId, setRequestId] = useState<ScreenshotService.Data.RequestId.RequestId | null>(null)

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

    const targetUrl = ScreenshotService.Data.Url.decode(url)

    if (targetUrl.type === 'Err') {
      return
    }

    const requestId = ScreenshotService.Data.RequestId.generate()

    setRequestId(requestId)

    screenshotServiceClient.store.dispatch(ScreenshotService.CaptureScreenshotRequest.Action.Start({
      clientId,
      delaySec: 2,
      imageType: "jpeg",
      originUrl: originUrl.value,
      projectId: projectId.value,
      requestId: requestId,
      strategy: "CacheFirst",
      targetUrl: targetUrl.value
    }))
  }

  useEffect(() => {
    const unsubscribe = screenshotServiceClient.store.subscribe(() => {
      setState(screenshotServiceClient.store.getState)
    })
    return () => {
      unsubscribe()
    }
  }, []);

  useEffect(() => {
    start()
  }, [state.type])


  const requestState: ScreenshotService.CaptureScreenshotRequest.RequestState =
    requestId && state.type === 'Connected'
      ? ScreenshotService.CaptureScreenshotRequest.toRequest(requestId, state.captureScreenshotRequest)
      : { type: "Idle", logs: [] }

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
      {state.type === "Connecting" && (<Log message="Connecting..." />)}

      {state.type === 'Connected' && (
        <>
          {(requestState.type === 'Loading' || requestState.type === 'Cancelled' || requestState.type === 'Cancelling' || requestState.type === 'Idle') &&
            <Log message={requestState.logs[requestState.logs.length - 1]?.message ?? "Connecting..."} />}

          {requestState.type === 'Failed' && (
            <Alert severity="error" sx={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
              {requestState.problems.map(problem => problem.message).join(", ")}
            </Alert>
          )}

          {requestState.type === 'Succeeded' && (
            <img src={requestState.src} alt={url} style={{ objectFit: "cover" }} width="100%" height="100%" />
          )}
        </>
      )}
    </Box>
  );
}


const Log = ({ message }: { message: string }) => {
  return (
    <>
      <Box sx={{ zIndex: 1000, width: "100%", height: "100%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
        <Typography color="text.secondary">
          {message}
        </Typography>
      </Box>
    </>
  )
}
import * as ScreenshotService from "@crvouga/screenshot-service";
import { Alert, Box, Skeleton, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import data from "../data.json";
import { useIsInViewport } from "./use-is-in-viewport";

const screenshotServiceClient = ScreenshotService.makeClient({})

export default function ProjectScreenshot({ url }: { url: string }) {
  const [state, setState] = useState(screenshotServiceClient.store.getState)
  const [requestId, setRequestId] = useState<ScreenshotService.Data.RequestId.RequestId | null>(null)

  const requestState: ScreenshotService.CaptureScreenshotRequest.RequestState =
    requestId && state.type === 'Connected'
      ? ScreenshotService.CaptureScreenshotRequest.toRequest(requestId, state.captureScreenshotRequest)
      : { type: "Idle", logs: [] }


  const start = () => {
    if (state.type === 'Connecting') {
      return
    }

    if (requestState.type === 'Loading' || requestState.type === 'Succeeded' || requestState.type === 'Failed') {
      return
    }

    const clientId = state.clientId

    const originUrl = ScreenshotService.Data.Url.decode(window.location.origin)

    if (originUrl.type === 'Err') {
      return
    }

    const projectId = ScreenshotService.Data.ProjectId.decode(data.screenshotServiceProjectId)

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
    return () => {
      unsubscribe()
    }
  }, []);

  const ref = useRef<HTMLDivElement | null>(null)

  const isInViewport = useIsInViewport(ref)


  useEffect(() => {
    if (isInViewport) {
      start()
    }
  }, [isInViewport, state.type])

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
      {state.type === "Connecting" && (<Log message="connecting..." />)}

      {state.type === 'Connected' && (
        <>
          {(requestState.type === 'Loading' || requestState.type === 'Cancelled' || requestState.type === 'Cancelling' || requestState.type === 'Idle') &&
            <Log message={requestState.logs[requestState.logs.length - 1]?.message ?? "loading..."} />}

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
      <div id="in-view-element" ref={ref} />
    </Box>
  );
}

const Log = ({ message }: { message: string }) => {
  return (
    <>

      <Box sx={{
        width: "100%",
        height: "100%",
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>

        <Skeleton variant="rectangular" sx={{ position: "absolute", top: 0, left: 0, width: '100%', height: "100%" }} />

        <Typography variant="subtitle2" sx={{
          textTransform: "lowercase",
          // animation: `${pulse} 0.8s infinite ease`
        }} color="text.secondary">
          {message}
        </Typography>
      </Box>
    </>
  )
}


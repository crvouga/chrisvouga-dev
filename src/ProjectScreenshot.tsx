import * as ScreenshotService from "@crvouga/screenshot-service";
import { Alert, Box, Skeleton, Typography } from "@mui/material";
import { MutableRefObject, Ref, useEffect, useMemo, useRef, useState } from "react";
import { useIsInViewport } from "./use-is-in-viewport";

const screenshotServiceClient = ScreenshotService.makeClient({})

// source: https://screenshotservice.chrisvouga.dev/
const rawProjectId = "968b217e-5143-4406-84e8-d2137705a2e4"

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

    if (requestState.type !== 'Idle') {
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
      <div ref={ref} />
      {state.type === "Connecting" && (<Log message="Connecting to screenshot service..." />)}

      {state.type === 'Connected' && (
        <>
          {(requestState.type === 'Loading' || requestState.type === 'Cancelled' || requestState.type === 'Cancelling' || requestState.type === 'Idle') &&
            <Log message={requestState.logs[requestState.logs.length - 1]?.message ?? "Connecting to screenshot service..."} />}

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


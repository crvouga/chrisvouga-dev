import {
  Alert,
  Box,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/joy";
import { useState } from "react";

export function ContactLink({
  label,
  value,
}: {
  href: string;
  hrefLabel: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  const [status, setStatus] = useState<"idle" | "copied">("idle");

  const onClipboardCopy = () => {
    window.navigator.clipboard.writeText(value);
    setStatus("copied");
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={status === "copied"}
        onClose={() => setStatus("idle")}
        autoHideDuration={3000}>
        <Alert sx={{ width: "100%" }} variant="soft">
          {`Copied ${value} to clipboard`}
        </Alert>
      </Snackbar>

      <Tooltip placement="bottom-start" title={status === "copied" ? "Copied" : `Click to copy`}>
        <Box onClick={onClipboardCopy}>
          <Typography>
            {label}
          </Typography>
          <Typography>
            {value}
          </Typography>
        </Box>
      </Tooltip>
    </>
  );
}

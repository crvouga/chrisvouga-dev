import { Box, Snackbar, Tooltip, Typography } from "@mui/joy";
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
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={status === "copied"}
        onClose={() => setStatus("idle")}
        autoHideDuration={3000}
        variant="soft"
      >
        {`Copied ${value} to clipboard`}
      </Snackbar>

      <Tooltip
        component="div"
        sx={{ flex: 1 }}
        placement="bottom"
        title={status === "copied" ? "Copied" : `Click to copy`}
      >
        <Box
          component="button"
          sx={{
            textAlign: "left",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={onClipboardCopy}
        >
          <Typography color="neutral">{label}</Typography>
          <Typography
            sx={{
              "&:hover": {
                opacity: 0.8,
                textDecoration: "underline",
              },
            }}
          >
            {value}
          </Typography>
        </Box>
      </Tooltip>
    </>
  );
}

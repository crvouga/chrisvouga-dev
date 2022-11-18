import {
  Box,
  Alert,
  Button,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Snackbar,
  Tooltip,
} from "@mui/material";
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
        open={status === "copied"}
        onClose={() => setStatus("idle")}
        autoHideDuration={3000}>
        <Alert
          sx={{ width: "100%" }}
          severity="info">{`Copied ${value} to clipboard`}</Alert>
      </Snackbar>

      <ListItem component="div" disableGutters disablePadding>
        <Tooltip title={status === "copied" ? "Copied" : `Click to copy`}>
          <ListItemText
            onClick={onClipboardCopy}
            sx={{ cursor: "pointer" }}
            primaryTypographyProps={{
              color: "text.secondary",
              variant: "body2",
            }}
            primary={label}
            secondaryTypographyProps={{
              color: "text.primary",
              variant: "body1",
            }}
            secondary={value}
          />
        </Tooltip>
      </ListItem>
    </>
  );
}

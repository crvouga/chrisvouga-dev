import { Snackbar } from "@mui/joy";
import { useState } from "react";
import { ContactLinkButton } from "./button";

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

      <ContactLinkButton
        label={label}
        value={value}
        onClick={onClipboardCopy}
      />
    </>
  );
}

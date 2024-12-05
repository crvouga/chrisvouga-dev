import { Box, Typography } from "@mui/joy";

export function ContactLinkButton({
  label,
  value,
  onClick,
}: {
  label: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <Box
      component="button"
      sx={{
        textAlign: "left",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
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
  );
}

export function viewContactLinkButton({
  label,
  value,
  onClick,
}: {
  label: string;
  value: string;
  onClick: string;
}): string {
  const style = `
    text-align: left;
    background-color: transparent;
    border: none;
    cursor: pointer;
    `;

  const labelStyle = `
    color: var(--color-neutral);
    `;

  const valueStyle = `
      color: black;
    `;

  return `
      <button style="${style}" onclick="${onClick}">
        <span style="${labelStyle}">${label}</span>
        <br />
        <span style="${valueStyle}">${value}</span>
      </button>
    `;
}

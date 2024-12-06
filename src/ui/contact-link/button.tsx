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

import { Typography, useTheme } from "@mui/joy";

export function Colored({ text }: { text: string }) {
  const theme = useTheme();
  const start = theme.palette.primary[300];
  const stop = theme.palette.primary[500];
  return (
    <Typography
      level="h2"
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${start}, ${stop})`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        paddingBottom: "0.5rem",
        fontWeight: 1000,
      }}
    >
      {text}
    </Typography>
  );
}

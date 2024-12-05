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

const createGradientStyle = (start: string, stop: string) => `
  --gradient-start: ${start};
  --gradient-stop: ${stop};
`;
const themeGradient = createGradientStyle("#42a5f5", "#1565c0");
const style = `
  ${themeGradient}
  background-image: linear-gradient(to bottom, var(--gradient-start), var(--gradient-stop));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  padding-bottom: 0.5rem;
  font-weight: 1000;
`;
export function viewColored({ text }: { text: string }) {
  return `
    <h2 style="${style}">
      ${text}
    </h2>
  `;
}

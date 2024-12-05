import { Typography } from "@mui/joy";

export function SectionTitle({ title }: { title: string }) {
  return (
    <Typography level="h2" fontWeight={900} sx={{ pb: 3, textAlign: "left" }}>
      {title}
    </Typography>
  );
}

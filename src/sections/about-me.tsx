import { Box, Typography } from "@mui/joy";
import { data } from "../../content";
import { SectionTitle } from "../ui/section-title";

export function AboutMeSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="A little about me..." />
      <Typography
        level="body-md"
        sx={{
          maxWidth: (theme) => theme.breakpoints.values.md,
        }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: data.aboutMe,
          }}
        />
      </Typography>
    </Box>
  );
}

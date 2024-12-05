import { Stack, Typography } from "@mui/joy";
import { Colored } from "./colored";
import { HeadingContact } from "./contact";

export function HeadingSection() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Stack flex={1}>
        <Typography level="h1" fontWeight={900}>
          Chris Vouga
        </Typography>

        <Colored text="Software Developer" />
      </Stack>

      <HeadingContact />
    </Stack>
  );
}

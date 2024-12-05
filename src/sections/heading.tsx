import { Email } from "@mui/icons-material";
import { Stack, Typography, useTheme } from "@mui/joy";
import { data } from "../../content";
import { ContactLink } from "../ui/contact-link";
import { GitHubButton } from "../ui/github-button";
import { LinkedInButton } from "../ui/linkedin-button";

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

        <HeadingSoftwareDeveloper />
      </Stack>

      <Stack
        direction={{
          sm: "column",
          md: "row",
        }}
        alignItems={{
          sm: "flex-start",
          md: "center",
        }}
        justifyContent={{
          sm: "flex-start",
          md: "flex-end",
        }}
        gap={2}
      >
        <ContactLink
          icon={<Email />}
          href={`mailTo:${data.emailAddress}`}
          hrefLabel={`Email`}
          label="Email"
          value={data.emailAddress}
        />

        <Stack direction="row" gap={2}>
          <GitHubButton />

          <LinkedInButton />
        </Stack>
      </Stack>
    </Stack>
  );
}

function HeadingSoftwareDeveloper() {
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
      Software Developer
    </Typography>
  );
}

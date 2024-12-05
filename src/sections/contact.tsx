import { Email, Phone } from "@mui/icons-material";
import { Box } from "@mui/joy";
import { data } from "../../content";
import { ContactLink } from "../ui/contact-link";
import { GitHubButton } from "../ui/github-button";
import { LinkedInButton } from "../ui/linkedin-button";
import { SectionTitle } from "../ui/section-title";

export function ContactSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Let's get in touch!" />
      <Contacts />
    </Box>
  );
}

function Contacts() {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: (theme) => theme.breakpoints.values.sm,
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <ContactLink
          icon={<Email />}
          href={`mailTo:${data.emailAddress}`}
          hrefLabel={`Email`}
          label="Email"
          value={data.emailAddress}
        />

        {false && (
          <ContactLink
            icon={<Phone />}
            href={`tel:${data.phoneNumber}`}
            hrefLabel={`Call`}
            label="Phone"
            value={formatPhoneNumber(data.phoneNumber)}
          />
        )}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <GitHubButton />

        <LinkedInButton />
      </Box>
    </Box>
  );
}

function formatPhoneNumber(s: string): string {
  return [
    s[0],
    s[1],
    s[2],
    ".",
    s[3],
    s[4],
    s[5],
    ".",
    s[6],
    s[7],
    s[8],
    s[9],
  ].join("");
}

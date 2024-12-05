import { Email } from "@mui/icons-material";
import { Stack } from "@mui/joy";
import { data } from "../../../content";
import { ContactLink } from "../../ui/contact-link";
import { GitHubButton } from "../../ui/github-button";
import { LinkedInButton } from "../../ui/linkedin-button";

export function HeadingContact() {
  return (
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
  );
}

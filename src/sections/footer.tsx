import { Link } from "@mui/joy";
import { Box } from "@mui/material";
import { data } from "../../content";
import { Launch } from "@mui/icons-material";

export function FooterSection() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        href={data.siteSourceCodeUrl}
        target="_blank"
        rel="noopener noreferrer"
        color="neutral"
      >
        <Launch sx={{ mr: 0.5 }} />
        Source code
      </Link>
    </Box>
  );
}

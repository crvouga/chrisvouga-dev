import { Card, CardContent, Typography } from "@mui/joy";
import { Work } from "../../content";

export function WorkCard({ work }: { work: Work }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          component="a"
          level="h3"
          target="_blank"
          rel="noreferrer noopener"
          href={work.infoUrl}
          sx={{
            mb: 1,
            textDecoration:
              typeof work.infoUrl === "string" ? "underline" : undefined,
          }}
        >
          {work.name}
        </Typography>

        <Typography sx={{ display: "flex", items: "center" }} level="title-sm">
          {work.jobTitle}
        </Typography>

        <Typography
          sx={{ display: "flex", items: "center", mb: 2 }}
          level="title-sm"
        >
          {`${work.yearStart} - ${work.yearEnd}`}
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          {work.jobDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}

import { Box, Grid } from "@mui/joy";
import { data } from "../../content";
import { SectionTitle } from "../ui/section-title";
import { WorkCard } from "../ui/work-card";

export function WorkSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Work" />

      <Grid container spacing={3}>
        {data.work.map((work, index) => (
          <Grid key={index} xs={12} sm={6} md={4}>
            <WorkCard work={work} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

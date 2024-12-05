import { Box, Button, Grid } from "@mui/joy";
import { useState } from "react";
import { data } from "../../content";
import { ProjectCard } from "../ui/project-card";
import { SectionTitle } from "../ui/section-title";

const MAX_CARD_COUNT = 9;
const HIDDEN_CARD_COUNT = data.sideProjects.length - MAX_CARD_COUNT;

export function SideProjectsSection() {
  const [state, setState] = useState<"contracted" | "expanded">("contracted");
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Side Projects" />

      <Grid container spacing={3}>
        {data.sideProjects
          .slice(0, state === "expanded" ? Infinity : MAX_CARD_COUNT)
          .map((project, index) => (
            <Grid key={index} xs={12} sm={6} md={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
      </Grid>

      {HIDDEN_CARD_COUNT > 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: 3,
          }}
        >
          {state === "contracted" && (
            <Button
              variant="solid"
              size="lg"
              onClick={() => setState("expanded")}
            >
              {`See ${HIDDEN_CARD_COUNT.toLocaleString()} more`}
            </Button>
          )}

          {state === "expanded" && (
            <Button
              variant="solid"
              size="lg"
              onClick={() => setState("contracted")}
            >
              See less
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
}

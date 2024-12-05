import { Box } from "@mui/joy";
import { useState } from "react";
import { data } from "../../../content";
import { SectionTitle } from "../../ui/section-title";
import { SideProjectsSectionButtons } from "./buttons";
import { SideProjectsSectionCards } from "./cards";

const MAX_CARD_COUNT = 9;
const HIDDEN_CARD_COUNT = data.sideProjects.length - MAX_CARD_COUNT;

export function SideProjectsSection() {
  const [state, setState] = useState<"contracted" | "expanded">("contracted");
  const projects = data.sideProjects.slice(
    0,
    state === "expanded" ? Infinity : MAX_CARD_COUNT
  );
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <SectionTitle title="Side Projects" />

      <SideProjectsSectionCards projects={projects} />

      {HIDDEN_CARD_COUNT > 0 && (
        <SideProjectsSectionButtons
          hiddenCardCount={HIDDEN_CARD_COUNT}
          state={state}
          onExpand={() => setState("expanded")}
          onContract={() => setState("contracted")}
        />
      )}
    </Box>
  );
}

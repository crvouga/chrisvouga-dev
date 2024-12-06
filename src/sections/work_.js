// @ts-check

import { data } from "../../content";
import { viewGrid, viewGridItem } from "../ui/grid";
import { viewSection } from "../ui/section";
import { viewWorkCard } from "../ui/work-card_";

export function viewWorkSection() {
  return viewSection({
    title: "Work",
    children: viewGrid({
      children: data.work
        .map((work) =>
          viewGridItem({
            children: viewWorkCard({ work }),
          })
        )
        .join(" "),
    }),
  });
}

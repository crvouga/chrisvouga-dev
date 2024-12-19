import { ensureObject } from "src/library/ensure-object.js";
import { tag } from "src/library/html/index.js";
import { unit } from "src/ui/theme.js";
import { viewTypography } from "src/ui/typography.js";
import { viewProjectCardContentChips } from "./chips.js";
import { viewProjectCardContentTitle } from "./title.js";

/**
 * @type {import("src/shared/project-card/props.js").ProjectCardView}
 */
export const viewProjectCardContentMain = (props) => (a, _c) => {
  return tag(
    "div",
    {
      ...a,
      style: {
        ...ensureObject(a?.style),
        flex: 1,
        display: "flex",
        "flex-direction": "column",
      },
    },
    [
      viewProjectCardContentTitle(props)({
        style: {
          "margin-bottom": unit(1),
        },
      }),
      viewTypography({
        level: "body-md",
        text: props.project.description,
      })({
        style: {
          "margin-bottom": unit(2),
        },
      }),
      viewProjectCardContentChips(props)(),
    ]
  );
};

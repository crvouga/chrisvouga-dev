import { ensureObject } from "src/library/ensure-object";
import { tag } from "src/library/html";
import { unit } from "src/ui/theme";
import { viewTypography } from "src/ui/typography";
import { viewProjectCardContentChips } from "./chips";
import { viewProjectCardContentTitle } from "./title";

/**
 * @type {import("../props").ProjectCardView}
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

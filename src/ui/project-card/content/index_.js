import { ensureObject, tag } from "../../../elem";
import { unit } from "../../theme";
import { viewTypography } from "../../typography";
import { viewProjectCardContentChips } from "./chips_";
import { viewProjectCardContentTitle } from "./title_";

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

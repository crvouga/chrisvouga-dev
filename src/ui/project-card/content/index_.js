import { ensureObject } from "../../../elem";
import { viewCardContent } from "../../card";
import { unit } from "../../theme";
import { viewTypography } from "../../typography";
import { viewProjectCardContentChips } from "./chips_";
import { viewProjectCardContentTitle } from "./title_";

/**
 * @type {import("../props").ProjectCardView}
 */
export const viewProjectCardContent = (props) => (a, _c) => {
  return viewCardContent(
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

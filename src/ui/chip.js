import { tag, text } from "../elem";
import { THEME } from "./theme";
/**
 * @typedef {{size: "sm"; startDecorator: import("../elem/index").H; variant: "outlined"; text: string}} ChipProps
 */

/**
 * @type {import("../elem").View<ChipProps>}
 */
export const viewChip = (props) => (attr, _children) => {
  return tag(
    "div",
    {
      ...attr,
      style: {
        "font-size": "12px",
        "line-height": "18px",
        "max-width": "max-content",
        "border-radius": "24px",
        color: THEME.colors.body,
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        gap: "3px",
        border: `1px solid ${
          props.variant === "outlined"
            ? THEME.colors.borderLight
            : "transparent"
        }`,
      },
    },
    [
      props.startDecorator({
        style: {
          width: "12px",
          height: "12px",
          overflow: "hidden",
        },
      }),
      tag(
        "span",
        {
          style: {
            padding: "0px 6px",
          },
        },
        [text(props.text)]
      ),
    ]
  );
};

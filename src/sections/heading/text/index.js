// @ts-check

import { tag } from "../../../library/html/index.js";
import { code } from "../../../ui/icons.js";
import { unit, THEME } from "../../../ui/theme.js";
import { viewTypography } from "../../../ui/typography.js";
import { viewColored } from "./colored.js";

/**
 * @type {import("../../../library/html/index.js").View}
 */
export const viewHeadingSectionText = () => {
  return tag(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        "align-items": "flex-start",
        "justify-content": "flex-start",
        "flex-direction": "column",
        gap: unit(1),
        "flex-shrink": 0,
      },
    },
    [
      code({
        style: {
          width: "4rem",
          height: "4rem",
          fill: THEME.colors.text,
          "flex-shrink": 0,
        },
      }),
      tag("div", {}, [
        viewTypography({ level: "h1", text: "Chris Vouga" })({
          style: { "font-weight": 900 },
        }),
        viewColored({ text: "Software Developer" })(),
      ]),
    ]
  );
};

// @ts-check
import { tag } from "src/library/html";
import { code } from "src/ui/icons";
import { THEME, unit } from "src/ui/theme";
import { viewTypography } from "src/ui/typography";
import { viewColored } from "./colored";

/**
 * @type {import("src/library/html").View}
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

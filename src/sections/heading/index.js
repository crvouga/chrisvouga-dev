// @ts-check
import { tag, text } from "src/library/html";
import { HEAD } from "src/ui/head";
import { code } from "src/ui/icons";
import { THEME, unit } from "src/ui/theme";
import { viewTypography } from "src/ui/typography";
import { viewColored } from "./colored";
import { viewHeadingContact } from "./contact";

/**
 * @type {import("src/library/html").View}
 */
export const viewHeadingSection = () => {
  return tag(
    "header",
    {
      class: "header",
    },
    [
      tag(
        "div",
        {
          style: {
            flex: 1,
            display: "flex",
            "align-items": "center",
            gap: unit(2),
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
      ),
      viewHeadingContact({})(),
    ]
  );
};

HEAD.push(
  tag("style", {}, [
    text(`
    .header {
      display: flex;
      justify-content: space-between;
      max-width: 100%;
      flex-direction: column;
      gap: ${unit(2)};
    }

    @media (max-width: ${THEME.breakpoints.xs}) {
      .header {
        flex-direction: column;
        align-items: flex-start;
        gap: ${unit(2)};
      }
    }

    @media (min-width: ${THEME.breakpoints.sm}) {
      .header {
        flex-direction: row;
        align-items: center;
        gap: ${unit(2)};
      }
    }

    @media (min-width: ${THEME.breakpoints.md}) {
      .header {
        gap: ${unit(4)};
      }
    }
    `),
  ])
);

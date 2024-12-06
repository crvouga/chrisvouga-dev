// @ts-check
import { tag, text } from "../../core/elem";
import { HEAD } from "../../ui/head";
import { code } from "../../ui/icons";
import { THEME, unit } from "../../ui/theme";
import { viewTypography } from "../../ui/typography";
import { viewColored } from "./colored_";
import { viewHeadingContact } from "./contact_";

/**
 * @type {import("../../core/elem").View}
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
      margin-bottom: 3rem;
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

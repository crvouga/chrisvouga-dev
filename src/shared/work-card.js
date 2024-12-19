// @ts-check

import { tag } from "src/library/html/index.js";
import { viewCard, viewCardContent } from "src/ui/card.js";
import { viewLink } from "src/ui/link.js";
import { unit } from "src/ui/theme.js";
import { viewTypography } from "src/ui/typography.js";

/**
 * @type {import("src/library/html/index.js").ViewWithProps<{work: import("src/content/work.js").Work}>}
 */
export const viewWorkCard =
  ({ work }) =>
  () => {
    return viewCard({}, [
      viewCardContent({}, [
        viewLink(
          {
            href: work.infoUrl ?? " ",
          },
          [
            viewTypography({ level: "h3", text: work.name })({
              style: {
                "margin-bottom": unit(1),
              },
            }),
          ]
        ),

        tag(
          "div",
          {
            style: {
              display: "flex",
              "flex-direction": "column",
              gap: unit(0.5),
            },
          },
          [
            viewTypography({
              level: "title-sm",
              text: work.jobTitle,
            })(),

            viewTypography({
              level: "title-sm",
              text: `${work.yearStart} - ${work.yearEnd}`,
            })({
              style: {
                "margin-bottom": unit(2),
              },
            }),
          ]
        ),

        viewTypography({
          level: "body-md",
          text: work.jobDescription,
        })({
          style: {
            "margin-bottom": unit(2),
          },
        }),
      ]),
    ]);
  };

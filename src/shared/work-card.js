// @ts-check

import { tag } from "../library/html";
import { viewCard, viewCardContent } from "../ui/card";
import { viewLink } from "../ui/link";
import { unit } from "../ui/theme";
import { viewTypography } from "../ui/typography";

/**
 * @type {import("../library/html").ViewWithProps<{work: Work}>}
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

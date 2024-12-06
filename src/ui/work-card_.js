// @ts-check

import { viewCard, viewCardContent } from "./card";
import { viewLink } from "./link";
import { viewTypography } from "./typography";

/**
 * @type {import("../elem").View<{work: import("../../content").Work}>}
 */
export const viewWorkCard =
  ({ work }) =>
  () => {
    return viewCard({}, [
      viewCardContent({}, [
        viewLink({}, [viewTypography({ level: "h3", text: work.name })()]),

        viewTypography({
          level: "title-sm",
          text: work.jobTitle,
        })(),

        viewTypography({
          level: "title-sm",
          text: `${work.yearStart} - ${work.yearEnd}`,
        })(),

        viewTypography({
          level: "body-md",
          text: work.jobDescription,
        })(),
      ]),
    ]);
  };

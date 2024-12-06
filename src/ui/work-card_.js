// @ts-check

import { viewCard, viewCardContent } from "./card";
import { viewTypography } from "./typography";

/**
 * @param {{work: import("../../content").Work}} input
 * @returns {string}
 */
export function viewWorkCard({ work }) {
  return viewCard({
    children: viewCardContent({
      children: [
        `<a target="_blank" rel="noreferrer noopener">
        ${viewTypography({ level: "h3", children: work.name })}
      </a>`,

        viewTypography({ level: "title-sm", children: work.jobTitle }),

        viewTypography({
          level: "title-sm",
          children: `${work.yearStart} - ${work.yearEnd}`,
        }),

        viewTypography({ level: "body-md", children: work.jobDescription }),
      ].join(""),
    }),
  });
}

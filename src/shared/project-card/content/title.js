// @ts-check
import { ensureObject } from "src/library/ensure-object.js";
import { viewLink } from "src/ui/link.js";
import { unit } from "src/ui/theme.js";
import { viewTypography } from "src/ui/typography.js";

/**
 * @type {import("src/shared/project-card/props.js").ProjectCardView}
 */
export const viewProjectCardContentTitle = (props) => (a, _c) => {
  const inner = viewTypography({
    level: "h3",
    text: props.project.title,
  })({
    ...a,
    style: {
      ...ensureObject(a?.style),
      "margin-bottom": unit(1),
    },
  });
  if (props.linkHref) {
    return viewLink(
      {
        href: props.linkHref,
      },
      [inner]
    );
  }
  return inner;
};

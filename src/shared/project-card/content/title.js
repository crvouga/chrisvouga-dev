// @ts-check
import { ensureObject } from "src/library/ensure-object";
import { viewLink } from "src/ui/link";
import { unit } from "src/ui/theme";
import { viewTypography } from "src/ui/typography";

/**
 * @type {import("src/shared/project-card/props").ProjectCardView}
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

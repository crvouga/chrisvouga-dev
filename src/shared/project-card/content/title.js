// @ts-check
import { viewTypography } from "../../../ui/typography";
import { viewLink } from "../../../ui/link";
import { unit } from "../../../ui/theme";
import { ensureObject } from "../../../core/elem";

/**
 * @type {import("../props").ProjectCardView}
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

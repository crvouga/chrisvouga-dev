// @ts-check

import { ensureObject } from "../../../library/ensure-object.js";
import { viewLink } from "../../../ui/link.js";
import { unit } from "../../../ui/theme.js";
import { viewTypography } from "../../../ui/typography.js";

/**
 * @type {import("../props.js").ProjectCardView}
 */
export const viewProjectCardContentTitle = (props) => (a, _c) => {
  const inner = viewTypography({
    level: "h3",
    text: props.project.title,
  })({
    ...a,
    style: {
      ...ensureObject(a?.["style"]),
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

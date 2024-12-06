// @ts-check

import { viewTypography } from "./typography";

/**
 * @type {import("../elem").View<{ title: string }>}
 */
export const viewSectionTitle = (p) => (_a, _c) => {
  return viewTypography({ level: "h2", text: p.title })({
    style: {
      margin: 0,
      padding: 0,
    },
  });
};

// @ts-check

import { viewTypography } from "../ui/typography.js";

/**
 * @type {import("../library/html/index.js").ViewWithProps<{ title: string }>}
 */
export const viewSectionTitle = (p) => (_a, _c) => {
  return viewTypography({ level: "h2", text: p.title })();
};

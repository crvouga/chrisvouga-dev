// @ts-check

import { viewTypography } from "src/ui/typography.js";

/**
 * @type {import("src/library/html/index.js").ViewWithProps<{ title: string }>}
 */
export const viewSectionTitle = (p) => (_a, _c) => {
  return viewTypography({ level: "h2", text: p.title })();
};

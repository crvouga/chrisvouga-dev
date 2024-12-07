// @ts-check

import { viewTypography } from "src/ui/typography";

/**
 * @type {import("src/library/html").ViewWithProps<{ title: string }>}
 */
export const viewSectionTitle = (p) => (_a, _c) => {
  return viewTypography({ level: "h2", text: p.title })();
};

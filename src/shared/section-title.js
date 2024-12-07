// @ts-check

import { viewTypography } from "../ui/typography";

/**
 * @type {import("../library/html").ViewWithProps<{ title: string }>}
 */
export const viewSectionTitle = (p) => (_a, _c) => {
  return viewTypography({ level: "h2", text: p.title })();
};

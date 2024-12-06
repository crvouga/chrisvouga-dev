// @ts-check

import { viewTypography } from "./typography";

/**
 * @type {import("../core/elem").ViewWithProps<{ title: string }>}
 */
export const viewSectionTitle = (p) => (_a, _c) => {
  return viewTypography({ level: "h2", text: p.title })();
};

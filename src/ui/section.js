// @ts-check

import { t } from "../elem";
import { viewSectionTitle } from "./section-title_";

/**
 * @type {(props: {title:string}) => import("../elem").H}
 */
export const viewSection = (props) => (attr, c) => {
  return t(
    "section",
    {
      ...attr,
      style: {
        width: "100%",
        display: "flex",
        "flex-direction": "column",
        gap: "24px",
      },
    },
    [viewSectionTitle(props)(), ...(c ?? [])]
  );
};

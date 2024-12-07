// @ts-check

import { tag, text } from "src/library/html";
import { HEAD } from "src/ui/head";
import { viewSectionTitle } from "./section-title";

/**
 * @type {(props: {title:string}) => import("src/library/html").View}
 */
export const viewSection = (props) => (attr, c) => {
  return tag(
    "section",
    {
      ...attr,
      class: "section",
    },
    [viewSectionTitle(props)(), ...(c ?? [])]
  );
};

HEAD.push(
  tag("style", {}, [
    text(`
    .section {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  `),
  ])
);

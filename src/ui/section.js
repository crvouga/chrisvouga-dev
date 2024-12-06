// @ts-check

import { tag, text } from "../elem";
import { HEAD } from "./head";
import { viewSectionTitle } from "./section-title_";

/**
 * @type {(props: {title:string}) => import("../elem").H}
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

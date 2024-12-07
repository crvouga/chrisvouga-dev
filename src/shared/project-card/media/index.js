// @ts-check

import { tag, text } from "src/library/html";
import { HEAD } from "src/ui/head";
import { THEME } from "src/ui/theme";
import { viewProjectCardMediaImage } from "./image";
import { viewProjectCardMediaVideo } from "./video";

/**
 * @type {import("src/shared/project-card/props").ProjectCardView}
 */
export const viewProjectCardMedia = (props) => (attr, children) => {
  return tag("div", { ...attr, class: "project-card-media" }, [
    props.project.youTubeVideoId
      ? viewProjectCardMediaVideo(props)()
      : viewProjectCardMediaImage(props)({}, []),
    ...(children ?? []),
  ]);
};

HEAD.push(
  tag("style", {}, [
    text(`
      .project-card-media {
        aspect-ratio: 16 / 9;
        overflow: hidden;
        flex-shrink: 0;
        border-bottom: 1px solid ${THEME.colors.paperBorder};
      }
    `),
  ])
);

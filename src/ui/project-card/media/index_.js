// @ts-check

import { tag, text } from "../../../core/elem";
import { HEAD } from "../../head";
import { THEME } from "../../theme";
import { viewProjectCardMediaImage } from "./image_";
import { viewProjectCardMediaVideo } from "./video_";

/**
 * @type {import("../props").ProjectCardView}
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

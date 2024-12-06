// @ts-check

import { tag, text } from "../../../core/elem";
import { HEAD } from "../../head";
import { viewImage } from "../../image";
import { THEME } from "../../theme";

/**
 * @type {import("../props").ProjectCardView}
 */
export const viewProjectCardMedia = (props) => (attr, children) => {
  return tag("div", { ...attr, class: "project-card-media" }, [
    viewProjectCardMediaContent(props)({}, []),
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

/**
 * @type {import("../props").ProjectCardView}
 */
const viewProjectCardMediaContent = (props) => {
  const src = props.project?.imageSrc?.[0];
  if (src) {
    return viewProjectCardMediaImage(props);
  }
  return viewProjectCardMediaGradient(props);
};

/**
 * @type {import("../props").ProjectCardView}
 */
const viewProjectCardMediaImage = (props) => (attr, _) => {
  const alt = props.project?.imageAlt;
  const src = props.project?.imageSrc?.[0] ?? " ";

  return viewImage({ src, alt })(
    { ...attr, class: "project-card-media-image" },
    []
  );
};

HEAD.push(
  tag("style", {}, [
    text(`
      .project-card-media-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    `),
  ])
);

/**
 * @type {import("../props").ProjectCardView}
 */
const viewProjectCardMediaGradient = (_) => (attr, _) => {
  return tag("div", { ...attr, class: "project-card-media-gradient" }, []);
};

HEAD.push(
  tag("style", {}, [
    text(`
      .project-card-media-gradient {
        width: 100%;
        height: 100%;
        background: linear-gradient(to right bottom, #2196f3, #8e24aa);
      }
    `),
  ])
);

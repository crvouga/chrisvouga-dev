// @ts-check

import { tag, text } from "../../../library/html/index.js";
import { HEAD } from "../../../ui/head.js";
import { viewImage } from "../../../ui/image.js";

/**
 * @type {import("../props.js").ProjectCardView}
 */
export const viewProjectCardMediaImage = (props) => {
  const src = props.project?.imageSrc?.[0];
  if (src) {
    return viewProjectCardMediaImageMain(props);
  }
  return viewProjectCardMediaGradient(props);
};

/**
 * @type {import("../props.js").ProjectCardView}
 */
const viewProjectCardMediaImageMain = (props) => (attr, _) => {
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
 * @type {import("../props.js").ProjectCardView}
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

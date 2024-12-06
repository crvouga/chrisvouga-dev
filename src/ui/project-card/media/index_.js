// @ts-check

import { t } from "../../../elem";

/**
 * @type {import("../props").ProjectCardView}
 */
export const viewProjectCardMedia = (props) => (attr, children) => {
  return t(
    "div",
    {
      ...attr,
      style: {
        width: "100%",
        "aspect-ratio": "16 / 9",
        overflow: "hidden",
      },
    },
    [viewProjectCardMediaContent(props)({}, []), ...(children ?? [])]
  );
};

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
  return t(
    "img",
    {
      ...attr,
      src,
      alt,
      style: {
        width: "100%",
        height: "100%",
        "object-fit": "cover",
      },
    },
    []
  );
};

/**
 * @type {import("../props").ProjectCardView}
 */
const viewProjectCardMediaGradient = (_) => (attr, _) => {
  return t(
    "div",
    {
      ...attr,
      style: {
        width: "100%",
        height: "100%",
        background: "linear-gradient(to right bottom, #2196f3, #8e24aa)",
      },
    },
    []
  );
};

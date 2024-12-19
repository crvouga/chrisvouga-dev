import { tag, text } from "../../library/html/index.js";
import { HEAD } from "../../ui/head.js";
import { THEME } from "../../ui/theme.js";

/**
 * @type {import("../../library/html/index.js").ViewWithProps<{ education: import("../../content/education.js").Education }>}
 */
export const viewEducationCardImage = (props) => (_a, _c) => {
  return tag("img", {
    src: props.education.imageSrc,
    alt: props.education.institutionName,
    class: "education-card-image",
  });
};

HEAD.push(
  tag("style", {}, [
    text(`
      .education-card-image {
        aspect-ratio: 16 / 9;
        overflow: hidden;
        flex-shrink: 0;
        width: 100%;
        border-bottom: 1px solid ${THEME.colors.paperBorder};
      }
    `),
  ])
);

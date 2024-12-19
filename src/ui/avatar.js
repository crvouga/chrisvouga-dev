import { tag, text } from "src/library/html/index.js";
import { HEAD } from "src/ui/head.js";
import { viewImage } from "src/ui/image.js";

/**
 * @type {import("src/library/html/index.js").ViewWithProps<{src:string; alt: string}>}
 */
export const viewAvatar = (props) => (attr, children) => {
  const className = ["avatar", attr?.class].filter(Boolean).join(" ");

  return viewImage(props)(
    {
      ...attr,
      class: className,
    },
    [...(children ?? [])]
  );
};

HEAD.push(
  tag("style", {}, [
    text(`
      .avatar {
        aspect-ratio: 1;
        border-radius: 50%;
        object-fit: cover;
        overflow: hidden;
      }
    `),
  ])
);

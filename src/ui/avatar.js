import { tag, text } from "../core/elem";
import { HEAD } from "./head";
import { viewImage } from "./image";

/**
 * @type {import("../core/elem").ViewWithProps<{src:string; alt: string}>}
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

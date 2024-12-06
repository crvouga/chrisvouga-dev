import { ensureObject } from "../elem";
import { viewImage } from "./image";

/**
 * @type {import("../elem").View<{src:string; alt: string}>}
 */
export const viewAvatar = (props) => (attr, children) => {
  return viewImage(props)(
    {
      ...attr,
      style: {
        "aspect-ratio": "1",
        "border-radius": "50%",
        "object-fit": "cover",
        overflow: "hidden",
        ...ensureObject(attr?.style),
      },
    },
    [...(children ?? [])]
  );
};

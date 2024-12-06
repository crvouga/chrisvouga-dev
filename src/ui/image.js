import { ensureObject, fragment, tag, text } from "../elem";
import { THEME } from "./theme";

/**
 * @type {import("../elem").View<{src: string, alt:string}>}
 */
export const viewImage = (props) => (attr, _) => {
  return fragment([
    tag(
      "img",
      {
        ...attr,
        src: props.src,
        alt: props.alt,
        style: {
          width: "100%",
          height: "100%",
          "object-fit": "cover",
          display: "block",
          "background-color": THEME.colors.skeleton,
          ...ensureObject(attr?.style),
        },
        class: "animate-pulse",
        onload: "setTimeout(() => this.classList.remove('animate-pulse'), 50)",
      },
      []
    ),
    tag("style", {}, [
      text(`
            .animate-pulse {
                animation: pulse 1.5s infinite;
            }
            
            @keyframes pulse {
                0%, 100% {
                    opacity: 0.5;
                }
                50% {
                    opacity: 1;
                }
            }
        `),
    ]),
  ]);
};

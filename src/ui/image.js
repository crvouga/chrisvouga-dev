import { fragment, tag, text } from "src/library/html";
import { HEAD } from "./head";
import { THEME } from "./theme";

/**
 * @type {import("src/library/html").ViewWithProps<{src: string, alt:string}>}
 */
export const viewImage = (props) => (attr, _) => {
  return fragment([
    tag(
      "img",
      {
        ...attr,
        src: props.src,
        alt: props.alt,
        class: ["image animate-pulse", attr?.class].filter(Boolean).join(" "),
        onload: "onImageLoad(event)",
      },
      []
    ),
  ]);
};

HEAD.push(
  tag("script", {}, [
    text(`
      function onImageLoad(e) {
        e.target.classList.remove('animate-pulse');
      }
      `),
  ])
);

HEAD.push(
  tag("style", {}, [
    text(`
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      background-color: ${THEME.colors.skeleton};
    }
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
  ])
);

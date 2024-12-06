import { topicToImageSrc, topicToName } from "../../../../content";
import { tag } from "../../../elem";
import { viewAvatar } from "../../avatar";
import { viewChip } from "../../chip";
import { unit } from "../../theme";

/**
 * @type {import("../props").ProjectCardView}
 */
export const viewProjectCardContentChips = (props) => () => {
  return tag(
    "div",
    {
      style: {
        display: "flex",
        "flex-wrap": "wrap",
        gap: unit(1),
        padding: `${unit(1)} 0px`,
      },
    },
    [
      ...props.project.topics.sort().map((topic) => {
        const src = topicToImageSrc[topic];
        return viewChip({
          size: "sm",
          startDecorator: viewAvatar({ src, alt: topic }),
          variant: "outlined",
          text: topicToName[topic],
        })();
      }),
    ]
  );
};

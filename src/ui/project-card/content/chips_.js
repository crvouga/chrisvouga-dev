import { topicToImageSrc, topicToName } from "../../../../content";
import { tag, text } from "../../../core/elem";
import { viewAvatar } from "../../avatar";
import { viewChip } from "../../chip";
import { HEAD } from "../../head";
import { unit } from "../../theme";

/**
 * @type {import("../props").ProjectCardView}
 */
export const viewProjectCardContentChips = (props) => () => {
  return tag("div", { class: "project-card-content-chips" }, [
    ...props.project.topics.sort().map((topic) => {
      const src = topicToImageSrc[topic];
      return viewChip({
        size: "sm",
        startDecorator: viewAvatar({ src, alt: topic }),
        variant: "outlined",
        text: topicToName[topic],
      })();
    }),
  ]);
};

HEAD.push(
  tag("style", {}, [
    text(`
      .project-card-content-chips {
        display: flex;
        flex-wrap: wrap;
        gap: ${unit(1)};
        padding: ${unit(1)} 0px;
      }
    `),
  ])
);

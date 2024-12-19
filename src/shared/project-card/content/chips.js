import { topicToImageSrc, topicToName } from "src/content/topic.js";
import { tag, text } from "src/library/html/index.js";
import { viewAvatar } from "src/ui/avatar.js";
import { viewChip } from "src/ui/chip.js";
import { HEAD } from "src/ui/head.js";
import { unit } from "src/ui/theme.js";

/**
 * @type {import("src/shared/project-card/props.js").ProjectCardView}
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

import { tag, text } from "src/library/html";
import { topicToImageSrc, topicToName } from "src/content/topic";
import { viewAvatar } from "src/ui/avatar";
import { viewChip } from "src/ui/chip";
import { HEAD } from "src/ui/head";
import { unit } from "src/ui/theme";

/**
 * @type {import("src/shared/project-card/props").ProjectCardView}
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

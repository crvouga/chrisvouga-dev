import { data } from "../../../content";
import { tag, text } from "../../core/elem";
import { viewButton } from "../../ui/button";
import { viewGrid, viewGridItem } from "../../ui/grid";
import { HEAD } from "../../ui/head";
import { viewProjectCard } from "../../ui/project-card/index_";
import { viewSection } from "../../ui/section";
import { unit } from "../../ui/theme";

const MAX_CARD_COUNT = 9;
const HIDDEN_CARD_COUNT = data.sideProjects.length - MAX_CARD_COUNT;

/**
 * @type {import("../../core/elem").View}
 */
export const viewSideProjectsSection = () => {
  const namespace = "toggle-see-more--";
  const hiddenCardClass = `${namespace}item-hidden`;
  const seeMoreButtonId = `${namespace}see-more-button`;
  const seeLessButtonId = `${namespace}see-less-button`;
  //
  const hiddenCardSelector = `.${hiddenCardClass}`;
  const seeMoreSelector = `#${seeMoreButtonId}`;
  const seeLessSelector = `#${seeLessButtonId}`;

  return viewSection({
    title: "Side Projects",
  })({}, [
    tag("script", {}, [
      text(`       
        const hiddenCardSelector = '${hiddenCardSelector}';
        const seeMoreSelector = '${seeMoreSelector}';
        const seeLessSelector = '${seeLessSelector}';
        
        let isExpanded = false;
        
        function onClickedToggle(event) {
          isExpanded = !isExpanded;

          const seeMoreButton = document.querySelector(seeMoreSelector)
          const seeLessButton = document.querySelector(seeLessSelector)
          const hiddenCards = Array.from(document.querySelectorAll(hiddenCardSelector))

          if(seeMoreButton) seeMoreButton.style.display = isExpanded ? 'none' : 'block';
          if(seeLessButton) seeLessButton.style.display = isExpanded ? 'block' : 'none';
          if(hiddenCards){
            hiddenCards.forEach((card) => {
              card.style.display = isExpanded ? 'block' : 'none';
            });
          }
        };
      `),
    ]),

    viewGrid(
      {
        class: "side-projects-grid",
      },
      data.sideProjects.map((project, index) =>
        viewGridItem(
          index >= MAX_CARD_COUNT
            ? {
                class: hiddenCardClass,
                style: {
                  display: "none",
                },
              }
            : {},
          [viewProjectCard({ project })()]
        )
      )
    ),

    tag(
      "div",
      {
        class: "side-projects-buttons",
      },
      [
        viewButton({
          disabled: false,
          size: "lg",
          startDecorator: null,
          tag: "button",
          text: `See ${HIDDEN_CARD_COUNT.toLocaleString()} more`,
          variant: "soft",
        })({
          style: {
            width: "fit-content",
          },
          onclick: "onClickedToggle(event)",
          id: seeMoreButtonId,
        }),

        viewButton({
          disabled: false,
          size: "lg",
          startDecorator: null,
          tag: "button",
          text: "See less",
          variant: "soft",
        })({
          style: {
            width: "fit-content",
            display: "none",
          },
          id: seeLessButtonId,
          onclick: "onClickedToggle(event)",
        }),
      ]
    ),
  ]);
};

HEAD.push(
  tag("style", {}, [
    text(`
      .side-projects-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: ${unit(3)};
      }
    `),
  ])
);

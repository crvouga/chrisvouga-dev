import { data } from "src/content";
import { tag, text } from "src/library/html";
import { viewButton } from "src/ui/button";
import { viewGrid, viewGridItem } from "src/ui/grid";
import { HEAD } from "src/ui/head";
import { viewProjectCard } from "src/shared/project-card";
import { viewSection } from "src/shared/section";
import { unit } from "src/ui/theme";
import { viewGridCollapsible } from "src/ui/grid-collapsible";

const MAX_VISIBLE_CARD_COUNT = 6;
const HIDDEN_CARD_COUNT = data.sideProjects.length - MAX_VISIBLE_CARD_COUNT;

/**
 * @type {import("src/library/html").View}
 */
export const viewSideProjectsSection = () => {
  return viewSection({
    title: "Side Projects",
  })({}, [
    viewGridCollapsible({
      children: data.sideProjects.map((project) =>
        viewProjectCard({ project })()
      ),
      namespace: "side-projects-section",
    })(),
  ]);
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
          index >= MAX_VISIBLE_CARD_COUNT
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
          variant: "contained",
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
          variant: "contained",
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

import { tag, text } from "src/library/html";
import { viewButton } from "src/ui/button";
import { viewGrid, viewGridItem } from "src/ui/grid";
import { HEAD } from "src/ui/head";
import { unit } from "src/ui/theme";

const MAX_VISIBLE_CARD_COUNT = 3;

/**
 * @type {import("src/library/html").ViewWithProps<{jsVarSafeNamespace: string, children: import("src/library/html").Html[]}>}
 */
export const viewGridCollapsible = (props) => () => {
  const namespace = `${props.jsVarSafeNamespace}--toggle-see-more--`;
  const rootId = `${namespace}root`;
  const hiddenCardClass = `${namespace}item-hidden`;
  const seeMoreButtonId = `${namespace}see-more-button`;
  const seeLessButtonId = `${namespace}see-less-button`;
  //
  const hiddenCardSelector = `.${hiddenCardClass}`;
  const seeMoreSelector = `#${seeMoreButtonId}`;
  const seeLessSelector = `#${seeLessButtonId}`;
  //
  const hiddenCardCount = Math.max(
    props.children.length - MAX_VISIBLE_CARD_COUNT,
    0
  );

  const onClickToggleName = `${props.jsVarSafeNamespace}OnClickToggle`;

  return tag(
    "div",
    {
      id: rootId,
    },
    [
      tag("script", {}, [
        text(`       
        function ${onClickToggleName}(event) {
          const root = document.querySelector('#${rootId}');
          const isExpandedCurrent = root.getAttribute('data-expanded') === 'true';
          const isExpandedNew = !isExpandedCurrent;
          root.setAttribute('data-expanded', isExpandedNew);
          
          const seeMoreButton = document.querySelector('${seeMoreSelector}');
          const seeLessButton = document.querySelector('${seeLessSelector}');
          const hiddenCards = Array.from(document.querySelectorAll('${hiddenCardSelector}'));

          if(seeMoreButton) {
            seeMoreButton.style.display = isExpandedNew ? 'none' : 'block';
          }

          if(seeLessButton) {
            seeLessButton.style.display = isExpandedNew ? 'block' : 'none';
          }

          if(hiddenCards){
            hiddenCards.forEach((card) => {
              card.style.display = isExpandedNew ? 'block' : 'none';
            });
          }
        };
      `),
      ]),

      viewGrid(
        {},
        props.children.map((child, index) =>
          viewGridItem(
            index >= MAX_VISIBLE_CARD_COUNT
              ? {
                  class: hiddenCardClass,
                  style: {
                    display: "none",
                  },
                }
              : {},
            [child]
          )
        )
      ),

      tag(
        "div",
        {
          class: "grid-collapsible-buttons",
        },
        [
          viewButton({
            disabled: false,
            size: "lg",
            startDecorator: null,
            tag: "button",
            text: `See ${hiddenCardCount.toLocaleString()} more`,
            variant: "contained",
          })({
            style: {
              width: "fit-content",
            },
            onclick: `${onClickToggleName}(event)`,
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
            onclick: `${onClickToggleName}(event)`,
          }),
        ]
      ),
    ]
  );
};

HEAD.push(
  tag("style", {}, [
    text(`
      .grid-collapsible-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: ${unit(3)};
      }
    `),
  ])
);

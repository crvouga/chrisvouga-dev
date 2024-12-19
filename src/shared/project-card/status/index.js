import { tag } from "src/library/html/index.js";
import { infoOutline } from "src/ui/icons.js";
import { THEME, unit } from "src/ui/theme.js";
import { viewTypography } from "src/ui/typography.js";

/**
 * @type {import("src/shared/project-card/props.js").ProjectCardView}
 */
export const viewProjectCardStatus = (props) => (_a, _c) => {
  /**
   * @type {import("src/library/html/index.js").Html[]}
   */
  const children = [];

  if (props.project.deployment.t === "not-deployed-anymore") {
    children.push(
      viewProjectCardStatusSingle({
        ...props,
        text: "Project is no longer deployed",
      })({})
    );
  }

  if (props.project.deployment.t === "private") {
    children.push(
      viewProjectCardStatusSingle({
        ...props,
        text: "Deployment is private",
      })({})
    );
  }

  if (props.project.code.t === "private") {
    children.push(
      viewProjectCardStatusSingle({
        ...props,
        text: "Source code is private",
      })({})
    );
  }

  return tag(
    "div",
    {
      style: {
        display: "flex",
        "flex-direction": "column",
        gap: unit(1),
        width: "100%",
        "flex-shrink": 0,
      },
    },
    children
  );
};

/**
 * @type {import("src/library/html/index.js").ViewWithProps<import("src/shared/project-card/props.js").ProjectCardProps & {text:string}>}
 */
export const viewProjectCardStatusSingle = (props) => (_a, _c) => {
  return tag(
    "div",
    {
      style: {
        display: "flex",
        gap: unit(1),
        "align-items": "center",
      },
    },
    [
      infoOutline({
        style: {
          width: 18,
          height: 18,
          fill: THEME.colors.warning,
        },
      }),
      viewTypography({
        level: "body-xs",
        text: props.text,
      })({
        style: { color: THEME.colors.warning },
      }),
    ]
  );
};

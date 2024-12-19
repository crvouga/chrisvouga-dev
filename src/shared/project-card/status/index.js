import { tag } from "../../../library/html/index.js";
import { infoOutline } from "../../../ui/icons.js";
import { unit, THEME } from "../../../ui/theme.js";
import { viewTypography } from "../../../ui/typography.js";

/**
 * @type {import("../props.js").ProjectCardView}
 */
export const viewProjectCardStatus = (props) => (_a, _c) => {
  /**
   * @type {import("../../../library/html/index.js").Html[]}
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
 * @type {import("../../../library/html/index.js").ViewWithProps<import("../props.js").ProjectCardProps & {text:string}>}
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

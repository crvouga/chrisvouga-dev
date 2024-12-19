import { viewButton } from "src/ui/button.js";
import { viewCardActions } from "src/ui/card.js";
import { code, web } from "src/ui/icons.js";

/**
 * @type {import("src/shared/project-card/props.js").ProjectCardView}
 */
export const viewProjectCardActions = (props) => () => {
  return viewCardActions({}, [
    viewButton({
      tag: "a",
      startDecorator: web,
      variant: "soft",
      disabled: props.project.deployment.t !== "public",
      text: "Deployment",
      size: "sm",
    })({
      href:
        props.project.deployment.t === "public"
          ? props.project.deployment.url
          : " ",
      target: "_blank",
      rel: "noreferrer noopener",
    }),
    viewButton({
      tag: "a",
      startDecorator: code,
      variant: "plain",
      disabled: props.project.code.t !== "public",
      text: "Source Code",
      size: "sm",
    })({
      href: props.project.code.t === "public" ? props.project.code.url : " ",
      target: "_blank",
      rel: "noreferrer noopener",
    }),
  ]);
};

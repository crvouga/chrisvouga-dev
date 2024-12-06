// @ts-check

import { t, text } from "./elem";
import { viewSideProjects } from "./sections/side-projects/index_";
import { viewWorkProjectsSection } from "./sections/work-projects_";
import { viewWorkSection } from "./sections/work_";
import { THEME } from "./ui/theme";

/**
 * @returns {import("./elem").Elem}
 */
export function viewApp() {
  return t("html", { lang: "en" }, [
    t("head", {}, [
      t("meta", { charset: "UTF-8" }, []),
      t(
        "meta",
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        []
      ),
      t("link", { rel: "shortcut icon", href: "/favicon.ico" }, []),
      t("link", { rel: "icon", href: "/favicon.ico" }, []),
      t("title", {}, [text("chrisvouga.dev")]),
      t("style", {}, [
        text(
          `* { font-family: Inter, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; color: ${THEME.colors.text};}`
        ),
      ]),
    ]),
    t("body", { style: { "background-color": "#000" } }, [
      t(
        "main",
        {
          style: {
            width: "min(100%, 1150px)",
            margin: "auto",
            display: "flex",
            "align-items": "items-center",
            "flex-direction": "column",
            gap: "72px",
            padding: "72px 12px",
            overflow: "hidden",
          },
        },
        [viewWorkSection(), viewWorkProjectsSection(), viewSideProjects()]
      ),
    ]),
  ]);
}

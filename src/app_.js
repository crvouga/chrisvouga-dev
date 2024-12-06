// @ts-check

import { viewSideProjects } from "./sections/side-projects/index_";
import { viewWorkProjectsSection } from "./sections/work-projects_";
import { viewWorkSection } from "./sections/work_";
import { THEME } from "./ui/theme";

export function viewApp() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <title>chrisvouga.dev</title>
      <style>
      * {
        font-family: Inter, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: ${THEME.text};
      }
      </style>
    </head>
    <body style="background-color: #000">
      <main style="width: 100%; max-width: 1150px; margin: auto; display: flex; align-items: items-center; flex-direction: column; gap: 32px; padding: 64px 12px; overflow: hidden;">
        ${viewWorkSection()}
        ${viewWorkProjectsSection()}
        ${viewSideProjects()}
      </main>
    </body>
  `;
}

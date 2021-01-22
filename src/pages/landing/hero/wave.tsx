import { Theme } from "@material-ui/core/styles";

export const themeToFill = (theme: Theme) =>
  theme.palette.background.default
    //why? "#" is a reserved character in a url
    .replace("#", "%23");

export const createBackgroundUrl = (theme: Theme) =>
  `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1123 258'><path d='M1124,2c0,0 0,256 0,256l-1125,0l0,-48c0,0 16,5 55,5c116,0 197,-92 325,-92c121,0 114,46 254,46c140,0 214,-167 572,-166Z' style='fill: ${themeToFill(
    theme
  )}' /></svg>`;

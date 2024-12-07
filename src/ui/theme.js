export const THEME = {
  colors: {
    text: "#F0F4F8",
    neutralMuted: "rgb(159, 166, 173)",
    paper: "#0B0D0E",
    paperBorder: "#32383e",
    neutral: "#CDD7E1",
    borderLight: "#32383e",
    skeleton: "#2D333B",
    warning: "#EA9A3E",
    primary300: "rgb(151, 195, 240)",
    primary500: "rgb(11, 107, 203)",
    //
    softBackground: "rgb(10, 39, 68)",
    softBackgroundHover: "rgb(18, 70, 123)",
    softBackgroundActive: "rgb(24, 94, 165)",
    softBackgroundDisabled: "rgb(23, 26, 28)",
    softText: "rgb(199, 223, 247)",
    softTextHover: "rgb(199, 223, 247)",
    softTextActive: "rgb(227, 239, 251)",
    softTextDisabled: "rgb(99, 107, 116)",
    //
    plainBackground: "transparent",
    plainBackgroundHover: "rgb(10, 39, 68)",
    plainBackgroundActive: "rgb(18, 70, 123)",
    plainText: "rgb(151, 195, 240)",
    plainTextHover: "rgb(199, 223, 247)",
    plainTextActive: "rgb(227, 239, 251)",
    plainTextDisabled: "rgb(99, 107, 116)",
    //
    containedBackground: "rgb(11, 107, 203)",
    containedBackgroundHover: "rgb(18, 70, 123)",
    containedBackgroundActive: "rgb(18, 70, 123)",
    containedText: "rgb(255, 255, 255)",
    containedTextHover: "rgb(255, 255, 255)",
    containedTextActive: "rgb(255, 255, 255)",
    containedTextDisabled: "rgb(99, 107, 116)",
  },
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "900px",
  },
};

/**
 *
 * @param {number} amount
 * @returns {string}
 */
export const unit = (amount) => `${amount * 8}px`;

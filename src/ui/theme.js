export const THEME = {
  colors: {
    text: "#F0F4F8",
    paper: "#0B0D0E",
    paperBorder: "#32383e",
    body: "#CDD7E1",
    borderLight: "#32383e",
    skeleton: "#2D333B",
  },
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "960px",
  },
};

/**
 *
 * @param {number} amount
 * @returns {string}
 */
export const unit = (amount) => `${amount * 8}px`;

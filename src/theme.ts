import { createTheme, responsiveFontSizes } from "@mui/material";
import { green } from "@mui/material/colors";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: green,
    },
    components: {
      MuiButton: {
        defaultProps: {},
      },
    },
  })
);

export default theme;

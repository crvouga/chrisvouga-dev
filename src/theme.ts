import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: '"Montserrat", sans-serif',
    },
    palette: {
      mode: "dark",
      primary: blue,
    },
    components: {
      MuiTooltip: {
        defaultProps: {
          enterTouchDelay: 0,
        },
      },
      MuiButton: {
        defaultProps: {},
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 2,
        },
      },
    },
  })
);

export default theme;

import { blue, green, purple, red, yellow } from "@material-ui/core/colors";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuItem from "@material-ui/core/MenuItem";
import Select, { SelectProps } from "@material-ui/core/Select";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { useThemeStateContext } from "./theme-state";

export type ThemeColor = "red" | "blue" | "green" | "purple" | "yellow";

export const THEME_COLORS: ThemeColor[] = [
  "red",
  "blue",
  "green",
  "purple",
  "yellow",
];

export const castThemeColor = (themeColor: any): ThemeColor => {
  if (
    themeColor === "red" ||
    themeColor === "blue" ||
    themeColor === "green" ||
    themeColor === "purple" ||
    themeColor === "yellow"
  ) {
    return themeColor;
  }

  return "green";
};

export const themeColorToColor = (themeColor: ThemeColor) => {
  switch (themeColor) {
    case "blue":
      return blue;

    case "green":
      return green;

    case "purple":
      return purple;

    case "red":
      return red;

    case "yellow":
      return yellow;

    default:
      return green;
  }
};

export const ThemeColorSelect = (props: SelectProps) => {
  const themeState = useThemeStateContext();
  return (
    <Select
      id="theme-color-select"
      variant="outlined"
      value={themeState.themeColor}
      onChange={(event) => {
        const value = event.target.value;
        const themeColor = castThemeColor(value);
        themeState.setThemeColor(themeColor);
      }}
      {...props}
    >
      {THEME_COLORS.map((themeColor) => (
        <MenuItem key={themeColor} value={themeColor}>
          <ListItemIcon>
            <FiberManualRecordIcon
              style={{ color: themeColorToColor(themeColor)[500] }}
            />
          </ListItemIcon>

          {themeColor}
        </MenuItem>
      ))}
    </Select>
  );
};

import { blue, green, purple, red, yellow } from "@material-ui/core/colors";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from "@material-ui/lab/ToggleButtonGroup";
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

export const ThemeColorSelect = (props: ToggleButtonGroupProps) => {
  const themeState = useThemeStateContext();

  return (
    <ToggleButtonGroup
      value={themeState.themeColor}
      exclusive
      onChange={(_event, value) => {
        const themeType = castThemeColor(value);
        themeState.setThemeColor(themeType);
      }}
      {...props}
    >
      {THEME_COLORS.map((themeColor) => (
        <ToggleButton key={themeColor} value={themeColor}>
          <FiberManualRecordIcon
            style={{ color: themeColorToColor(themeColor)[500] }}
          />
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

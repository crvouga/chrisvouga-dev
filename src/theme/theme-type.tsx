import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuItem from "@material-ui/core/MenuItem";
import Select, { SelectProps } from "@material-ui/core/Select";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { useThemeStateContext } from "./theme-state";

export type ThemeType = "light" | "dark" | "system";

export const THEME_TYPES: ThemeType[] = ["light", "dark", "system"];

export const themeTypeToIcon = (themeType: ThemeType) => {
  switch (themeType) {
    case "system":
      return <DesktopMacIcon />;
    case "light":
      return <WbSunnyIcon />;
    case "dark":
      return <Brightness2Icon />;
  }
};

export const castThemeType = (themeType: any): ThemeType => {
  if (themeType === "light" || themeType === "dark" || themeType === "system") {
    return themeType;
  }
  return "system";
};

export const ThemeTypeSelect = (props: SelectProps) => {
  const themeState = useThemeStateContext();
  return (
    <Select
      id="theme-type-select"
      variant="outlined"
      value={themeState.themeType}
      onChange={(event) => {
        const value = event.target.value;
        const themeType = castThemeType(value);
        themeState.setThemeType(themeType);
      }}
      {...props}
    >
      {THEME_TYPES.map((themeType) => (
        <MenuItem key={themeType} value={themeType}>
          <ListItemIcon>{themeTypeToIcon(themeType)}</ListItemIcon>
          {themeType}
        </MenuItem>
      ))}
    </Select>
  );
};

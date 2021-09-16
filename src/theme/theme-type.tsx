import Brightness2Icon from "@material-ui/icons/Brightness2";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from "@material-ui/lab/ToggleButtonGroup";
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

export const ThemeTypeSelect = (props: ToggleButtonGroupProps) => {
  const themeState = useThemeStateContext();

  return (
    <ToggleButtonGroup
      value={themeState.themeType}
      exclusive
      onChange={(_event, value) => {
        const themeType = castThemeType(value);
        themeState.setThemeType(themeType);
      }}
      {...props}
    >
      {THEME_TYPES.map((themeType) => (
        <ToggleButton key={themeType} value={themeType}>
          {themeTypeToIcon(themeType)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

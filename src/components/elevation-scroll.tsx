//source: https://material-ui.com/components/app-bar/#app-bar
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react";

interface Props {
  children: React.ReactElement;
}

export const ElevationScroll = (props: Props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

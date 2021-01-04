import React from "react";

declare module "react-animated-term" {
  interface IReactAnimatedTerminalLines {
    text: string;
    cmd?: boolean;
    repeat?: boolean;
    repeatCount?: 5;
    frames?: {
      text: string;
      delay: number;
    }[];
  }

  interface IReactAnimatedTerminalProps {
    lines: IReactAnimatedTerminalLines[];
    interval: number;
    white: boolean;
    height: number;
  }

  export default function ReactAnimatedTerminal(
    props: IReactAnimatedTerminalProps
  ): React.ReactNode;
}

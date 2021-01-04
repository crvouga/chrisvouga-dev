declare module "react-animated-term" {
  interface IReactAnimatedTerminalLines {
    text?: string;
    cmd?: boolean;
    repeat?: boolean;
    repeatCount?: number;
    frames?: {
      text?: string;
      delay?: number;
    }[];
  }

  interface IReactAnimatedTerminalProps {
    lines?: IReactAnimatedTerminalLines[];
    interval?: number;
    white?: boolean;
    height?: number;
  }

  export default function ReactAnimatedTerminal(
    props: IReactAnimatedTerminalProps
  ): any;
}

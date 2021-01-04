import ReactAnimatedTerminal from "react-animated-term";
import "react-animated-term/dist/react-animated-term.css";
import { writeGreeter } from "./terminal-lines";

export const Terminal = () => {
  return (
    <ReactAnimatedTerminal
      lines={writeGreeter}
      height={writeGreeter.length * 100}
    />
  );
};

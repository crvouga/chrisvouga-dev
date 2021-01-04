// import ReactAnimatedTerminal from "react-animated-term";
// import "react-animated-term/dist/react-animated-term.css";

// const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
// const termLines = [
//   {
//     text: "node example.js",
//     cmd: true,
//     delay: 80,
//   },
//   {
//     text: "✔ Loaded app",
//     cmd: false,
//     repeat: true,
//     repeatCount: 5,
//     frames: spinner.map((spinner) => {
//       return {
//         text: spinner + " Loading app",
//         delay: 40,
//       };
//     }),
//   },
//   {
//     text: "",
//     cmd: true,
//   },
// ];

export const Terminal = () => {
  return null; //<ReactAnimatedTerminal lines={termLines} interval={80} />;
};

import "react-animated-term/dist/react-animated-term.css";

const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

export const termLines = [
  {
    text: "node example.js",
    cmd: true,
    delay: 80,
  },
  {
    text: "✔ Loaded app",
    cmd: false,
    repeat: true,
    repeatCount: 5,
    frames: spinner.map((spinner) => {
      return {
        text: spinner + " Loading app",
        delay: 40,
      };
    }),
  },
  {
    text: "",
    cmd: true,
  },
];

const createProgressFrames = (
  frameCount: number,
  progressCount: number,
  maxWidth: number,
  delay: number
) => {
  const frames = [];
  const step = Math.ceil(progressCount / frameCount);

  for (let i = 0; i < progressCount; i += step) {
    const progressText = ` ${i}/${progressCount}`;
    const filledLen = progressText.length + 2;
    const intervalCount = maxWidth - filledLen;

    const filledCount = Math.ceil((i / progressCount) * intervalCount);
    const unfilledCount = intervalCount - filledCount;
    const frame = `[${"#".repeat(filledCount)}${"-".repeat(
      unfilledCount
    )}] ${progressText}`;

    frames.push({
      text: frame,
      delay,
    });
  }

  return frames;
};

export const progressLines = [
  {
    text: "yarn",
    cmd: true,
    delay: 80,
  },
  {
    text: "yarn install v1.6.0",
    cmd: false,
    delay: 80,
  },
  {
    text: "[1/4] 🔍  Resolving packages...",
    cmd: false,
    delay: 80,
  },
  {
    text: "[2/4] 🚚  Fetching packages...",
    cmd: false,
  },
  {
    text: "[3/4] 🔗  Linking dependencies...",
    cmd: false,
    frames: createProgressFrames(250, 1000, 60, 5),
  },
  {
    text: "[4/4] 📃  Building fresh packages...",
    cmd: false,
    frames: createProgressFrames(100, 2000, 60, 5),
  },
  {
    text: "✨  Done in 4.01s.",
    cmd: false,
  },
  {
    text: "",
    cmd: true,
  },
];

const createTypingFrames = ({
  appendingText,
  initialText,
  delay,
}: {
  appendingText: string;
  initialText: string;
  delay?: number;
}) => {
  const frames = [];
  let currentText = initialText;
  for (const character of appendingText) {
    frames.push({
      text: currentText,
      delay: delay || 0.1,
    });
    currentText += character;
  }
  return frames;
};

export const writeGreeter = [
  {
    text: "node",
    cmd: true,
    delay: 15,
  },
  {
    text: 'Welcome to Node.js v12.18.2\nType ".help" for more information.',
  },
  {
    frames: createTypingFrames({
      appendingText: "const me = { ",
      initialText: "> ",
    }),
  },
  {
    frames: createTypingFrames({
      appendingText: `name: "Chris Vouga", `,
      initialText: "... ",
    }),
  },
  {
    frames: createTypingFrames({
      appendingText: `occupation: "Web Developer", `,
      initialText: "... ",
      delay: 2,
    }),
  },
  {
    frames: createTypingFrames({
      appendingText: `} `,
      initialText: "... ",
    }),
  },
  {
    text: "undefined",
  },
  {
    frames: createTypingFrames({
      appendingText: `function greet(person) { `,
      initialText: "> ",
    }),
  },
  {
    frames: createTypingFrames({
      appendingText:
        "return `Hello 👋, I'm {person.name}, and I'm a ${person.occupation}.` ",
      initialText: "... ",
    }),
  },
  {
    frames: createTypingFrames({
      initialText: "... ",
      appendingText: "} ",
    }),
  },
  {
    text: "undefined",
  },
  {
    frames: createTypingFrames({
      initialText: "> ",
      appendingText: "console.log(greet(me))",
    }),
  },
  {
    frames: createTypingFrames({
      initialText: "> ",
      appendingText: "console.log(greet(me))",
    }),
  },
];

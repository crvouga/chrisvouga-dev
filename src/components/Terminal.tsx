import { useTheme } from "@material-ui/core";
import React from "react";
import ReactTerminal from "terminal-in-react";

import NodeEvalPlugin from "terminal-in-react-node-eval-plugin";
import pseudoFileSystemPlugin from "terminal-in-react-pseudo-file-system-plugin";

const FileSystemPlugin = pseudoFileSystemPlugin();

export const Terminal = () => {
  const theme = useTheme();

  return (
    <ReactTerminal
      style={{
        fontSize: "1.25em",
        // fontWeight: "bold",
      }}
      hideTopBar={false}
      actionHandlers={{
        handleMinimise: () => {},
        handleClose: () => {},
        handleMaximise: () => {},
      }}
      watchConsoleLogging={false}
      allowTabs={false}
      color={theme.palette.text.primary}
      outputColor={theme.palette.text.primary}
      barColor={theme.palette.background.paper}
      backgroundColor={theme.palette.background.paper}
      prompt={theme.palette.text.primary}
      // promptSymbol={"λ"}
      plugins={[
        FileSystemPlugin,
        {
          class: NodeEvalPlugin,
          config: {
            filesystem: FileSystemPlugin.displayName,
          },
        },
      ]}
    />
  );
};

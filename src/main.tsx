import { createRoot } from "react-dom/client";
import { Root } from "./root";

const container = document.getElementById("root");

if (!container) throw new Error("No container element found");

const root = createRoot(container);

root.render(<Root />);

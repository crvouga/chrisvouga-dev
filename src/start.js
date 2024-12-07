// @ts-check
import { viewApp } from "./app";
import { join } from "node:path";
import { render } from "./core/elem/render";

const PUBLIC_PATH = "./public";

const server = Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;
    const filePath = join(PUBLIC_PATH, pathname);

    const f = Bun.file(filePath);

    if (await f.exists()) {
      return new Response(f, {
        headers: { "Content-Type": Bun.file(filePath).type || "text/plain" },
      });
    }

    const elem = viewApp();
    const html = render(elem);
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`Server listening here ${server.url.toString()}`);

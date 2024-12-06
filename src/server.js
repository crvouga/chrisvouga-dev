// @ts-check
import { viewApp } from "./app_";
import { join } from "path";
import { render } from "./core/elem/render";

const PUBLIC_PATH = "./public";

const server = Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;
    console.log(`request ${pathname}`);
    const filePath = join(PUBLIC_PATH, pathname);

    const f = Bun.file(filePath);

    if (await f.exists()) {
      console.log(`Found file at ${filePath}`);
      return new Response(f, {
        headers: { "Content-Type": Bun.file(filePath).type || "text/plain" },
      });
    }

    const elem = viewApp();
    console.log(`Rendering app`, elem);
    const html = render(elem);
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`Server listening here ${server.url.toString()}`);

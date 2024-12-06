// @ts-check
import { viewApp } from "./app_";
import { join } from "path";

const PUBLIC_PATH = "./public";

const server = Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    console.log(`Request for ${pathname}`);

    const filePath = join(PUBLIC_PATH, pathname);

    console.log(`Looking for file at ${filePath}`);

    try {
      const f = Bun.file(filePath);

      if (await f.exists()) {
        console.log(`Found file at ${filePath}`);
        return new Response(f, {
          headers: { "Content-Type": Bun.file(filePath).type || "text/plain" },
        });
      }
      return new Response(viewApp(), {
        headers: { "Content-Type": "text/html" },
      });
    } catch {
      return new Response(viewApp(), {
        headers: { "Content-Type": "text/html" },
      });
    }
  },
});

console.log(`Server listening here ${server.url.toString()}`);

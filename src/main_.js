// @ts-check
import { viewApp } from "./app_";

const server = Bun.serve({
  fetch(_request) {
    const html = viewApp();
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(server.url);

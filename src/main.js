// @ts-check
import { viewApp } from "./app";
import { render } from "./library/html/render";
import { promises as fs } from "fs";
import { join } from "path";
import { readdir, rm, copyFile, mkdir } from "fs/promises";

const PUBLIC_PATH = "./public";
const DIST_PATH = "./dist";

/**
 * Deletes a directory and its contents.
 * @param {string} path - The path of the directory to delete.
 * @returns {Promise<void>}
 */
async function deleteDirectory(path) {
  await rm(path, { recursive: true, force: true });
}

/**
 * Copies the contents of a directory to another location.
 * @param {string} src - The source directory path.
 * @param {string} dest - The destination directory path.
 * @returns {Promise<void>}
 */
async function copyDirectory(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

/**
 * Builds the application by generating index.html and copying public files.
 * @returns {Promise<void>}
 */
async function build() {
  console.log("Building...");
  const start = Date.now();
  await deleteDirectory(DIST_PATH);
  await mkdir(DIST_PATH, { recursive: true });
  const elem = viewApp();
  const html = render(elem);
  const indexPath = join(DIST_PATH, "index.html");
  await fs.writeFile(indexPath, html, "utf8");
  await copyDirectory(PUBLIC_PATH, DIST_PATH);
  const end = Date.now();
  const seconds = ((end - start) / 1000).toFixed(2);
  console.log(`Built in ${seconds} seconds`);
}

build().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});

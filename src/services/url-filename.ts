export const urlToFilename = (url: string) =>
  Buffer.from(url).toString("base64");

export const filenameToUrl = (base64: string) =>
  Buffer.from(base64, "base64").toString("ascii");

export type Url = string & { Url: "Url" };

export const castUrl = (url: any): Url => {
  new URL(url);
  return url as Url;
};

export const encodeUrl = (url: string) => Buffer.from(url).toString("base64");

export const decodeUrl = (base64: string) =>
  Buffer.from(base64, "base64").toString("ascii");

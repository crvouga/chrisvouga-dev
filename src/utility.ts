export const getNodeEnv = (): "production" | "test" | "development" => {
  const nodeEnv = process.env.NODE_ENV;
  if (
    nodeEnv === "development" ||
    nodeEnv === "production" ||
    nodeEnv === "test"
  ) {
    return nodeEnv;
  }
  return "development";
};

export type Url = string & { type: "Url" };

export const castUrl = (url: any): Url => {
  new URL(url);
  return url as Url;
};

export const goTo = (url: string) => {
  window.location.href = url;
};

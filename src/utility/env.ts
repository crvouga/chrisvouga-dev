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

export const descend = <T>(keyfn: (x: T) => number) => (a: T, b: T) =>
  keyfn(b) - keyfn(a);

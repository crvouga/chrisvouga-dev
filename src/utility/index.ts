export * from "./env";
export * from "./url";

export const tuple = <T extends any[]>(...args: T): T => args;

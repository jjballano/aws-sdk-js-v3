import { Buffer } from "https://deno.land/std@0.111.0/node/buffer.ts";
import { ClientDefaultValues } from "./runtimeConfig.ts";

export const byteLength = (input: any) => {
  if (input === null || input === undefined) return 0;
  if (typeof input === "string") input = Buffer.from(input);
  if (typeof input.byteLength === "number") {
    return input.byteLength;
  } else if (typeof input.length === "number") {
    return input.length;
  } else if (typeof input.size === "number") {
    return input.size;
  } else if (typeof input.path === "string") {
    try {
      return ClientDefaultValues.lstatSync(input.path).size;
    } catch (error) {
      return undefined;
    }
  }
  return undefined;
};

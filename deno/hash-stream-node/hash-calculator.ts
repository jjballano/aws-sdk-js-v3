import { Buffer } from "https://deno.land/std@0.111.0/node/buffer.ts";
import { Hash } from "../types/mod.ts";
import { Writable, WritableOptions } from "https://deno.land/std@0.111.0/node/stream.ts";

export class HashCalculator extends Writable {
  constructor(public readonly hash: Hash, options?: WritableOptions) {
    super(options);
  }

  _write(chunk: Buffer, encoding: string, callback: (err?: Error) => void) {
    try {
      this.hash.update(chunk);
    } catch (err) {
      return callback(err);
    }
    callback();
  }
}

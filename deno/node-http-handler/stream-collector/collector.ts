import { Buffer } from "https://deno.land/std@0.111.0/node/buffer.ts";
import { Writable } from "https://deno.land/std@0.111.0/node/stream.ts";
export class Collector extends Writable {
  public readonly bufferedBytes: Buffer[] = [];
  _write(chunk: Buffer, encoding: string, callback: (err?: Error) => void) {
    this.bufferedBytes.push(chunk);
    callback();
  }
}

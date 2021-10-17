import { Buffer } from "https://deno.land/std@0.111.0/node/buffer.ts";
import { Readable } from "https://deno.land/std@0.111.0/node/stream.ts";
import { Buffer } from "https://deno.land/std@0.111.0/node/buffer.ts";

export async function* getDataReadable(data: Readable): AsyncGenerator<Buffer> {
  for await (const chunk of data) {
    // @ts-ignore
    yield Buffer.from(chunk);
  }
}

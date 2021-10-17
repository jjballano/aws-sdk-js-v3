import { Buffer } from "https://deno.land/std@0.111.0/node/buffer.ts";
import { Hash as IHash, SourceData } from "../types/mod.ts";
import { fromArrayBuffer, fromString, StringEncoding } from "../util-buffer-from/mod.ts";
import { Buffer } from "https://deno.land/std@0.111.0/node/buffer.ts";
import { createHash, createHmac, Hash as NodeHash, Hmac } from "https://deno.land/std@0.111.0/node/crypto.ts";

export class Hash implements IHash {
  private readonly hash: NodeHash | Hmac;

  constructor(algorithmIdentifier: string, secret?: SourceData) {
    this.hash = secret ? createHmac(algorithmIdentifier, castSourceData(secret)) : createHash(algorithmIdentifier);
  }

  update(toHash: SourceData, encoding?: "utf8" | "ascii" | "latin1"): void {
    this.hash.update(castSourceData(toHash, encoding));
  }

  digest(): Promise<Uint8Array> {
    return Promise.resolve(this.hash.digest());
  }
}

function castSourceData(toCast: SourceData, encoding?: StringEncoding): Buffer {
  if (Buffer.isBuffer(toCast)) {
    return toCast;
  }

  if (typeof toCast === "string") {
    return fromString(toCast, encoding);
  }

  if (ArrayBuffer.isView(toCast)) {
    return fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
  }

  return fromArrayBuffer(toCast);
}

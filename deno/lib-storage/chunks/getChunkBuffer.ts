import { Buffer } from "https://deno.land/std@0.111.0/node/buffer.ts";
import { RawDataPart } from "../Upload.ts";

export async function* getChunkBuffer(data: Buffer, partSize: number): AsyncGenerator<RawDataPart, void, undefined> {
  let partNumber = 1;
  let startByte = 0;
  let endByte = partSize;

  while (endByte < data.length) {
    yield {
      partNumber,
      data: data.slice(startByte, endByte),
    };
    partNumber += 1;
    startByte = endByte;
    endByte = startByte + partSize;
  }

  yield {
    partNumber,
    data: data.slice(startByte),
  };
}

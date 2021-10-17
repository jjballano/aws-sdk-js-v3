import { Buffer } from "https://deno.land/std@0.111.0/node/buffer.ts";
import { HttpRequest } from "../types/mod.ts";
import { Readable } from "https://deno.land/std@0.111.0/node/stream.ts";

export function writeRequestBody(httpRequest: ClientRequest | ClientHttp2Stream, request: HttpRequest) {
  const expect = request.headers["Expect"] || request.headers["expect"];
  if (expect === "100-continue") {
    httpRequest.on("continue", () => {
      writeBody(httpRequest, request.body);
    });
  } else {
    writeBody(httpRequest, request.body);
  }
}

function writeBody(
  httpRequest: ClientRequest | ClientHttp2Stream,
  body?: string | ArrayBuffer | ArrayBufferView | Readable | Uint8Array
) {
  if (body instanceof Readable) {
    // pipe automatically handles end
    body.pipe(httpRequest);
  } else if (body) {
    httpRequest.end(Buffer.from(body));
  } else {
    httpRequest.end();
  }
}

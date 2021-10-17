import { HeaderBag, HttpResponse } from "../types/mod.ts";
import { readFileSync } from "https://deno.land/std@0.111.0/node/fs.ts";
import { join } from "https://deno.land/std@0.111.0/node/path.ts";
import { Readable } from "https://deno.land/std@0.111.0/node/stream.ts";

const fixturesDir = join(__dirname, "..", "fixtures");

const setResponseHeaders = (response: ServerResponse, headers: HeaderBag) => {
  for (const [key, value] of Object.entries(headers)) {
    response.setHeader(key, value);
  }
};

const setResponseBody = (response: ServerResponse, body: Readable | string) => {
  if (body instanceof Readable) {
    body.pipe(response);
  } else {
    response.end(body);
  }
};

export const createResponseFunction =
  (httpResp: HttpResponse) => (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = httpResp.statusCode;
    setResponseHeaders(response, httpResp.headers);
    setResponseBody(response, httpResp.body);
  };

export const createResponseFunctionWithDelay =
  (httpResp: HttpResponse, delay: number) => (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = httpResp.statusCode;
    setResponseHeaders(response, httpResp.headers);
    setTimeout(() => setResponseBody(response, httpResp.body), delay);
  };

export const createContinueResponseFunction =
  (httpResp: HttpResponse) => (request: IncomingMessage, response: ServerResponse) => {
    response.writeContinue();
    setTimeout(() => {
      createResponseFunction(httpResp)(request, response);
    }, 100);
  };

export const createMockHttpsServer = (): HttpsServer => {
  const server = createHttpsServer({
    key: readFileSync(join(fixturesDir, "test-server-key.pem")),
    cert: readFileSync(join(fixturesDir, "test-server-cert.pem")),
  });
  return server;
};

export const createMockHttpServer = (): HttpServer => {
  const server = createHttpServer();
  return server;
};

export const createMockHttp2Server = (): Http2Server => {
  const server = createHttp2Server();
  return server;
};

import { Buffer } from "https://deno.land/std@0.111.0/node/buffer.ts";
import {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "./commands/BatchExecuteStatementCommand.ts";
import { BatchGetCommandInput, BatchGetCommandOutput } from "./commands/BatchGetCommand.ts";
import { BatchWriteCommandInput, BatchWriteCommandOutput } from "./commands/BatchWriteCommand.ts";
import { DeleteCommandInput, DeleteCommandOutput } from "./commands/DeleteCommand.ts";
import { ExecuteStatementCommandInput, ExecuteStatementCommandOutput } from "./commands/ExecuteStatementCommand.ts";
import { ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput } from "./commands/ExecuteTransactionCommand.ts";
import { GetCommandInput, GetCommandOutput } from "./commands/GetCommand.ts";
import { PutCommandInput, PutCommandOutput } from "./commands/PutCommand.ts";
import { QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand.ts";
import { ScanCommandInput, ScanCommandOutput } from "./commands/ScanCommand.ts";
import { TransactGetCommandInput, TransactGetCommandOutput } from "./commands/TransactGetCommand.ts";
import { TransactWriteCommandInput, TransactWriteCommandOutput } from "./commands/TransactWriteCommand.ts";
import { UpdateCommandInput, UpdateCommandOutput } from "./commands/UpdateCommand.ts";
import {
  DynamoDBClient,
  DynamoDBClientResolvedConfig,
  ServiceInputTypes as __ServiceInputTypes,
  ServiceOutputTypes as __ServiceOutputTypes,
} from "../client-dynamodb/mod.ts";
import { Client as __Client } from "../smithy-client/mod.ts";
import { HttpHandlerOptions as __HttpHandlerOptions } from "../types/mod.ts";
import { marshallOptions, unmarshallOptions } from "../util-dynamodb/mod.ts";

export type ServiceInputTypes =
  | __ServiceInputTypes
  | BatchExecuteStatementCommandInput
  | BatchGetCommandInput
  | BatchWriteCommandInput
  | DeleteCommandInput
  | ExecuteStatementCommandInput
  | ExecuteTransactionCommandInput
  | GetCommandInput
  | PutCommandInput
  | QueryCommandInput
  | ScanCommandInput
  | TransactGetCommandInput
  | TransactWriteCommandInput
  | UpdateCommandInput;

export type ServiceOutputTypes =
  | __ServiceOutputTypes
  | BatchExecuteStatementCommandOutput
  | BatchGetCommandOutput
  | BatchWriteCommandOutput
  | DeleteCommandOutput
  | ExecuteStatementCommandOutput
  | ExecuteTransactionCommandOutput
  | GetCommandOutput
  | PutCommandOutput
  | QueryCommandOutput
  | ScanCommandOutput
  | TransactGetCommandOutput
  | TransactWriteCommandOutput
  | UpdateCommandOutput;

export type TranslateConfig = {
  marshallOptions?: marshallOptions;
  unmarshallOptions?: unmarshallOptions;
};

export type DynamoDBDocumentClientResolvedConfig = DynamoDBClientResolvedConfig & {
  translateConfig?: TranslateConfig;
};

/**
 * The document client simplifies working with items in Amazon DynamoDB by
 * abstracting away the notion of attribute values. This abstraction annotates native
 * JavaScript types supplied as input parameters, as well as converts annotated
 * response data to native JavaScript types.
 *
 * ## Marshalling Input and Unmarshalling Response Data
 *
 * The document client affords developers the use of native JavaScript types
 * instead of `AttributeValue`s to simplify the JavaScript development
 * experience with Amazon DynamoDB. JavaScript objects passed in as parameters
 * are marshalled into `AttributeValue` shapes required by Amazon DynamoDB.
 * Responses from DynamoDB are unmarshalled into plain JavaScript objects
 * by the `DocumentClient`. The `DocumentClient` does not accept
 * `AttributeValue`s in favor of native JavaScript types.
 *
 * |          JavaScript Type          | DynamoDB AttributeValue |
 * | :-------------------------------: | ----------------------- |
 * |              String               | S                       |
 * |          Number / BigInt          | N                       |
 * |              Boolean              | BOOL                    |
 * |               null                | NULL                    |
 * |               Array               | L                       |
 * |              Object               | M                       |
 * |   Set\<Uint8Array, Blob, ...\>    | BS                      |
 * |       Set\<Number, BigInt\>       | NS                      |
 * |           Set\<String\>           | SS                      |
 * | Uint8Array, Buffer, File, Blob... | B                       |
 *
 * ### Example
 *
 * Here is an example list which is sent to DynamoDB client in an operation:
 *
 * ```json
 * { "L": [{ "NULL": true }, { "BOOL": false }, { "N": 1 }, { "S": "two" }] }
 * ```
 *
 * The DynamoDB document client abstracts the attribute values as follows in
 * both input and output:
 *
 * ```json
 * [null, false, 1, "two"]
 * ```
 *
 * @see {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}
 */
export class DynamoDBDocumentClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DynamoDBDocumentClientResolvedConfig
> {
  readonly config: DynamoDBDocumentClientResolvedConfig;

  protected constructor(client: DynamoDBClient, translateConfig?: TranslateConfig) {
    super(client.config);
    this.config = client.config;
    this.config.translateConfig = translateConfig;
    this.middlewareStack = client.middlewareStack;
  }

  static from(client: DynamoDBClient, translateConfig?: TranslateConfig) {
    return new DynamoDBDocumentClient(client, translateConfig);
  }

  destroy(): void {
    // A no-op, since client is passed in constructor
  }
}

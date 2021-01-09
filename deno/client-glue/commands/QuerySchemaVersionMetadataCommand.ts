import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { QuerySchemaVersionMetadataInput, QuerySchemaVersionMetadataResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1QuerySchemaVersionMetadataCommand,
  serializeAws_json1_1QuerySchemaVersionMetadataCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type QuerySchemaVersionMetadataCommandInput = QuerySchemaVersionMetadataInput;
export type QuerySchemaVersionMetadataCommandOutput = QuerySchemaVersionMetadataResponse & __MetadataBearer;

/**
 * <p>Queries for the schema version metadata information. </p>
 */
export class QuerySchemaVersionMetadataCommand extends $Command<
  QuerySchemaVersionMetadataCommandInput,
  QuerySchemaVersionMetadataCommandOutput,
  GlueClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: QuerySchemaVersionMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QuerySchemaVersionMetadataCommandInput, QuerySchemaVersionMetadataCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "QuerySchemaVersionMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QuerySchemaVersionMetadataInput.filterSensitiveLog,
      outputFilterSensitiveLog: QuerySchemaVersionMetadataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QuerySchemaVersionMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1QuerySchemaVersionMetadataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<QuerySchemaVersionMetadataCommandOutput> {
    return deserializeAws_json1_1QuerySchemaVersionMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

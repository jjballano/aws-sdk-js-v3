import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient.ts";
import { GetIntrospectionSchemaRequest, GetIntrospectionSchemaResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetIntrospectionSchemaCommand,
  serializeAws_restJson1GetIntrospectionSchemaCommand,
} from "../protocols/Aws_restJson1.ts";
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

export type GetIntrospectionSchemaCommandInput = GetIntrospectionSchemaRequest;
export type GetIntrospectionSchemaCommandOutput = GetIntrospectionSchemaResponse & __MetadataBearer;

/**
 * <p>Retrieves the introspection schema for a GraphQL API.</p>
 */
export class GetIntrospectionSchemaCommand extends $Command<
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput,
  AppSyncClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIntrospectionSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIntrospectionSchemaCommandInput, GetIntrospectionSchemaCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "GetIntrospectionSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIntrospectionSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIntrospectionSchemaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIntrospectionSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIntrospectionSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntrospectionSchemaCommandOutput> {
    return deserializeAws_restJson1GetIntrospectionSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { ListDevelopmentSchemaArnsRequest, ListDevelopmentSchemaArnsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListDevelopmentSchemaArnsCommand,
  serializeAws_restJson1ListDevelopmentSchemaArnsCommand,
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

export type ListDevelopmentSchemaArnsCommandInput = ListDevelopmentSchemaArnsRequest;
export type ListDevelopmentSchemaArnsCommandOutput = ListDevelopmentSchemaArnsResponse & __MetadataBearer;

/**
 * <p>Retrieves each Amazon Resource Name (ARN) of schemas in the development
 *       state.</p>
 */
export class ListDevelopmentSchemaArnsCommand extends $Command<
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDevelopmentSchemaArnsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDevelopmentSchemaArnsCommandInput, ListDevelopmentSchemaArnsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "ListDevelopmentSchemaArnsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDevelopmentSchemaArnsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDevelopmentSchemaArnsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDevelopmentSchemaArnsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDevelopmentSchemaArnsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDevelopmentSchemaArnsCommandOutput> {
    return deserializeAws_restJson1ListDevelopmentSchemaArnsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

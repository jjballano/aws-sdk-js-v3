import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient.ts";
import { DeleteSubscriptionDefinitionRequest, DeleteSubscriptionDefinitionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteSubscriptionDefinitionCommand,
  serializeAws_restJson1DeleteSubscriptionDefinitionCommand,
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

export type DeleteSubscriptionDefinitionCommandInput = DeleteSubscriptionDefinitionRequest;
export type DeleteSubscriptionDefinitionCommandOutput = DeleteSubscriptionDefinitionResponse & __MetadataBearer;

/**
 * Deletes a subscription definition.
 */
export class DeleteSubscriptionDefinitionCommand extends $Command<
  DeleteSubscriptionDefinitionCommandInput,
  DeleteSubscriptionDefinitionCommandOutput,
  GreengrassClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSubscriptionDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSubscriptionDefinitionCommandInput, DeleteSubscriptionDefinitionCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "DeleteSubscriptionDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSubscriptionDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSubscriptionDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSubscriptionDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSubscriptionDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSubscriptionDefinitionCommandOutput> {
    return deserializeAws_restJson1DeleteSubscriptionDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

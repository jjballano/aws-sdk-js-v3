import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient.ts";
import { UpdateResourceDefinitionRequest, UpdateResourceDefinitionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateResourceDefinitionCommand,
  serializeAws_restJson1UpdateResourceDefinitionCommand,
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

export type UpdateResourceDefinitionCommandInput = UpdateResourceDefinitionRequest;
export type UpdateResourceDefinitionCommandOutput = UpdateResourceDefinitionResponse & __MetadataBearer;

/**
 * Updates a resource definition.
 */
export class UpdateResourceDefinitionCommand extends $Command<
  UpdateResourceDefinitionCommandInput,
  UpdateResourceDefinitionCommandOutput,
  GreengrassClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateResourceDefinitionCommandInput) {
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
  ): Handler<UpdateResourceDefinitionCommandInput, UpdateResourceDefinitionCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "UpdateResourceDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResourceDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateResourceDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResourceDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateResourceDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceDefinitionCommandOutput> {
    return deserializeAws_restJson1UpdateResourceDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointSMSVoiceClient.ts";
import {
  DeleteConfigurationSetEventDestinationRequest,
  DeleteConfigurationSetEventDestinationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand,
  serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand,
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

export type DeleteConfigurationSetEventDestinationCommandInput = DeleteConfigurationSetEventDestinationRequest;
export type DeleteConfigurationSetEventDestinationCommandOutput = DeleteConfigurationSetEventDestinationResponse &
  __MetadataBearer;

/**
 * Deletes an event destination in a configuration set.
 */
export class DeleteConfigurationSetEventDestinationCommand extends $Command<
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
  PinpointSMSVoiceClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteConfigurationSetEventDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConfigurationSetEventDestinationCommandInput, DeleteConfigurationSetEventDestinationCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceClient";
    const commandName = "DeleteConfigurationSetEventDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConfigurationSetEventDestinationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteConfigurationSetEventDestinationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteConfigurationSetEventDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput> {
    return deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { StartChannelRequest, StartChannelResponse } from "../models/models_1";
import {
  deserializeAws_restJson1StartChannelCommand,
  serializeAws_restJson1StartChannelCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface StartChannelCommandInput extends StartChannelRequest {}
export interface StartChannelCommandOutput extends StartChannelResponse, __MetadataBearer {}

/**
 * Starts an existing channel
 */
export class StartChannelCommand extends $Command<
  StartChannelCommandInput,
  StartChannelCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartChannelCommandInput, StartChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "StartChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartChannelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartChannelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartChannelCommandOutput> {
    return deserializeAws_restJson1StartChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient.ts";
import { CancelInputDeviceTransferRequest, CancelInputDeviceTransferResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1CancelInputDeviceTransferCommand,
  serializeAws_restJson1CancelInputDeviceTransferCommand,
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

export type CancelInputDeviceTransferCommandInput = CancelInputDeviceTransferRequest;
export type CancelInputDeviceTransferCommandOutput = CancelInputDeviceTransferResponse & __MetadataBearer;

/**
 * Cancel an input device transfer that you have requested.
 */
export class CancelInputDeviceTransferCommand extends $Command<
  CancelInputDeviceTransferCommandInput,
  CancelInputDeviceTransferCommandOutput,
  MediaLiveClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelInputDeviceTransferCommandInput) {
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
  ): Handler<CancelInputDeviceTransferCommandInput, CancelInputDeviceTransferCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "CancelInputDeviceTransferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelInputDeviceTransferRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelInputDeviceTransferResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelInputDeviceTransferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelInputDeviceTransferCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelInputDeviceTransferCommandOutput> {
    return deserializeAws_restJson1CancelInputDeviceTransferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

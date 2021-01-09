import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { UpdateNetworkProfileRequest, UpdateNetworkProfileResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateNetworkProfileCommand,
  serializeAws_json1_1UpdateNetworkProfileCommand,
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

export type UpdateNetworkProfileCommandInput = UpdateNetworkProfileRequest;
export type UpdateNetworkProfileCommandOutput = UpdateNetworkProfileResult & __MetadataBearer;

/**
 * <p>Updates the network profile.</p>
 */
export class UpdateNetworkProfileCommand extends $Command<
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNetworkProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNetworkProfileCommandInput, UpdateNetworkProfileCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "UpdateNetworkProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNetworkProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateNetworkProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateNetworkProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateNetworkProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNetworkProfileCommandOutput> {
    return deserializeAws_json1_1UpdateNetworkProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

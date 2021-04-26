import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DeleteWirelessGatewayTaskRequest, DeleteWirelessGatewayTaskResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteWirelessGatewayTaskCommand,
  serializeAws_restJson1DeleteWirelessGatewayTaskCommand,
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

export interface DeleteWirelessGatewayTaskCommandInput extends DeleteWirelessGatewayTaskRequest {}
export interface DeleteWirelessGatewayTaskCommandOutput extends DeleteWirelessGatewayTaskResponse, __MetadataBearer {}

/**
 * <p>Deletes a wireless gateway task.</p>
 */
export class DeleteWirelessGatewayTaskCommand extends $Command<
  DeleteWirelessGatewayTaskCommandInput,
  DeleteWirelessGatewayTaskCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteWirelessGatewayTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWirelessGatewayTaskCommandInput, DeleteWirelessGatewayTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DeleteWirelessGatewayTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWirelessGatewayTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteWirelessGatewayTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWirelessGatewayTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteWirelessGatewayTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteWirelessGatewayTaskCommandOutput> {
    return deserializeAws_restJson1DeleteWirelessGatewayTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

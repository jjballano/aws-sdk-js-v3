import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import {
  DeregisterTaskFromMaintenanceWindowRequest,
  DeregisterTaskFromMaintenanceWindowResult,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand,
  serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand,
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

export type DeregisterTaskFromMaintenanceWindowCommandInput = DeregisterTaskFromMaintenanceWindowRequest;
export type DeregisterTaskFromMaintenanceWindowCommandOutput = DeregisterTaskFromMaintenanceWindowResult &
  __MetadataBearer;

/**
 * <p>Removes a task from a maintenance window.</p>
 */
export class DeregisterTaskFromMaintenanceWindowCommand extends $Command<
  DeregisterTaskFromMaintenanceWindowCommandInput,
  DeregisterTaskFromMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterTaskFromMaintenanceWindowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterTaskFromMaintenanceWindowCommandInput, DeregisterTaskFromMaintenanceWindowCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeregisterTaskFromMaintenanceWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterTaskFromMaintenanceWindowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTaskFromMaintenanceWindowResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterTaskFromMaintenanceWindowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterTaskFromMaintenanceWindowCommandOutput> {
    return deserializeAws_json1_1DeregisterTaskFromMaintenanceWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

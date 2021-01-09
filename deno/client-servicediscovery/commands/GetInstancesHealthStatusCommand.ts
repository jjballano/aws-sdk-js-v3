import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient.ts";
import { GetInstancesHealthStatusRequest, GetInstancesHealthStatusResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetInstancesHealthStatusCommand,
  serializeAws_json1_1GetInstancesHealthStatusCommand,
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

export type GetInstancesHealthStatusCommandInput = GetInstancesHealthStatusRequest;
export type GetInstancesHealthStatusCommandOutput = GetInstancesHealthStatusResponse & __MetadataBearer;

/**
 * <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or
 *    more instances that are associated with a specified service.</p>
 *          <note>
 *             <p>There is a brief delay between when you register an instance and when the health status for the instance is
 *     available. </p>
 *          </note>
 */
export class GetInstancesHealthStatusCommand extends $Command<
  GetInstancesHealthStatusCommandInput,
  GetInstancesHealthStatusCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInstancesHealthStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInstancesHealthStatusCommandInput, GetInstancesHealthStatusCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "GetInstancesHealthStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInstancesHealthStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInstancesHealthStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInstancesHealthStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInstancesHealthStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstancesHealthStatusCommandOutput> {
    return deserializeAws_json1_1GetInstancesHealthStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

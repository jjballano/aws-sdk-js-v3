import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient.ts";
import { DeleteCapacityProviderRequest, DeleteCapacityProviderResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteCapacityProviderCommand,
  serializeAws_json1_1DeleteCapacityProviderCommand,
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

export type DeleteCapacityProviderCommandInput = DeleteCapacityProviderRequest;
export type DeleteCapacityProviderCommandOutput = DeleteCapacityProviderResponse & __MetadataBearer;

/**
 * <p>Deletes the specified capacity provider.</p>
 * 		       <note>
 * 			         <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are
 * 				reserved and cannot be deleted. You can disassociate them from a cluster using
 * 				either the <a>PutClusterCapacityProviders</a> API or by deleting the
 * 				cluster.</p>
 * 		       </note>
 * 		       <p>Prior to a capacity provider being deleted, the capacity provider must be removed from
 * 			the capacity provider strategy from all services. The <a>UpdateService</a>
 * 			API can be used to remove a capacity provider from a service's capacity provider
 * 			strategy. When updating a service, the <code>forceNewDeployment</code> option can be
 * 			used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity
 * 			provider are transitioned to use the capacity from the remaining capacity providers.
 * 			Only capacity providers that are not associated with a cluster can be deleted. To remove
 * 			a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>
 */
export class DeleteCapacityProviderCommand extends $Command<
  DeleteCapacityProviderCommandInput,
  DeleteCapacityProviderCommandOutput,
  ECSClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCapacityProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCapacityProviderCommandInput, DeleteCapacityProviderCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeleteCapacityProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCapacityProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCapacityProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCapacityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCapacityProviderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCapacityProviderCommandOutput> {
    return deserializeAws_json1_1DeleteCapacityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

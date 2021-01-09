import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { UpdateLoadBalancerAttributeRequest, UpdateLoadBalancerAttributeResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1UpdateLoadBalancerAttributeCommand,
  serializeAws_json1_1UpdateLoadBalancerAttributeCommand,
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

export type UpdateLoadBalancerAttributeCommandInput = UpdateLoadBalancerAttributeRequest;
export type UpdateLoadBalancerAttributeCommandOutput = UpdateLoadBalancerAttributeResult & __MetadataBearer;

/**
 * <p>Updates the specified attribute for a load balancer. You can only update one attribute at
 *       a time.</p>
 *          <p>The <code>update load balancer attribute</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class UpdateLoadBalancerAttributeCommand extends $Command<
  UpdateLoadBalancerAttributeCommandInput,
  UpdateLoadBalancerAttributeCommandOutput,
  LightsailClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLoadBalancerAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLoadBalancerAttributeCommandInput, UpdateLoadBalancerAttributeCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateLoadBalancerAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLoadBalancerAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateLoadBalancerAttributeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLoadBalancerAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateLoadBalancerAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLoadBalancerAttributeCommandOutput> {
    return deserializeAws_json1_1UpdateLoadBalancerAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

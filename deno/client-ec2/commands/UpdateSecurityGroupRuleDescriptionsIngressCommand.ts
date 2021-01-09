import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  UpdateSecurityGroupRuleDescriptionsIngressRequest,
  UpdateSecurityGroupRuleDescriptionsIngressResult,
} from "../models/models_5.ts";
import {
  deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand,
  serializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand,
} from "../protocols/Aws_ec2.ts";
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

export type UpdateSecurityGroupRuleDescriptionsIngressCommandInput = UpdateSecurityGroupRuleDescriptionsIngressRequest;
export type UpdateSecurityGroupRuleDescriptionsIngressCommandOutput = UpdateSecurityGroupRuleDescriptionsIngressResult &
  __MetadataBearer;

/**
 * <p>Updates the description of an ingress (inbound) security group rule. You can replace an
 * 			existing description, or add a description to a rule that did not have one
 * 			previously.</p>
 * 		       <p>You specify the description as part of the IP permissions structure. You can remove a
 * 			description for a security group rule by omitting the description parameter in the
 * 			request.</p>
 */
export class UpdateSecurityGroupRuleDescriptionsIngressCommand extends $Command<
  UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
  UpdateSecurityGroupRuleDescriptionsIngressCommandOutput,
  EC2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSecurityGroupRuleDescriptionsIngressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    UpdateSecurityGroupRuleDescriptionsIngressCommandOutput
  > {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "UpdateSecurityGroupRuleDescriptionsIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsIngressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsIngressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSecurityGroupRuleDescriptionsIngressCommandOutput> {
    return deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

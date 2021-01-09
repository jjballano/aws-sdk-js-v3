import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { RevokeDBSecurityGroupIngressMessage, RevokeDBSecurityGroupIngressResult } from "../models/models_1.ts";
import {
  deserializeAws_queryRevokeDBSecurityGroupIngressCommand,
  serializeAws_queryRevokeDBSecurityGroupIngressCommand,
} from "../protocols/Aws_query.ts";
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

export type RevokeDBSecurityGroupIngressCommandInput = RevokeDBSecurityGroupIngressMessage;
export type RevokeDBSecurityGroupIngressCommandOutput = RevokeDBSecurityGroupIngressResult & __MetadataBearer;

/**
 * <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).</p>
 */
export class RevokeDBSecurityGroupIngressCommand extends $Command<
  RevokeDBSecurityGroupIngressCommandInput,
  RevokeDBSecurityGroupIngressCommandOutput,
  RDSClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeDBSecurityGroupIngressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeDBSecurityGroupIngressCommandInput, RevokeDBSecurityGroupIngressCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RevokeDBSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeDBSecurityGroupIngressMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RevokeDBSecurityGroupIngressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeDBSecurityGroupIngressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRevokeDBSecurityGroupIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokeDBSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryRevokeDBSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

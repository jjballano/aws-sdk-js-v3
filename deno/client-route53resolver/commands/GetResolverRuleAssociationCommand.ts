import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { GetResolverRuleAssociationRequest, GetResolverRuleAssociationResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetResolverRuleAssociationCommand,
  serializeAws_json1_1GetResolverRuleAssociationCommand,
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

export type GetResolverRuleAssociationCommandInput = GetResolverRuleAssociationRequest;
export type GetResolverRuleAssociationCommandOutput = GetResolverRuleAssociationResponse & __MetadataBearer;

/**
 * <p>Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. </p>
 */
export class GetResolverRuleAssociationCommand extends $Command<
  GetResolverRuleAssociationCommandInput,
  GetResolverRuleAssociationCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResolverRuleAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResolverRuleAssociationCommandInput, GetResolverRuleAssociationCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetResolverRuleAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResolverRuleAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResolverRuleAssociationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResolverRuleAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResolverRuleAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResolverRuleAssociationCommandOutput> {
    return deserializeAws_json1_1GetResolverRuleAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

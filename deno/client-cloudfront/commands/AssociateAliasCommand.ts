import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import { AssociateAliasRequest } from "../models/models_0.ts";
import {
  deserializeAws_restXmlAssociateAliasCommand,
  serializeAws_restXmlAssociateAliasCommand,
} from "../protocols/Aws_restXml.ts";
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

export interface AssociateAliasCommandInput extends AssociateAliasRequest {}
export interface AssociateAliasCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront
 * 			distribution.</p>
 * 		       <p>With this operation you can move an alias that’s already in use on a CloudFront distribution
 * 			to a different distribution in one step. This prevents the downtime that could occur if
 * 			you first remove the alias from one distribution and then separately add the alias to
 * 			another distribution.</p>
 * 		       <p>To use this operation to associate an alias with a distribution, you provide the alias
 * 			and the ID of the target distribution for the alias. For more information, including how
 * 			to set up the target distribution, prerequisites that you must complete, and other
 * 			restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a>
 * 			in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, AssociateAliasCommand } from "../../client-cloudfront/mod.ts";
 * // const { CloudFrontClient, AssociateAliasCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new AssociateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAliasCommandInput} for command's `input` shape.
 * @see {@link AssociateAliasCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateAliasCommand extends $Command<
  AssociateAliasCommandInput,
  AssociateAliasCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateAliasCommandInput, AssociateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "AssociateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlAssociateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateAliasCommandOutput> {
    return deserializeAws_restXmlAssociateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

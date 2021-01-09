import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import { GetOriginRequestPolicyRequest, GetOriginRequestPolicyResult } from "../models/models_0.ts";
import {
  deserializeAws_restXmlGetOriginRequestPolicyCommand,
  serializeAws_restXmlGetOriginRequestPolicyCommand,
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

export type GetOriginRequestPolicyCommandInput = GetOriginRequestPolicyRequest;
export type GetOriginRequestPolicyCommandOutput = GetOriginRequestPolicyResult & __MetadataBearer;

/**
 * <p>Gets an origin request policy, including the following metadata:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The policy’s identifier.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The date and time when the policy was last modified.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>To get an origin request policy, you must provide the policy’s identifier. If the origin
 * 			request policy is attached to a distribution’s cache behavior, you can get the policy’s
 * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
 * 			origin request policy is not attached to a cache behavior, you can get the identifier
 * 			using <code>ListOriginRequestPolicies</code>.</p>
 */
export class GetOriginRequestPolicyCommand extends $Command<
  GetOriginRequestPolicyCommandInput,
  GetOriginRequestPolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOriginRequestPolicyCommandInput) {
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
  ): Handler<GetOriginRequestPolicyCommandInput, GetOriginRequestPolicyCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetOriginRequestPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOriginRequestPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOriginRequestPolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOriginRequestPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetOriginRequestPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOriginRequestPolicyCommandOutput> {
    return deserializeAws_restXmlGetOriginRequestPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

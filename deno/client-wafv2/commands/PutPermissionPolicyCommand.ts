import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client.ts";
import { PutPermissionPolicyRequest, PutPermissionPolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutPermissionPolicyCommand,
  serializeAws_json1_1PutPermissionPolicyCommand,
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

export type PutPermissionPolicyCommandInput = PutPermissionPolicyRequest;
export type PutPermissionPolicyCommandOutput = PutPermissionPolicyResponse & __MetadataBearer;

/**
 * <p>Attaches an IAM policy to the specified resource. Use this to share a rule group across accounts.</p>
 *         <p>You must be the owner of the rule group to perform this operation.</p>
 *          <p>This action is subject to the following restrictions:</p>
 *          <ul>
 *             <li>
 *                <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p>
 *             </li>
 *             <li>
 *                <p>The ARN in the request must be a valid WAF <a>RuleGroup</a> ARN and the rule group must exist in the same region.</p>
 *             </li>
 *             <li>
 *                <p>The user making the request must be the owner of the rule group.</p>
 *             </li>
 *          </ul>
 */
export class PutPermissionPolicyCommand extends $Command<
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
  WAFV2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPermissionPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPermissionPolicyCommandInput, PutPermissionPolicyCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "PutPermissionPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPermissionPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutPermissionPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPermissionPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPermissionPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPermissionPolicyCommandOutput> {
    return deserializeAws_json1_1PutPermissionPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

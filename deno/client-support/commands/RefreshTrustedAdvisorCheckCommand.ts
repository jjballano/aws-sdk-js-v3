import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient.ts";
import { RefreshTrustedAdvisorCheckRequest, RefreshTrustedAdvisorCheckResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand,
  serializeAws_json1_1RefreshTrustedAdvisorCheckCommand,
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

export interface RefreshTrustedAdvisorCheckCommandInput extends RefreshTrustedAdvisorCheckRequest {}
export interface RefreshTrustedAdvisorCheckCommandOutput extends RefreshTrustedAdvisorCheckResponse, __MetadataBearer {}

/**
 * <p>Refreshes the AWS Trusted Advisor check that you specify using the check ID. You can get the
 *             check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
 *             operation.</p>
 *         <note>
 *             <p>Some checks are refreshed automatically. If you call the
 *                     <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see
 *                 the <code>InvalidParameterValue</code> error.</p>
 *         </note>
 *         <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a>
 *             object.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, RefreshTrustedAdvisorCheckCommand } from "../../client-support/mod.ts";
 * // const { SupportClient, RefreshTrustedAdvisorCheckCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new RefreshTrustedAdvisorCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RefreshTrustedAdvisorCheckCommandInput} for command's `input` shape.
 * @see {@link RefreshTrustedAdvisorCheckCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RefreshTrustedAdvisorCheckCommand extends $Command<
  RefreshTrustedAdvisorCheckCommandInput,
  RefreshTrustedAdvisorCheckCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RefreshTrustedAdvisorCheckCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RefreshTrustedAdvisorCheckCommandInput, RefreshTrustedAdvisorCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "RefreshTrustedAdvisorCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RefreshTrustedAdvisorCheckRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RefreshTrustedAdvisorCheckResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RefreshTrustedAdvisorCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RefreshTrustedAdvisorCheckCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RefreshTrustedAdvisorCheckCommandOutput> {
    return deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

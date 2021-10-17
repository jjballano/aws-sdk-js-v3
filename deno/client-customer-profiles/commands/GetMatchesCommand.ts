import process from "https://deno.land/std@0.111.0/node/process.ts";
import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient.ts";
import { GetMatchesRequest, GetMatchesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetMatchesCommand,
  serializeAws_restJson1GetMatchesCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface GetMatchesCommandInput extends GetMatchesRequest {}
export interface GetMatchesCommandOutput extends GetMatchesResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and subject to change.</p>
 *          <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or
 *             <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to
 *          enable identity resolution: set <code>Matching</code> to true.</p>
 *          <p>GetMatches returns potentially matching profiles, based on the results of the latest run
 *          of a machine learning process. </p>
 *          <important>
 *             <p>Amazon Connect runs a batch process every Saturday at 12AM UTC to identify matching profiles.
 *             The results are returned up to seven days after the Saturday run.</p>
 *          </important>
 *
 *          <p>Amazon Connect uses the following profile attributes to identify matches:</p>
 *          <ul>
 *             <li>
 *                <p>PhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>HomePhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>BusinessPhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>MobilePhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>EmailAddress</p>
 *             </li>
 *             <li>
 *                <p>PersonalEmailAddress</p>
 *             </li>
 *             <li>
 *                <p>BusinessEmailAddress</p>
 *             </li>
 *             <li>
 *                <p>FullName</p>
 *             </li>
 *             <li>
 *                <p>BusinessName</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetMatchesCommand } from "../../client-customer-profiles/mod.ts";
 * // const { CustomerProfilesClient, GetMatchesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetMatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMatchesCommandInput} for command's `input` shape.
 * @see {@link GetMatchesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetMatchesCommand extends $Command<
  GetMatchesCommandInput,
  GetMatchesCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMatchesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMatchesCommandInput, GetMatchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "GetMatchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMatchesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMatchesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMatchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMatchesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMatchesCommandOutput> {
    return deserializeAws_restJson1GetMatchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

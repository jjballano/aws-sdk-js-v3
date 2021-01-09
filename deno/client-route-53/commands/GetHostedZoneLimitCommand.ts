import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { GetHostedZoneLimitRequest, GetHostedZoneLimitResponse } from "../models/models_0.ts";
import {
  deserializeAws_restXmlGetHostedZoneLimitCommand,
  serializeAws_restXmlGetHostedZoneLimitCommand,
} from "../protocols/Aws_restXml.ts";
import { getIdNormalizerPlugin } from "../../middleware-sdk-route53/mod.ts";
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

export type GetHostedZoneLimitCommandInput = GetHostedZoneLimitRequest;
export type GetHostedZoneLimitCommandOutput = GetHostedZoneLimitResponse & __MetadataBearer;

/**
 * <p>Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you
 * 			can create in the hosted zone. </p>
 * 		       <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
 * 			<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
 */
export class GetHostedZoneLimitCommand extends $Command<
  GetHostedZoneLimitCommandInput,
  GetHostedZoneLimitCommandOutput,
  Route53ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHostedZoneLimitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHostedZoneLimitCommandInput, GetHostedZoneLimitCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.middlewareStack.use(getIdNormalizerPlugin(configuration));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHostedZoneLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHostedZoneLimitRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHostedZoneLimitResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHostedZoneLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetHostedZoneLimitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHostedZoneLimitCommandOutput> {
    return deserializeAws_restXmlGetHostedZoneLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

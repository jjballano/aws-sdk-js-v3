import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { GetHealthCheckStatusRequest, GetHealthCheckStatusResponse } from "../models/models_0.ts";
import {
  deserializeAws_restXmlGetHealthCheckStatusCommand,
  serializeAws_restXmlGetHealthCheckStatusCommand,
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

export interface GetHealthCheckStatusCommandInput extends GetHealthCheckStatusRequest {}
export interface GetHealthCheckStatusCommandOutput extends GetHealthCheckStatusResponse, __MetadataBearer {}

/**
 * <p>Gets status of a specified health check. </p>
 * 		       <important>
 *             <p>This API is intended for use during development to diagnose behavior. It doesn’t support production use-cases with high query rates that require immediate and actionable responses.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckStatusCommand } from "../../client-route-53/mod.ts";
 * // const { Route53Client, GetHealthCheckStatusCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHealthCheckStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHealthCheckStatusCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckStatusCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetHealthCheckStatusCommand extends $Command<
  GetHealthCheckStatusCommandInput,
  GetHealthCheckStatusCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHealthCheckStatusCommandInput) {
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
  ): Handler<GetHealthCheckStatusCommandInput, GetHealthCheckStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHealthCheckStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHealthCheckStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHealthCheckStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHealthCheckStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetHealthCheckStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHealthCheckStatusCommandOutput> {
    return deserializeAws_restXmlGetHealthCheckStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

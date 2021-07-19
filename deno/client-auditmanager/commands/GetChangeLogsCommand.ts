import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient.ts";
import { GetChangeLogsRequest, GetChangeLogsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetChangeLogsCommand,
  serializeAws_restJson1GetChangeLogsCommand,
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

export interface GetChangeLogsCommandInput extends GetChangeLogsRequest {}
export interface GetChangeLogsCommandOutput extends GetChangeLogsResponse, __MetadataBearer {}

/**
 * <p>
 *    Returns a list of changelogs from Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetChangeLogsCommand } from "../../client-auditmanager/mod.ts";
 * // const { AuditManagerClient, GetChangeLogsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetChangeLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChangeLogsCommandInput} for command's `input` shape.
 * @see {@link GetChangeLogsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetChangeLogsCommand extends $Command<
  GetChangeLogsCommandInput,
  GetChangeLogsCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetChangeLogsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetChangeLogsCommandInput, GetChangeLogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetChangeLogsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetChangeLogsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetChangeLogsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetChangeLogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetChangeLogsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChangeLogsCommandOutput> {
    return deserializeAws_restJson1GetChangeLogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

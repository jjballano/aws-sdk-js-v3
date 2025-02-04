import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient.ts";
import { UpdateControlPanelRequest, UpdateControlPanelResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateControlPanelCommand,
  serializeAws_restJson1UpdateControlPanelCommand,
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

export interface UpdateControlPanelCommandInput extends UpdateControlPanelRequest {}
export interface UpdateControlPanelCommandOutput extends UpdateControlPanelResponse, __MetadataBearer {}

/**
 * <p>Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, UpdateControlPanelCommand } from "../../client-route53-recovery-control-config/mod.ts";
 * // const { Route53RecoveryControlConfigClient, UpdateControlPanelCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const command = new UpdateControlPanelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateControlPanelCommandInput} for command's `input` shape.
 * @see {@link UpdateControlPanelCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateControlPanelCommand extends $Command<
  UpdateControlPanelCommandInput,
  UpdateControlPanelCommandOutput,
  Route53RecoveryControlConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateControlPanelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryControlConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateControlPanelCommandInput, UpdateControlPanelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "UpdateControlPanelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateControlPanelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateControlPanelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateControlPanelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateControlPanelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateControlPanelCommandOutput> {
    return deserializeAws_restJson1UpdateControlPanelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

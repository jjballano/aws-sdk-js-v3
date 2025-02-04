import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { ActivateGatewayInput, ActivateGatewayOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ActivateGatewayCommand,
  serializeAws_json1_1ActivateGatewayCommand,
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

export interface ActivateGatewayCommandInput extends ActivateGatewayInput {}
export interface ActivateGatewayCommandOutput extends ActivateGatewayOutput, __MetadataBearer {}

/**
 * <p>Activates the gateway you previously deployed on your host. In the activation process,
 *          you specify information such as the Region that you want to use for storing snapshots
 *          or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an
 *          activation key, and a name for your gateway. The activation process also associates your
 *          gateway with your account. For more information, see <a>UpdateGatewayInformation</a>.</p>
 *          <note>
 *             <p>You must turn on the gateway VM before you can activate your gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ActivateGatewayCommand } from "../../client-storage-gateway/mod.ts";
 * // const { StorageGatewayClient, ActivateGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ActivateGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateGatewayCommandInput} for command's `input` shape.
 * @see {@link ActivateGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ActivateGatewayCommand extends $Command<
  ActivateGatewayCommandInput,
  ActivateGatewayCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ActivateGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ActivateGatewayCommandInput, ActivateGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ActivateGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ActivateGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: ActivateGatewayOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ActivateGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ActivateGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateGatewayCommandOutput> {
    return deserializeAws_json1_1ActivateGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient.ts";
import { DescribeVirtualInterfacesRequest, VirtualInterfaces } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeVirtualInterfacesCommand,
  serializeAws_json1_1DescribeVirtualInterfacesCommand,
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

export interface DescribeVirtualInterfacesCommandInput extends DescribeVirtualInterfacesRequest {}
export interface DescribeVirtualInterfacesCommandOutput extends VirtualInterfaces, __MetadataBearer {}

/**
 * <p>Displays all virtual interfaces for an account. Virtual interfaces deleted fewer
 *       than 15 minutes before you make the request are also returned. If you specify a
 *       connection ID, only the virtual interfaces associated with the connection are returned.
 *       If you specify a virtual interface ID, then only a single virtual interface is returned.</p>
 *          <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeVirtualInterfacesCommand } from "../../client-direct-connect/mod.ts";
 * // const { DirectConnectClient, DescribeVirtualInterfacesCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeVirtualInterfacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualInterfacesCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeVirtualInterfacesCommand extends $Command<
  DescribeVirtualInterfacesCommandInput,
  DescribeVirtualInterfacesCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVirtualInterfacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVirtualInterfacesCommandInput, DescribeVirtualInterfacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeVirtualInterfacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVirtualInterfacesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VirtualInterfaces.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVirtualInterfacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeVirtualInterfacesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVirtualInterfacesCommandOutput> {
    return deserializeAws_json1_1DescribeVirtualInterfacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

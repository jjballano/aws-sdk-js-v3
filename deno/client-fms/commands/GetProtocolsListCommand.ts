import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient.ts";
import { GetProtocolsListRequest, GetProtocolsListResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetProtocolsListCommand,
  serializeAws_json1_1GetProtocolsListCommand,
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

export interface GetProtocolsListCommandInput extends GetProtocolsListRequest {}
export interface GetProtocolsListCommandOutput extends GetProtocolsListResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified Firewall Manager protocols list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetProtocolsListCommand } from "../../client-fms/mod.ts";
 * // const { FMSClient, GetProtocolsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetProtocolsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProtocolsListCommandInput} for command's `input` shape.
 * @see {@link GetProtocolsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetProtocolsListCommand extends $Command<
  GetProtocolsListCommandInput,
  GetProtocolsListCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetProtocolsListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProtocolsListCommandInput, GetProtocolsListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetProtocolsListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProtocolsListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetProtocolsListResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProtocolsListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetProtocolsListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProtocolsListCommandOutput> {
    return deserializeAws_json1_1GetProtocolsListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

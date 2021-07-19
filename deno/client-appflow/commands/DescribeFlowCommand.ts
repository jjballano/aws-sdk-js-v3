import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient.ts";
import { DescribeFlowRequest, DescribeFlowResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeFlowCommand,
  serializeAws_restJson1DescribeFlowCommand,
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

export interface DescribeFlowCommandInput extends DescribeFlowRequest {}
export interface DescribeFlowCommandOutput extends DescribeFlowResponse, __MetadataBearer {}

/**
 * <p> Provides a description of the specified flow. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeFlowCommand } from "../../client-appflow/mod.ts";
 * // const { AppflowClient, DescribeFlowCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DescribeFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFlowCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeFlowCommand extends $Command<
  DescribeFlowCommandInput,
  DescribeFlowCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFlowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFlowCommandInput, DescribeFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "DescribeFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFlowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFlowResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFlowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFlowCommandOutput> {
    return deserializeAws_restJson1DescribeFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

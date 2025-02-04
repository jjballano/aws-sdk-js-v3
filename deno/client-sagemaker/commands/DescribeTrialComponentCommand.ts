import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { DescribeTrialComponentRequest } from "../models/models_1.ts";
import { DescribeTrialComponentResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1DescribeTrialComponentCommand,
  serializeAws_json1_1DescribeTrialComponentCommand,
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

export interface DescribeTrialComponentCommandInput extends DescribeTrialComponentRequest {}
export interface DescribeTrialComponentCommandOutput extends DescribeTrialComponentResponse, __MetadataBearer {}

/**
 * <p>Provides a list of a trials component's properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrialComponentCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, DescribeTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrialComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTrialComponentCommand extends $Command<
  DescribeTrialComponentCommandInput,
  DescribeTrialComponentCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTrialComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTrialComponentCommandInput, DescribeTrialComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeTrialComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTrialComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrialComponentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTrialComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTrialComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTrialComponentCommandOutput> {
    return deserializeAws_json1_1DescribeTrialComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

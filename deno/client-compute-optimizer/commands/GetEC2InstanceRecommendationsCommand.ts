import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient.ts";
import { GetEC2InstanceRecommendationsRequest, GetEC2InstanceRecommendationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0GetEC2InstanceRecommendationsCommand,
  serializeAws_json1_0GetEC2InstanceRecommendationsCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type GetEC2InstanceRecommendationsCommandInput = GetEC2InstanceRecommendationsRequest;
export type GetEC2InstanceRecommendationsCommandOutput = GetEC2InstanceRecommendationsResponse & __MetadataBearer;

/**
 * <p>Returns Amazon EC2 instance recommendations.</p>
 *
 *         <p>AWS Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a
 *             specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>AWS Compute Optimizer User Guide</i>.</p>
 */
export class GetEC2InstanceRecommendationsCommand extends $Command<
  GetEC2InstanceRecommendationsCommandInput,
  GetEC2InstanceRecommendationsCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEC2InstanceRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEC2InstanceRecommendationsCommandInput, GetEC2InstanceRecommendationsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetEC2InstanceRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEC2InstanceRecommendationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEC2InstanceRecommendationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEC2InstanceRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetEC2InstanceRecommendationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEC2InstanceRecommendationsCommandOutput> {
    return deserializeAws_json1_0GetEC2InstanceRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

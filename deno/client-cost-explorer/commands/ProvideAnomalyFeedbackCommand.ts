import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient.ts";
import { ProvideAnomalyFeedbackRequest, ProvideAnomalyFeedbackResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ProvideAnomalyFeedbackCommand,
  serializeAws_json1_1ProvideAnomalyFeedbackCommand,
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

export type ProvideAnomalyFeedbackCommandInput = ProvideAnomalyFeedbackRequest;
export type ProvideAnomalyFeedbackCommandOutput = ProvideAnomalyFeedbackResponse & __MetadataBearer;

/**
 * <p>Modifies the feedback property of a given cost anomaly. </p>
 */
export class ProvideAnomalyFeedbackCommand extends $Command<
  ProvideAnomalyFeedbackCommandInput,
  ProvideAnomalyFeedbackCommandOutput,
  CostExplorerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ProvideAnomalyFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ProvideAnomalyFeedbackCommandInput, ProvideAnomalyFeedbackCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "ProvideAnomalyFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvideAnomalyFeedbackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ProvideAnomalyFeedbackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ProvideAnomalyFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ProvideAnomalyFeedbackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ProvideAnomalyFeedbackCommandOutput> {
    return deserializeAws_json1_1ProvideAnomalyFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

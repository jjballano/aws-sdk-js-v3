import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient.ts";
import {
  GetScalingPlanResourceForecastDataRequest,
  GetScalingPlanResourceForecastDataResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand,
  serializeAws_json1_1GetScalingPlanResourceForecastDataCommand,
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

export type GetScalingPlanResourceForecastDataCommandInput = GetScalingPlanResourceForecastDataRequest;
export type GetScalingPlanResourceForecastDataCommandOutput = GetScalingPlanResourceForecastDataResponse &
  __MetadataBearer;

/**
 * <p>Retrieves the forecast data for a scalable resource.</p>
 *          <p>Capacity forecasts are represented as predicted values, or data points, that are
 *          calculated using historical data points from a specified CloudWatch load metric. Data points are
 *          available for up to 56 days.
 *
 *       </p>
 */
export class GetScalingPlanResourceForecastDataCommand extends $Command<
  GetScalingPlanResourceForecastDataCommandInput,
  GetScalingPlanResourceForecastDataCommandOutput,
  AutoScalingPlansClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetScalingPlanResourceForecastDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingPlansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetScalingPlanResourceForecastDataCommandInput, GetScalingPlanResourceForecastDataCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingPlansClient";
    const commandName = "GetScalingPlanResourceForecastDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetScalingPlanResourceForecastDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetScalingPlanResourceForecastDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetScalingPlanResourceForecastDataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetScalingPlanResourceForecastDataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetScalingPlanResourceForecastDataCommandOutput> {
    return deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

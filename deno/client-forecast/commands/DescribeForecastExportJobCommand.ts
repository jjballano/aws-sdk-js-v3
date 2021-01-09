import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient.ts";
import { DescribeForecastExportJobRequest, DescribeForecastExportJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeForecastExportJobCommand,
  serializeAws_json1_1DescribeForecastExportJobCommand,
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

export type DescribeForecastExportJobCommandInput = DescribeForecastExportJobRequest;
export type DescribeForecastExportJobCommandOutput = DescribeForecastExportJobResponse & __MetadataBearer;

/**
 * <p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p>
 *          <p>In addition to listing the properties provided by the user in the
 *         <code>CreateForecastExportJob</code> request, this operation lists the following
 *       properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *          </ul>
 */
export class DescribeForecastExportJobCommand extends $Command<
  DescribeForecastExportJobCommandInput,
  DescribeForecastExportJobCommandOutput,
  ForecastClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeForecastExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeForecastExportJobCommandInput, DescribeForecastExportJobCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeForecastExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeForecastExportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeForecastExportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeForecastExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeForecastExportJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeForecastExportJobCommandOutput> {
    return deserializeAws_json1_1DescribeForecastExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

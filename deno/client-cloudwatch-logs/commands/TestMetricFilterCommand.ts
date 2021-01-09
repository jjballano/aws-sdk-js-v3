import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient.ts";
import { TestMetricFilterRequest, TestMetricFilterResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1TestMetricFilterCommand,
  serializeAws_json1_1TestMetricFilterCommand,
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

export type TestMetricFilterCommandInput = TestMetricFilterRequest;
export type TestMetricFilterCommandOutput = TestMetricFilterResponse & __MetadataBearer;

/**
 * <p>Tests the filter pattern of a metric filter against a sample of log event messages. You
 *       can use this operation to validate the correctness of a metric filter pattern.</p>
 */
export class TestMetricFilterCommand extends $Command<
  TestMetricFilterCommandInput,
  TestMetricFilterCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestMetricFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestMetricFilterCommandInput, TestMetricFilterCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "TestMetricFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestMetricFilterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestMetricFilterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestMetricFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TestMetricFilterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestMetricFilterCommandOutput> {
    return deserializeAws_json1_1TestMetricFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

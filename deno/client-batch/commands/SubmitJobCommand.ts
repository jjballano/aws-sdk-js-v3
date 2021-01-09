import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient.ts";
import { SubmitJobRequest, SubmitJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1SubmitJobCommand,
  serializeAws_restJson1SubmitJobCommand,
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

export type SubmitJobCommandInput = SubmitJobRequest;
export type SubmitJobCommandOutput = SubmitJobResponse & __MetadataBearer;

/**
 * <p>Submits an AWS Batch job from a job definition. Parameters specified during <a>SubmitJob</a> override
 *    parameters defined in the job definition.</p>
 *          <important>
 *             <p>Jobs run on Fargate resources
 *     don't
 *     run for more than 14 days. After 14 days, the Fargate resources might no longer be available and the job is
 *     terminated.</p>
 *          </important>
 */
export class SubmitJobCommand extends $Command<
  SubmitJobCommandInput,
  SubmitJobCommandOutput,
  BatchClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubmitJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubmitJobCommandInput, SubmitJobCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "SubmitJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubmitJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SubmitJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubmitJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SubmitJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubmitJobCommandOutput> {
    return deserializeAws_restJson1SubmitJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

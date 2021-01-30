import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient.ts";
import { StartMedicalTranscriptionJobRequest, StartMedicalTranscriptionJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartMedicalTranscriptionJobCommand,
  serializeAws_json1_1StartMedicalTranscriptionJobCommand,
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

export type StartMedicalTranscriptionJobCommandInput = StartMedicalTranscriptionJobRequest;
export type StartMedicalTranscriptionJobCommandOutput = StartMedicalTranscriptionJobResponse & __MetadataBearer;

/**
 * <p>Starts a batch job to transcribe medical speech to text.</p>
 */
export class StartMedicalTranscriptionJobCommand extends $Command<
  StartMedicalTranscriptionJobCommandInput,
  StartMedicalTranscriptionJobCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartMedicalTranscriptionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMedicalTranscriptionJobCommandInput, StartMedicalTranscriptionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "StartMedicalTranscriptionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMedicalTranscriptionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartMedicalTranscriptionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMedicalTranscriptionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartMedicalTranscriptionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartMedicalTranscriptionJobCommandOutput> {
    return deserializeAws_json1_1StartMedicalTranscriptionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient.ts";
import { InferICD10CMRequest, InferICD10CMResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1InferICD10CMCommand,
  serializeAws_json1_1InferICD10CMCommand,
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

export type InferICD10CMCommandInput = InferICD10CMRequest;
export type InferICD10CMCommandOutput = InferICD10CMResponse & __MetadataBearer;

/**
 * <p>InferICD10CM detects medical conditions as entities listed in a patient record and links
 *       those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the
 *       Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in
 *       English language texts.</p>
 */
export class InferICD10CMCommand extends $Command<
  InferICD10CMCommandInput,
  InferICD10CMCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InferICD10CMCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InferICD10CMCommandInput, InferICD10CMCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "InferICD10CMCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InferICD10CMRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InferICD10CMResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InferICD10CMCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InferICD10CMCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InferICD10CMCommandOutput> {
    return deserializeAws_json1_1InferICD10CMCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

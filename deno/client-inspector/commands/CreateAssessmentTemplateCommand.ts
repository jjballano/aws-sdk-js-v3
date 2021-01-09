import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient.ts";
import { CreateAssessmentTemplateRequest, CreateAssessmentTemplateResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateAssessmentTemplateCommand,
  serializeAws_json1_1CreateAssessmentTemplateCommand,
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

export type CreateAssessmentTemplateCommandInput = CreateAssessmentTemplateRequest;
export type CreateAssessmentTemplateCommandOutput = CreateAssessmentTemplateResponse & __MetadataBearer;

/**
 * <p>Creates an assessment template for the assessment target that is specified by the ARN
 *          of the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and
 *          registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
 *          perform security assessments.</p>
 */
export class CreateAssessmentTemplateCommand extends $Command<
  CreateAssessmentTemplateCommandInput,
  CreateAssessmentTemplateCommandOutput,
  InspectorClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAssessmentTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAssessmentTemplateCommandInput, CreateAssessmentTemplateCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "CreateAssessmentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssessmentTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAssessmentTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAssessmentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAssessmentTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssessmentTemplateCommandOutput> {
    return deserializeAws_json1_1CreateAssessmentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

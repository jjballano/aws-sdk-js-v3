import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient.ts";
import { UpdateAssessmentControlRequest, UpdateAssessmentControlResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateAssessmentControlCommand,
  serializeAws_restJson1UpdateAssessmentControlCommand,
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

export type UpdateAssessmentControlCommandInput = UpdateAssessmentControlRequest;
export type UpdateAssessmentControlCommandOutput = UpdateAssessmentControlResponse & __MetadataBearer;

/**
 * <p>
 * Updates a control within an assessment in AWS Audit Manager.
 * </p>
 */
export class UpdateAssessmentControlCommand extends $Command<
  UpdateAssessmentControlCommandInput,
  UpdateAssessmentControlCommandOutput,
  AuditManagerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAssessmentControlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssessmentControlCommandInput, UpdateAssessmentControlCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateAssessmentControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssessmentControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentControlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAssessmentControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAssessmentControlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssessmentControlCommandOutput> {
    return deserializeAws_restJson1UpdateAssessmentControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

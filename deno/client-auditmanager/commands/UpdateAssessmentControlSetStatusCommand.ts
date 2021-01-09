import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient.ts";
import { UpdateAssessmentControlSetStatusRequest, UpdateAssessmentControlSetStatusResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand,
  serializeAws_restJson1UpdateAssessmentControlSetStatusCommand,
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

export type UpdateAssessmentControlSetStatusCommandInput = UpdateAssessmentControlSetStatusRequest;
export type UpdateAssessmentControlSetStatusCommandOutput = UpdateAssessmentControlSetStatusResponse & __MetadataBearer;

/**
 * <p>
 *    Updates the status of a control set in an AWS Audit Manager assessment.
 * </p>
 */
export class UpdateAssessmentControlSetStatusCommand extends $Command<
  UpdateAssessmentControlSetStatusCommandInput,
  UpdateAssessmentControlSetStatusCommandOutput,
  AuditManagerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAssessmentControlSetStatusCommandInput) {
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
  ): Handler<UpdateAssessmentControlSetStatusCommandInput, UpdateAssessmentControlSetStatusCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateAssessmentControlSetStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssessmentControlSetStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentControlSetStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateAssessmentControlSetStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAssessmentControlSetStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAssessmentControlSetStatusCommandOutput> {
    return deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

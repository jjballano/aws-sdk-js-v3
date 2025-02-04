import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient.ts";
import { GetEvidenceFoldersByAssessmentRequest, GetEvidenceFoldersByAssessmentResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand,
  serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand,
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

export interface GetEvidenceFoldersByAssessmentCommandInput extends GetEvidenceFoldersByAssessmentRequest {}
export interface GetEvidenceFoldersByAssessmentCommandOutput
  extends GetEvidenceFoldersByAssessmentResponse,
    __MetadataBearer {}

/**
 * <p>
 *    Returns the evidence folders from a specified assessment in Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFoldersByAssessmentCommand } from "../../client-auditmanager/mod.ts";
 * // const { AuditManagerClient, GetEvidenceFoldersByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetEvidenceFoldersByAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEvidenceFoldersByAssessmentCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFoldersByAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEvidenceFoldersByAssessmentCommand extends $Command<
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEvidenceFoldersByAssessmentCommandInput) {
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
  ): Handler<GetEvidenceFoldersByAssessmentCommandInput, GetEvidenceFoldersByAssessmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetEvidenceFoldersByAssessmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEvidenceFoldersByAssessmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEvidenceFoldersByAssessmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetEvidenceFoldersByAssessmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEvidenceFoldersByAssessmentCommandOutput> {
    return deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

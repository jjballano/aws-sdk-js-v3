import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient.ts";
import {
  GetAssociationForServiceQuotaTemplateRequest,
  GetAssociationForServiceQuotaTemplateResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand,
  serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand,
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

export type GetAssociationForServiceQuotaTemplateCommandInput = GetAssociationForServiceQuotaTemplateRequest;
export type GetAssociationForServiceQuotaTemplateCommandOutput = GetAssociationForServiceQuotaTemplateResponse &
  __MetadataBearer;

/**
 * <p>Retrieves the <code>ServiceQuotaTemplateAssociationStatus</code> value from the service.
 *       Use this action to determine if the Service Quota template is associated, or enabled. </p>
 */
export class GetAssociationForServiceQuotaTemplateCommand extends $Command<
  GetAssociationForServiceQuotaTemplateCommandInput,
  GetAssociationForServiceQuotaTemplateCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAssociationForServiceQuotaTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceQuotasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAssociationForServiceQuotaTemplateCommandInput, GetAssociationForServiceQuotaTemplateCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "GetAssociationForServiceQuotaTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssociationForServiceQuotaTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAssociationForServiceQuotaTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAssociationForServiceQuotaTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAssociationForServiceQuotaTemplateCommandOutput> {
    return deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

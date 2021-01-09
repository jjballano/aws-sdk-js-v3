import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient.ts";
import {
  ListServiceQuotaIncreaseRequestsInTemplateRequest,
  ListServiceQuotaIncreaseRequestsInTemplateResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand,
  serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand,
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

export type ListServiceQuotaIncreaseRequestsInTemplateCommandInput = ListServiceQuotaIncreaseRequestsInTemplateRequest;
export type ListServiceQuotaIncreaseRequestsInTemplateCommandOutput = ListServiceQuotaIncreaseRequestsInTemplateResponse &
  __MetadataBearer;

/**
 * <p>Returns a list of the quota increase requests in the template. </p>
 */
export class ListServiceQuotaIncreaseRequestsInTemplateCommand extends $Command<
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput) {
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
  ): Handler<
    ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
  > {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "ListServiceQuotaIncreaseRequestsInTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServiceQuotaIncreaseRequestsInTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListServiceQuotaIncreaseRequestsInTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> {
    return deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

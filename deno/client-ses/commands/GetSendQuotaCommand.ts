import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { GetSendQuotaResponse } from "../models/models_0.ts";
import { deserializeAws_queryGetSendQuotaCommand, serializeAws_queryGetSendQuotaCommand } from "../protocols/Aws_query.ts";
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

export type GetSendQuotaCommandInput = {};
export type GetSendQuotaCommandOutput = GetSendQuotaResponse & __MetadataBearer;

/**
 * <p>Provides the sending limits for the Amazon SES account. </p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class GetSendQuotaCommand extends $Command<
  GetSendQuotaCommandInput,
  GetSendQuotaCommandOutput,
  SESClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSendQuotaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSendQuotaCommandInput, GetSendQuotaCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetSendQuotaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GetSendQuotaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSendQuotaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetSendQuotaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSendQuotaCommandOutput> {
    return deserializeAws_queryGetSendQuotaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

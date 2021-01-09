import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { EnableLoggingMessage, LoggingStatus } from "../models/models_0.ts";
import {
  deserializeAws_queryEnableLoggingCommand,
  serializeAws_queryEnableLoggingCommand,
} from "../protocols/Aws_query.ts";
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

export type EnableLoggingCommandInput = EnableLoggingMessage;
export type EnableLoggingCommandOutput = LoggingStatus & __MetadataBearer;

/**
 * <p>Starts logging information, such as queries and connection attempts, for the
 *             specified Amazon Redshift cluster.</p>
 */
export class EnableLoggingCommand extends $Command<
  EnableLoggingCommandInput,
  EnableLoggingCommandOutput,
  RedshiftClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableLoggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableLoggingCommandInput, EnableLoggingCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "EnableLoggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableLoggingMessage.filterSensitiveLog,
      outputFilterSensitiveLog: LoggingStatus.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryEnableLoggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableLoggingCommandOutput> {
    return deserializeAws_queryEnableLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

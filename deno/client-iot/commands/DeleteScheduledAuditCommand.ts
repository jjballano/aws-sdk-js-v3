import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { DeleteScheduledAuditRequest, DeleteScheduledAuditResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteScheduledAuditCommand,
  serializeAws_restJson1DeleteScheduledAuditCommand,
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

export type DeleteScheduledAuditCommandInput = DeleteScheduledAuditRequest;
export type DeleteScheduledAuditCommandOutput = DeleteScheduledAuditResponse & __MetadataBearer;

/**
 * <p>Deletes a scheduled audit.</p>
 */
export class DeleteScheduledAuditCommand extends $Command<
  DeleteScheduledAuditCommandInput,
  DeleteScheduledAuditCommandOutput,
  IoTClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteScheduledAuditCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteScheduledAuditCommandInput, DeleteScheduledAuditCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteScheduledAuditCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteScheduledAuditRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteScheduledAuditResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteScheduledAuditCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteScheduledAuditCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteScheduledAuditCommandOutput> {
    return deserializeAws_restJson1DeleteScheduledAuditCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

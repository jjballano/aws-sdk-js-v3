import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient.ts";
import { DeleteQueuedSavingsPlanRequest, DeleteQueuedSavingsPlanResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteQueuedSavingsPlanCommand,
  serializeAws_restJson1DeleteQueuedSavingsPlanCommand,
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

export type DeleteQueuedSavingsPlanCommandInput = DeleteQueuedSavingsPlanRequest;
export type DeleteQueuedSavingsPlanCommandOutput = DeleteQueuedSavingsPlanResponse & __MetadataBearer;

/**
 * <p>Deletes the queued purchase for the specified Savings Plan.</p>
 */
export class DeleteQueuedSavingsPlanCommand extends $Command<
  DeleteQueuedSavingsPlanCommandInput,
  DeleteQueuedSavingsPlanCommandOutput,
  SavingsplansClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteQueuedSavingsPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SavingsplansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteQueuedSavingsPlanCommandInput, DeleteQueuedSavingsPlanCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SavingsplansClient";
    const commandName = "DeleteQueuedSavingsPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteQueuedSavingsPlanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteQueuedSavingsPlanResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteQueuedSavingsPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteQueuedSavingsPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteQueuedSavingsPlanCommandOutput> {
    return deserializeAws_restJson1DeleteQueuedSavingsPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
